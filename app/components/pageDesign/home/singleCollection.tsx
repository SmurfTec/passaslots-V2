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
    <Card p={10} m={0} radius="sm" bg={'transparent'}>
      <Card.Section>
        <Grid align={'center'} justify={'center'}>
          <Image width={250} height={250} alt={image} src={image} mb={0}  />
          <Grid.Col p={10} m={0}>
            <Title color="white" order={4} className="font-[700] text-center">
              {title}
            </Title>
            <Text color="white" mt={5} size="sm" className="font-[300] opacity-70 text-center">
              {content}
            </Text>
            <Grid className='my-5' justify={'center'}>
              <Image src="/images/pages/home/chips.png" width={85} height={42}  alt="pirate" />
            </Grid>
            <Grid className='my-5' justify={'center'}>
              <Button radius={50} styles={{label: {fontSize: "16px"}, root: {background: "#016BE6", color: "white", '&:hover': { background: "#016BE6", },}}} className="text-center" component={NextLink} href={button.path}>
                {button.text}
              </Button>
            </Grid>
          </Grid.Col>
        </Grid>
      </Card.Section>
    </Card>
  );
}
