import { Card, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export type SingleBlogProps = {
  image: string;
  date: string;
  title: string;
  author: string;
  publishedOn?: string;
};

export function SingleBlog({ image, date, title, author }: SingleBlogProps) {
  const matches = useMediaQuery('(max-width: 500px)', true);
  return (
    <Card
      h={matches ? 225 : 450}
      w={matches ? 195 : 390}
      style={{
        border: '4px solid #016BE6',
        background: `linear-gradient(180deg, rgba(1, 107, 230, 0.2046) 53.23%, rgba(1, 107, 230, 0.93) 100%), url("${image}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',

        backgroundPosition: 'center',
        // margin: 'auto',
        // justifyContent: 'space-between'
      }}
      radius={30}
      mt={50}
    >
      <Card.Section
        style={{
          borderTop: '1px solid white',
          // borderRadius: '0 0 10px 10px',
          marginTop: '360px',
        }}
      >
        <div className="px-4">
          <Title color="white" className="font-[700] leading-[40px] text-[24px]">
            {title}
          </Title>
          <div className="flex justify-between">
            <Text color="white" className="font-[400] text-[14px] leading-[20px] opacity-70">
              By: {author}
            </Text>
            <Text color="white" className="font-[400] text-[14px] leading-[20px] opacity-70">
              {date}
            </Text>
          </div>
        </div>
      </Card.Section>
    </Card>
  );
}
