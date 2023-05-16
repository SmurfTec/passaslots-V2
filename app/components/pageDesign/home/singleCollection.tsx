import { Button, Card, Grid, Image, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useMediaQuery } from '@mantine/hooks';

export type Link = {
  text: string;
  path: string;
};

export type SingleCollectionProps = {
  title: string;
  content: string;
  image: string;
  button: Link;
};

export function SingleCollection({ button, content, image, title }: SingleCollectionProps) {
  const matches = useMediaQuery('(max-width: 770px)', true);
  const matches2 = useMediaQuery('(max-width: 1200px)', true);
  return (
    <Card p={10} m={0} radius="sm" bg={'transparent'}>
      <Card.Section>
        <Grid align={'center'} justify={'center'}>
          <Image width={250} height={250} alt={image} src={image} mb={0} />
          <Grid.Col p={10} m={0}>
            <Title color="white" order={4} className="font-[500] text-center">
              {title}
            </Title>
            <Text maw={275} color="white" mt={5} size="sm" className="mx-auto font-[300] opacity-70 text-center">
              {content}
            </Text>
            <Grid className="my-5" justify={'center'}>
              <Image src="/images/pages/home/chips.png" width={84} height={42} alt="pirate" />
            </Grid>
            <Grid className="my-5" justify={'center'}>
              <Button
                size={matches ? 'md' : 'lg'}
                radius={50}
                py={matches ? 8 : 15}
                px={matches ? 20 : 30}
                styles={{
                  label: { fontSize: matches2 ? '15px' : '20px', fontWeight: 'normal' },
                  root: {
                    border: 'none',
                    background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                    color: 'white',
                    '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' },
                  },
                }}
                className="text-center uppercase"
                component={NextLink}
                href={button.path}
              >
                {button.text}
              </Button>
            </Grid>
          </Grid.Col>
        </Grid>
      </Card.Section>
    </Card>
  );
}
