import { Card, Image, Text, Title } from '@mantine/core';

export type SingleBlogProps = {
  image: string;
  date: string;
  title: string;
  author: string;
};

export function SingleBlog({ image, date, title, author }: SingleBlogProps) {
  return (
    <Card shadow="sm" padding="md" radius={10}>
      <Card.Section>
        <Image alt={image} src={image} height={260} />
      </Card.Section>
      <Card.Section
        style={{
          border: '1px solid black',
          borderRadius: '0 0 10px 10px',
          borderTop: 'none',
          backgroundColor: '#F2F2F2',
        }}
      >
        <div className="space-y-2 p-4">
          <Text size={12} pt={15} className="font-[300] opacity-70">
            {date}
          </Text>

          <Title order={4} className="font-[700]">
            {title}
          </Title>

          <Text size={12} pt={15} className="font-[300] opacity-70">
            By: {author}
          </Text>
        </div>
      </Card.Section>
    </Card>
  );
}
