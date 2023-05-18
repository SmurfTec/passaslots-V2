import { Container, Grid, Image, Title } from '@mantine/core';
import { SingleArticle, SingleArticleProps } from './singleArticle';
import { useMediaQuery } from '@mantine/hooks';

const articleData: Array<SingleArticleProps> = [
  {
    image: '/images/pages/blogs/article1.png',
    author: 'Adam Smith',
    title: 'How casino is Changing through years',
    date: '5 Feb, 2023',
  },
  {
    image: '/images/pages/blogs/article2.png',
    author: 'Adam Smith',
    title: 'Most Popular casino games 2022',
    date: '5 Feb, 2023',
  },
  {
    image: '/images/pages/blogs/article1.png',
    author: 'Adam Smith',
    title: 'How casino is Changing through years',
    date: '5 Feb, 2023',
  },
  {
    image: '/images/pages/blogs/article2.png',
    author: 'Adam Smith',
    title: 'Most Popular casino games 2022',
    date: '5 Feb, 2023',
  },
  {
    image: '/images/pages/blogs/article1.png',
    author: 'Adam Smith',
    title: 'How casino is Changing through years',
    date: '5 Feb, 2023',
  },
  {
    image: '/images/pages/blogs/article2.png',
    author: 'Adam Smith',
    title: 'Most Popular casino games 2022',
    date: '5 Feb, 2023',
  },
];

export function BlogArticle() {
  const matches = useMediaQuery('(max-width: 570px)');
  return (
    <div
      style={{
        backgroundColor: '#150B2E',
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',
        zIndex: 150,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container w={'80%'} py={matches ? 50 : 100} fluid pl={matches ? 5 : 90} pr={matches ? 5 : 69}>
        <Grid>
          <Grid.Col sm={12}>
            <div className="text-center">
              <Title
                color="white"
                className="font-[700] text-center md:!text-[48px] sm:!text-[24px] xs:!text-[24px] leading-[56px] tracking-[-0.015em] uppercase"
              >
                More articles
              </Title>
            </div>
          </Grid.Col>
          <Grid justify="space-between" py={matches ? 20 : 100} grow gutter={matches ? 10 : 30}>
            {articleData.map((article, key) => (
              <Grid.Col className="flex justify-center" key={key + article.title} lg={6}>
                <SingleArticle
                  author={article.author}
                  date={article.date}
                  image={article.image}
                  title={article.title}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
