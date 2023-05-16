import { Button, Container, Grid, Title } from '@mantine/core';
import { SingleBlog, SingleBlogProps } from '../blogs/singleBlog';
import { useMediaQuery } from '@mantine/hooks';

const blogData: Array<SingleBlogProps> = [
  {
    image: '/images/pages/blogs/game1.png',
    author: 'Adam Smith',
    title: 'Top Games 2023',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/game2.png',
    author: 'Adam Smith',
    title: 'Online Casino Platforms',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/game3.png',
    author: 'Adam Smith',
    title: 'Grand Wheel',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/game1.png',
    author: 'Adam Smith',
    title: 'Top Games 2023',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/game2.png',
    author: 'Adam Smith',
    title: 'Online Casino Platforms',
    date: '15 Feb 2023',
  },
  {
    image: '/images/pages/blogs/game3.png',
    author: 'Adam Smith',
    title: 'Grand Wheel',
    date: '15 Feb 2023',
  },
];

export function MoreBlogs() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  const matches2 = useMediaQuery('(max-width: 768px)', true);

  return (
    <Container py={100} fluid ml={matches ? 5 : 90} mr={matches ? 5 : 69}>
      <Grid>
        <Grid.Col sm={12} className='text-center sm:text-left'>
          <Title className="font-[700] text-[48px] leading-[56px] tracking-[-0.015em] uppercase">
            MORE BLOGS
          </Title>
        </Grid.Col>
      </Grid>

      <Grid justify='space-between' py={100} grow gutter={30}>
        {blogData.map((item, key) => (
          <Grid.Col maw={matches2 ? '172px' : 'auto'} className='flex md:justify-between sm:justify-center xs:justify-center' key={key + item.title} md={4} sm={4} xs={4}>
            <SingleBlog author={item.author} date={item.date} image={item.image} title={item.title} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
