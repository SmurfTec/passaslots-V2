import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function dashboardGraph(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, query } = req;
  switch (method) {
    case 'GET':
      await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        origin: '*',
        optionsSuccessStatus: 200,
      });
      const data = await returnCountForDashboardStats(query.type as string, query.days ? +query.days : 0);
      if (typeof data === 'number') res.status(200).json({ count: data } as any);
      else res.status(400).json(data as any);
      break;
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const returnCountForDashboardStats = async (type: string, days: number) => {
  switch (type) {
    case 'players': {
      return await getPlayersGraphData(days);
    }
    case 'distributer': {
      return await getDistributerGraphData(days);
    }
    case 'subscribers': {
      return await getSubscribersGraphData(days);
    }
    default: {
      return {
        providedParams: type,
        error: 'unknown params ' + type,
        allowedParams: ['players', 'distributer', 'subscribers'],
      };
    }
  }
};

const getSubscribersGraphData = async (days: number) => {
  const finalData = [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index

  const startDate = new Date(currentDate.getFullYear(), currentMonth - 1, currentDate.getDate() - days);
  const endDate = new Date(currentDate.getFullYear(), currentMonth - 1, currentDate.getDate() + 1);

  const data = await prisma.newsLetter.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lt: endDate,
      },
    },
  });

  return getCountByMonth(data);
};

const getDistributerGraphData = async (days: number) => {
  const finalData = [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index

  const startDate = new Date(currentDate.getFullYear(), currentMonth - 1, currentDate.getDate() - days);
  const endDate = new Date(currentDate.getFullYear(), currentMonth - 1, currentDate.getDate() + 1);

  const data = await prisma.signup_Contact.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lt: endDate,
      },
      purpose: 'signup',
    },
  });

  return getCountByMonth(data);
};

const getPlayersGraphData = async (days: number) => {
  const finalData = [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index

  const startDate = new Date(currentDate.getFullYear(), currentMonth - 1, currentDate.getDate() - days);
  const endDate = new Date(currentDate.getFullYear(), currentMonth - 1, currentDate.getDate() + 1);

  const data = await prisma.playerRegistration.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lt: endDate,
      },
    },
  });

  return getCountByMonth(data);
};

function getCountByMonth(data: any) {
  const finalData = [];
  const countByMonth = data.reduce((acc: any, obj: any) => {
    const month = obj.createdAt.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index
    const year = obj.createdAt.getFullYear();
    const key = `${year}-${month}`;

    if (!acc[key]) {
      acc[key] = 0;
    }

    acc[key]++;

    return acc;
  }, {});

  for (const key in countByMonth) {
    if (countByMonth.hasOwnProperty(key)) {
      const [year, month] = key.split('-');
      const count = countByMonth[key];
      finalData.push({ month: `Month: ${month}/${year}`, count });
    }
  }
  return finalData;
}
