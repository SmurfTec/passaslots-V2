import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { generateJWT } from '../../../../utils';
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

export default async function SignIn(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, body, query } = req;
  if (req.method == 'OPTIONS') {
    res.setHeader('Allow', 'POST');
    return res.status(202).json({});
  }
  switch (method) {
    case 'POST': {
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        const signedInUser = await prisma.admin.findUnique({ where: { email: req.body.email } });
        const RETRY_ATTEMPTS = process.env.RETRY_ATTEMPTS ? +process.env.RETRY_ATTEMPTS : 2;
        if (signedInUser && signedInUser.failedRetryAttempts > RETRY_ATTEMPTS) {
          return res.status(400).json({ error: 'Too many failed attempts please contact passa admin' });
        }
        const isPasswordMatch = signedInUser && (await comparePasswords(req.body.password, signedInUser.password));
        if (signedInUser && isPasswordMatch) {
          const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY ? process.env.JWT_SECRET_KEY : '';
          const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME ? process.env.JWT_EXPIRATION_TIME : '';
          await prisma.admin.update({
            where: { id: signedInUser.id },
            data: {
              failedRetryAttempts: 0,
            },
          });
          return res
            .status(200)
            .json({ ...signedInUser, token: await generateJWT(signedInUser, JWT_SECRET_KEY, JWT_EXPIRATION_TIME) });
        } else if (signedInUser && !isPasswordMatch) {
          await prisma.admin.update({
            where: { id: signedInUser.id },
            data: {
              failedRetryAttempts: signedInUser.failedRetryAttempts + 1,
            },
          });
          return res.status(400).json({ error: 'Either email or password is wrong' });
        } else {
          return res.status(400).json({ error: 'Either email or password is wrong' });
        }
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
    }
  }
}

async function comparePasswords(enteredPassword: string, storedPassword: string) {
  const isMatch = await bcrypt.compare(enteredPassword, storedPassword);
  return isMatch;
}
