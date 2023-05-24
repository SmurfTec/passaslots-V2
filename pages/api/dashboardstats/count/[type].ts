import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function dashboard(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, query } = req;
  if (req.method == 'OPTIONS') {
    res.setHeader('Allow', 'GET');
    return res.status(202).json({});
  }
  switch (method) {
    case 'GET':
      await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        origin: '*',
        optionsSuccessStatus: 200,
      });
      const data = await returnCountForDashboardStats(query.type as string);
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

const returnCountForDashboardStats = async (type: string) => {
  switch (type) {
    case 'contactSubmissions': {
      return await getContactSubmissionCount();
    }
    case 'subscribers-overall': {
      return await getSubscribersCount();
    }
    case 'subscribers-thisMonth': {
      return await getSubscribersCount(1);
    }
    case 'playersSignup-thisMonth': {
      return await getPlayerSignupCount();
    }
    case 'distributerSignup-thisMonth': {
      return await getDistributerSignupCount();
    }
    default: {
      return {
        providedParams: type,
        error: 'unknown params ' + type,
        allowedParams: [
          'contactSubmissions',
          'subscribers-overall',
          'subscribers-thisMonth',
          'playersSignup-thisMonth',
          'distributerSignup-thisMonth',
        ],
      };
    }
  }
};

const getContactSubmissionCount = async () => {
  return await prisma.signup_Contact.count({ where: { purpose: 'message' } });
};

const getSubscribersCount = async (type = 0) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  return await prisma.newsLetter.count(
    type !== 0
      ? {
          where: {
            createdAt: {
              gte: new Date(currentDate.getFullYear(), currentMonth - 1, 1),
              lt: new Date(currentDate.getFullYear(), currentMonth, 1),
            },
          },
        }
      : undefined
  );
};

const getPlayerSignupCount = async () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  return await prisma.playerRegistration.count({
    where: {
      createdAt: {
        gte: new Date(currentDate.getFullYear(), currentMonth - 1, 1),
        lt: new Date(currentDate.getFullYear(), currentMonth, 1),
      },
    },
  });
};

const getDistributerSignupCount = async () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  return await prisma.signup_Contact.count({
    where: {
      createdAt: {
        gte: new Date(currentDate.getFullYear(), currentMonth - 1, 1),
        lt: new Date(currentDate.getFullYear(), currentMonth, 1),
      },
      purpose: 'signup',
    },
  });
};
