import { Grid, Image, Text, Title } from '@mantine/core';

export type SingleArticleProps = {
  image: string;
  date: string;
  title: string;
  author: string;
};

export function SingleArticle({ author, date, image, title }: SingleArticleProps) {
  return (
    <Grid grow gutterXs={40} align="top">
      <Grid.Col xs={5} sm={3}>
        <Image src={image} alt={image} />
      </Grid.Col>
      <Grid.Col xs={7} sm={9} className="space-y-4">
        <Text className="font-[300]" size="sm" color="#E3E3E3" pr={30}>
          {date}
        </Text>
        <Title color="white" className="font-[700]" order={4}>
          {title}
        </Title>
        <Text className="font-[300]" size="sm" color="#E3E3E3" pr={30}>
          By {author}
        </Text>
      </Grid.Col>
    </Grid>
  );
}
