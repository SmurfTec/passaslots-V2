import type { NextApiRequest, NextApiResponse } from 'next';
import * as corsMiddleware from '../../middlewares';

export default async function Version(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method } = req;
  switch (method) {
    case 'GET':
      res.status(200).json({ version: '0.1' });
      break;
    default:
      res.setHeader('Allow', 'POST');
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export const middleware = [corsMiddleware];
