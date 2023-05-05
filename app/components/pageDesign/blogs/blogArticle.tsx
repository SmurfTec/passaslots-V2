import { Container, Grid, Image, Title } from '@mantine/core';
import { SingleArticle, SingleArticleProps } from './singleArticle';

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
  return (
    <div style={{
      backgroundColor: '#150B2E',
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(20px)',
      backgroundSize: 'cover',
    }}>
      <Container py={100} fluid pl={90} pr={69}>
        <Grid>
          <Grid.Col sm={12}>
            <div className='text-center'>
              <Title color="white" className="font-[700] text-center text-[48px] leading-[56px] tracking-[-0.015em] uppercase" >
                More articles
              </Title>
            </div>
          </Grid.Col>
          <Grid justify='space-between' py={100} grow gutter={30}>   
            {articleData.map((article, key) => (
              <Grid.Col className='flex justify-between' key={key + article.title} md={6}>
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
