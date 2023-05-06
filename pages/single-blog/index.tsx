import { MoreBlogs, SingleBlogHero } from '@pasa/components';

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function SingleBlogs() {
  return (
    <>
    <SingleBlogHero />
    <MoreBlogs />
    </>
  );
}
