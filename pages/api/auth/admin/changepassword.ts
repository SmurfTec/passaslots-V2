import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { bcryptPassword, comparePasswords, decodeJWT, generateJWT } from '../../../../utils';

const prisma = new PrismaClient();

export default async function SignIn(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, headers } = req;
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

        const token = headers.authorization?.split('bearer')[1].trim();

        const decodedToken = await decodeJWT(token);
        const signedInUser = token && (await prisma.admin.findUnique({ where: { email: decodedToken.email } }));

        if (signedInUser && (await comparePasswords(req.body.oldPassword, signedInUser?.password))) {
          const newPassword = await bcryptPassword(req.body.newPassword);
          await prisma.admin.update({ where: { id: decodedToken.id }, data: { password: newPassword } });
          res.status(200).json({ message: `Password successfully changed` });
        } else {
          res.status(400).json({ message: `Old Password is wrong` });
        }
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
    }
  }
}
