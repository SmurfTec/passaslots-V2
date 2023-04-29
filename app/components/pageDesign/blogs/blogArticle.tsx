import { Container, Grid, Image, Title } from '@mantine/core';
import { SingleArticle, SingleArticleProps } from './singleArticle';

const articleData: Array<SingleArticleProps> = [
  {
    image: '/images/pages/blogs/article1.png',
    author: 'Jonathan Marcus',
    title: 'Defaulting to Mindfulness: The Third Person Effect',
    date: '29.Jun.2021',
  },
  {
    image: '/images/pages/blogs/article2.png',
    author: 'Jonathan Marcus',
    title: 'Lara records the determination of sporting Kuwaiti women',
    date: '29.Jun.2021',
  },
  {
    image: '/images/pages/blogs/article3.png',
    author: 'Jonathan Marcus',
    title: 'Lara records the determination of sporting Kuwaiti women',
    date: '29.Jun.2021',
  },

  {
    image: '/images/pages/blogs/article4.png',
    author: 'Jonathan Marcus',
    title: 'Lara records the determination of sporting Kuwaiti women',
    date: '29.Jun.2021',
  },
  {
    image: '/images/pages/blogs/article5.png',
    author: 'Jonathan Marcus',
    title: 'Lara records the determination of sporting Kuwaiti women',
    date: '29.Jun.2021',
  },
];

export function BlogArticle() {
  return (
    <>
      <Container size={1300} py={100}>
        <div>
          <Image src="/images/pages/blogs/mobileGame.png" alt="mobile game" />
        </div>
      </Container>
      <div className="bg-[#751F86]">
        <Container className='py-12 md:py-24' size={1300}>
          <Title color="white" className="font-[700]" order={4}>
            More articles
          </Title>
          <Container size={1100} py={40} className="space-y-16">
           
                {articleData.map((article, key) => (
                  <SingleArticle
                    key={key + article.title}
                    author={article.author}
                    date={article.date}
                    image={article.image}
                    title={article.title}
                  />
                ))}
          </Container>
        </Container>
      </div>
    </>
  );
}
