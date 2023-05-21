import { MoreBlogs, SingleBlogHero } from '@pasa/components';
import axios from 'axios';
import { BlogComponentInterface } from '../../../types';

export default function SingleBlogs({ blogData }: BlogComponentInterface) {
  return (
    <>
      <SingleBlogHero blogData={blogData} />
      <MoreBlogs />
    </>
  );
}
export const getServerSideProps = async ({ params }: any) => {
  const blogId = params.id ? params.id : '';
  const blogData = await getSingleBlog(blogId);
  return {
    props: { blogData },
    redirect: '/blog',
  };
};

const getSingleBlog = async (blogId: string) => {
  const blogData = await axios
    .get((process.env.BASE_URL as string) + process.env.BLOGS_URL + `/${blogId}`)
    .then((res) => {
      return res.data.blog;
    })
    .catch((e) => {
      return {};
    });

  return blogData;
};
