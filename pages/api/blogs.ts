import { PrismaClient, blogs } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import formidable from 'formidable';

const prisma = new PrismaClient();

export default async function BlogsHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, body } = req;
  switch (method) {
    case 'GET':
      try {
        const blogs = await prisma.blogs.findMany({ where: { isDeleted: false } });

        res.status(200).json(blogs as any);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    case 'POST': {
      try {
        const form = new formidable.IncomingForm();

        await form.parse(req, async function (err, fields, files: formidable.Files) {
          const fileName = await saveFile(files.image);
          const blogs = await prisma.blogs.create({
            data: {
              ...fields,
              isDeleted: false,
              image: fileName,
            } as any,
          });
          return res.status(200).json({ blogs });
        });
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
    }
  }
}
export const config = {
  api: {
    bodyParser: false,
  },
};

const saveFile = async (file: any) => {
  const path = require('path');
  const rootDir = path.resolve('/');
  const filePath = path.join(rootDir, 'public', 'uploads', file.originalFilename.split(' ').join(''));
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(filePath, data);
  await fs.unlinkSync(file.filepath);
  return `/uploads/${file.originalFilename.split(' ').join('')}`;
};
