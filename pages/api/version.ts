import type { NextApiRequest, NextApiResponse } from 'next';
import * as corsMiddleware from '../../middlewares';

export default async function Version(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method } = req;
  switch (method) {
    case 'GET':
      res.status(200).json({ version: '0.1.2' });
      break;
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export const middleware = [corsMiddleware];
