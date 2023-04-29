import { Button, Container, Grid, Title } from '@mantine/core';
import { SingleBlog, SingleBlogProps } from './singleBlog';

const blogData: Array<SingleBlogProps> = [
  {
    image: '/images/pages/blogs/Blog1.png',
    author: 'Muiz Ul Hassan',
    title: 'Top blogs for games',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/Blog2.png',
    author: 'Muiz Ul Hassan',
    title: 'Top blogs for games',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/Blog3.png',
    author: 'Muiz Ul Hassan',
    title: 'Top blogs for games',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/Blog4.png',
    author: 'Muiz Ul Hassan',
    title: 'Top blogs for games',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/Blog5.png',
    author: 'Muiz Ul Hassan',
    title: 'Top blogs for games',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/Blog1.png',
    author: 'Muiz Ul Hassan',
    title: 'Top blogs for games',
    date: '15 Feb 2023',
  },
];

export function BlogLayout() {
  return (
    <Container pt={100} size={1300}>
      <Grid>
        <Grid.Col sm={6} className='text-center sm:text-left'>
          <Title order={3} className="font-[700]">
            FEATURED <br /> BLOGS
          </Title>
        </Grid.Col>
        <Grid.Col className='text-center sm:text-right' sm={6} p={0}>
          <Button className="h-12 px-12 rounded-md text-[14px] font-[300] sm:mt-0 mt-8 ">VIEW ALL</Button>
        </Grid.Col>
      </Grid>

      <Grid py={100} grow gutter={30}>
        {blogData.map((item, key) => (
          <Grid.Col key={key + item.title} md={4}>
            <SingleBlog author={item.author} date={item.date} image={item.image} title={item.title} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
