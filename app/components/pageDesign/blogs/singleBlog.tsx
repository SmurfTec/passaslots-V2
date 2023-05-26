import { Card, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NextLink } from '@mantine/next';

export type SingleBlogProps = {
  image: string;
  date: string;
  title: string;
  author: string;
  publishedOn?: string;
  id: string;
};

export function SingleBlog({ image, date, title, author, id }: SingleBlogProps) {
  const matches = useMediaQuery('(max-width: 768px)');
  return (
    <Card
      component={NextLink}
      href={'/single-blog/' + id}
      h={matches ? 188 : 346}
      w={matches ? 167 : 300}
      style={{
        border: image ? undefined : '4px solid #016BE6',
        backgroundColor: '#016BE6 !important',
        background: `linear-gradient(180deg, rgba(1, 107, 230, 0.2046) 5.23%, rgba(1, 107, 230, 0.99) 100%), url("${image}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        backgroundPosition: 'center',
        // margin: 'auto',
        // justifyContent: 'space-between'
      }}
      radius={30}
      mt={matches ? 20 : 50}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '100%',
        }}
      >
        <Card.Section
          style={{
            borderTop: '1px solid white',
            // borderRadius: '0 0 10px 10px',
            // marginTop: matches ? '100px' : '264px',
          }}
        >
          <div className="px-4">
            <Title
              color="white"
              className="font-[700] md:!leading-[40px] sm:!leading-[20px] xs:!leading-[20px] md:!text-[24px] sm:!text-[13px] xs:!text-[13px]"
            >
              {title}
            </Title>
            <div className="flex justify-between">
              <Text color="white" className="font-[400] md:text-[14px] sm:text-[8px] xs:text-[8px] leading-[20px]">
                By: {author}
              </Text>
              <Text color="white" className="font-[400] md:text-[14px] sm:text-[8px] xs:text-[8px] leading-[20px]">
                {formatDate(date)}
              </Text>
            </div>
          </div>
        </Card.Section>
      </div>
    </Card>
  );
}

const formatDate = (date: string) => {
  const currentDate = new Date(date);

  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = currentDate.getFullYear();

  return `${day}-${month}-${year}`;
};
