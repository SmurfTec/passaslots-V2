import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  origin: ['*'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default function handler(req: NextApiRequest, res: NextApiResponse, next: any) {
  return runMiddleware(req, res, cors);
}
