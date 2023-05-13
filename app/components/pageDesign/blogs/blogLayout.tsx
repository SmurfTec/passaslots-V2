import { Button, Container, Grid, Title } from '@mantine/core';
import { SingleBlog, SingleBlogProps } from './singleBlog';
import { useEffect, useState } from 'react';
import axios from 'axios';
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

export function BlogLayout() {
  const [blogsData, setBlogsData] = useState<SingleBlogProps[]>([]);
  const matches = useMediaQuery('(max-width: 810px)', true);

  const getBlogs = () => {
    const BASE_URL = process.env.BASE_URL as string;
    const BLOGS_URL = process.env.BLOGS_URL as string;
    axios
      .get(BASE_URL + BLOGS_URL)
      .then((res) => {
        setBlogsData(res.data);
      })
      .catch((e) => {
        setBlogsData([]);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Container
      py={100}
      fluid
      pl={matches ? 5 : 90}
      pr={matches ? 5 : 69}
      style={{ zIndex: 150, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      <Grid>
        <Grid.Col sm={12} className="text-center sm:text-left">
          <Title className="font-[700] md:!text-[48px] sm:!text-[24px] xs:!text-[24px] leading-[56px] tracking-[-0.015em] uppercase">FEATURED BLOGS</Title>
        </Grid.Col>
      </Grid>

      <Grid justify="center" py={30} grow gutter={matches ? 10 : 30}>
        {blogsData.length === 0 && <p className="font-[700] text-[24px] center">Data not available</p>}
        {blogsData.map((item, key) => (
          <Grid.Col className="flex justify-center" key={key + item.title} md={4} sm={6} xs={6}>
            <SingleBlog author={item.author} date={item.publishedOn as string} image={item.image} title={item.title} />
          </Grid.Col>
        ))}
        {/* {blogData.map((item, key) => (
          <Grid.Col className="flex justify-center" key={key + item.title} md={4} sm={6} xs={6}>
            <SingleBlog author={item.author} date={item.date} image={item.image} title={item.title} />
          </Grid.Col>
        ))} */}
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
