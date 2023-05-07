import { Button, Container, Grid, Title } from '@mantine/core';
import { SingleBlog, SingleBlogProps } from './singleBlog';

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

export function BlogLayout() {
  return (
    <Container
      py={100}
      fluid
      pl={100}
      pr={69}
      style={{ zIndex: 150, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      <Grid>
        <Grid.Col sm={12} className="text-center sm:text-left">
          <Title className="font-[700] text-[48px] leading-[56px] tracking-[-0.015em] uppercase">FEATURED BLOGS</Title>
        </Grid.Col>
      </Grid>

      <Grid justify="space-between" py={100} grow gutter={30}>
        {blogData.map((item, key) => (
          <Grid.Col className="flex justify-between" key={key + item.title} md={4}>
            <SingleBlog author={item.author} date={item.date} image={item.image} title={item.title} />
          </Grid.Col>
        ))}
      </Grid>
      <Grid align="center" justify="center" className="text-center sm:text-center" p={0}>
        <Button
          styles={{
            root: {
              border: 'none',
              background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
              padding: '15px 53px',
              letterSpacing: '-0.015em',
              // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
              '&:hover': {
                background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
              },
              fontSize: '20px',
              lineHeight: '23px',
              textTransform: 'uppercase',
              height: '57px',
              width: '212px',
            },
            label: {
              marginBottom: '-2px',
              fontSize: '20px',
              lineHeight: '23px',
            },
          }}
          radius={50}
          className="font-[500]"
        >
          LOAD MORE
        </Button>
      </Grid>
    </Container>
  );
}
