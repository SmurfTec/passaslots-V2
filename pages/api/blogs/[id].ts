import { PrismaClient, blogs } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import formidable from 'formidable';

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const prisma = new PrismaClient();

export default async function BlogsHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;
  if (req.method == 'OPTIONS') {
    res.setHeader('Allow', 'PATCH');
    return res.status(202).json({});
  }
  switch (method) {
    case 'GET': {
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });
        const blog = await prisma.blogs.findUnique({ where: { id: query.id as string } });
        res.status(200).json({ blog } as any);
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
    }
    case 'PATCH': {
      try {
        await NextCors(req, res, {
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
          origin: '*',
          optionsSuccessStatus: 200,
        });

        const form = new formidable.IncomingForm();

        await form.parse(req, async function (err, fields, files: formidable.Files) {
          let fileName = undefined;
          files.image &&
            (await saveFile(files.image)
              .then((res) => {
                fileName = res;
              })
              .catch((err) => {
                return res.status(500).json({ err, msg: 'error uploading image' });
              }));

          const { image, ...restFields } = fields;

          await prisma.blogs
            .update({
              where: {
                id: query.id as string,
              },
              data: {
                ...restFields,
                image: fileName,
              },
            })
            .then((updatedBlog) => {
              return res.status(200).json({ updatedBlog });
            })
            .catch((err) => {
              return res.status(500).json({ err, msg: 'error creating blog' });
            });
        });
      } catch (err) {
        res.status(400).json({ message: `Something went wrong! Please read the error message '${err}'` });
      }
      break;
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
