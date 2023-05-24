import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { bcryptPassword, generateJWT } from '../../../../utils';

const prisma = new PrismaClient();

export default async function SignUp(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method } = req;
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
        const hashedPassword = await bcryptPassword(req.body.password);
        let createdUser = (await prisma.admin.create({
          data: {
            email: req.body.email,
            password: hashedPassword,
            isActive: true,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            failedRetryAttempts: 0,
          },
        })) as any;
        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY ? process.env.JWT_SECRET_KEY : '';
        const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME ? process.env.JWT_EXPIRATION_TIME : '';

        const token = generateJWT(createdUser, JWT_SECRET_KEY, JWT_EXPIRATION_TIME);
        createdUser = { ...createdUser, token: token };
        const { password, ...filteredUser } = createdUser;
        res.status(200).json(filteredUser);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
    }
  }
}
