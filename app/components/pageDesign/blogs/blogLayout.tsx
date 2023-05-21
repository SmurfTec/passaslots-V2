import { Button, Container, Grid, Title } from '@mantine/core';
import { SingleBlog, SingleBlogProps } from './singleBlog';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMediaQuery } from '@mantine/hooks';
import { Loader } from 'tabler-icons-react';

export function BlogLayout() {
  const [blogsData, setBlogsData] = useState<SingleBlogProps[]>([]);
  const [paginationData, setPaginationData] = useState({ take: 4, skip: 0 });
  const [loading, setLoading] = useState(false);
  const matches = useMediaQuery('(max-width: 810px)', true);
  const matches2 = useMediaQuery('(max-width: 768px)', true);

  const getBlogs = () => {
    const BASE_URL = process.env.BASE_URL as string;
    const BLOGS_URL = process.env.BLOGS_URL as string;
    setLoading(true);
    axios
      .get(BASE_URL + BLOGS_URL, { params: { take: paginationData.take, skip: paginationData.skip } })
      .then((res) => {
        setBlogsData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setBlogsData([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBlogs();
  }, [paginationData]);

  return (
    <Container
      py={matches ? 50 : 100}
      fluid
      pl={matches ? 5 : 90}
      pr={matches ? 5 : 69}
      style={{ zIndex: 150, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      <Grid>
        <Grid.Col sm={12} className="text-center sm:text-left">
          <Title className="font-[700] md:!text-[48px] sm:!text-[24px] xs:!text-[24px] leading-[56px] tracking-[-0.015em] uppercase">
            FEATURED BLOGS
          </Title>
        </Grid.Col>
      </Grid>

      <Grid justify="center" align="center" pb={30} pt={matches ? 0 : 30} grow gutter={matches ? 10 : 30}>
        {blogsData.length === 0 && loading ? (
          <Loader />
        ) : blogsData.length === 0 ? (
          <p className="font-[700] text-[24px] center">Data not available</p>
        ) : (
          <></>
        )}
        {blogsData.map((item, key) => (
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
              width: '240px',
            },
            label: {
              marginBottom: '-2px',
              fontSize: '20px',
              lineHeight: '23px',
            },
          }}
          mt={15}
          mb={matches ? 15 : 0}
          radius={50}
          className="font-[500]"
          onClick={() => {
            setPaginationData({ ...paginationData, take: paginationData.take + 4 });
          }}
          loading={loading}
        >
          {loading ? 'LOADING' : 'LOAD MORE'}
        </Button>
      </Grid>
    </Container>
  );
}
