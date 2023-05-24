import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

export default async function Version(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method } = req;
  switch (method) {
    case 'GET':
      await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        origin: '*',
        optionsSuccessStatus: 200,
      });
      res.status(200).json({ version: '0.3.4' });
      break;
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
