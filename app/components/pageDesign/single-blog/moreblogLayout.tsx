import { Button, Container, Grid, Title } from '@mantine/core';
import { SingleBlog, SingleBlogProps } from '../blogs/singleBlog';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Blog } from '../../../../types';
import { Loader } from 'tabler-icons-react';

export function MoreBlogs() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  const matches2 = useMediaQuery('(max-width: 768px)', true);

  const [blogData, setBlogsData] = useState<Blog[]>([]);

  const getBlogs = () => {
    const BASE_URL = process.env.BASE_URL as string;
    const BLOGS_URL = process.env.BLOGS_URL as string;

    axios
      .get(BASE_URL + BLOGS_URL, { params: { take: 4, skip: 0 } })
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
      style={{ zIndex: 50, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      <Grid>
        <Grid.Col sm={12} className="text-center sm:text-left">
          <Title className="font-[700] text-[48px] leading-[56px] tracking-[-0.015em] uppercase">MORE BLOGS</Title>
        </Grid.Col>
      </Grid>

      <Grid justify="center" align="center" pb={30} pt={30} grow gutter={matches ? 10 : 30}>
        {blogData.map((item, key) => (
          <Grid.Col
            p={0}
            maw={matches2 ? '172px' : 'auto'}
            className="grid justify-center"
            key={key + item.title}
            xl={3}
            lg={4}
            md={4}
            sm={6}
            xs={6}
          >
            <SingleBlog
              author={item.author}
              date={item.publishedOn as string}
              image={item.image}
              title={item.title}
              id={item.id}
            />
          </Grid.Col>
        ))}
        {/* {blogData.map((item, key) => (
          <Grid.Col className="flex justify-center" key={key + item.title} md={4} sm={6} xs={6}>
            <SingleBlog author={item.author} date={item.date} image={item.image} title={item.title} />
          </Grid.Col>
        ))} */}
      </Grid>
    </Container>
  );
}
