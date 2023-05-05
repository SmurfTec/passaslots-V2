import { BlogArticle, BlogDiscover, BlogHero, BlogLayout, BottomSubHeading, NewsletterBlog } from '@pasa/components';

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Blogs() {
  return (
    <>
      <BlogHero />
      <BlogLayout />
      <NewsletterBlog />
      <BlogDiscover />
      <BlogArticle />
      <BottomSubHeading/>
    </>
  );
}
