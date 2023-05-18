import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import NextCors from 'nextjs-cors';

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const prisma = new PrismaClient();

export default async function BlogsHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method, body, query } = req;
  if (req.method == 'OPTIONS') {
    res.setHeader('Allow', 'POST');
    return res.status(202).json({});
  }
  switch (method) {
    case 'GET':
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        const blogs = await prisma.blogs.findMany({
          where: { isDeleted: false },
          take: query.take ? +query.take : undefined,
          skip: query.skip ? +query.skip : 0,
        });

        res.status(200).json(blogs as any);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    case 'POST': {
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        const form = new formidable.IncomingForm();

        await form.parse(req, async function (err, fields, files: formidable.Files) {
          const fileName = await saveFile(files.image);
          const blogs = await prisma.blogs.create({
            data: {
              title: fields.title as string,
              description: fields.description as string,
              publishedOn: fields.publishedOn as string,
              author: fields.author as string,
              richText: fields.richText as string,
              isDeleted: false,
              image: fileName,
            },
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
  let fileName = '';
  await cloudinary.uploader
    .upload(file.filepath, {
      folder: 'uploads',
      public_id: file.originalFilename.split(' ').join(''),
    })
    .then((res: any) => {
      fileName = res.secure_url;
    });
  return fileName;
};
