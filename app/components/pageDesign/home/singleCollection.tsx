import { Button, Card, Grid, Image, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';

export type Link = {
  text: string;
  path: string
}

export type SingleCollectionProps = {
  title: string;
  content: string;
  image: string;
  button: Link;
};

export function SingleCollection({ button, content, image, title }: SingleCollectionProps) {
  return (
    <Card p={0} m={0} radius="md">
      <Card.Section>
        <Image alt={image} src={image} mb={-20}  />
      </Card.Section>
      <Card.Section
      m={0}
        className="min-h-[170px]"
        style={{
          backgroundColor: 'black',
          //   borderImageSource: 'linear-gradient(180deg, #21C3C3 0%, rgba(255, 255, 255, 0.15) 100%)',
        }}
      >
        <Grid align="top" p={20} m={0}>
          <Grid.Col span={6}>
            <Title color="white" order={4} className="font-[700]">
              {title}
            </Title>
          </Grid.Col>
          <Grid.Col className="align-baseline" span={6}>
            <Text color="white" mt={5} size="sm" className="font-[300] opacity-70">
              {content}
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Image src="/images/pages/home/chips.png" width={85} height={42}  alt="pirate" />
          </Grid.Col>
          <Grid.Col span={6} className="relative ">
            <Button styles={{label: {fontSize: "11px"}, root: {background: "linear-gradient(180deg, #F9F9F9 0%, #D8D8D8 100%)", color: "black"}}} className="" component={NextLink} href={button.path}>
              {button.text}
            </Button>
          </Grid.Col>
        </Grid>
      </Card.Section>
    </Card>
  );
}
