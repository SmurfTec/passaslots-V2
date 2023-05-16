import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

export default async function Version(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method } = req;
  switch (method) {
    case 'GET':
      await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
      });
      res.status(200).json({ version: '0.2.1' });
      break;
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
