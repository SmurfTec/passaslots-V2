import { Container, Grid, Group, Image, Rating, Text, Title } from '@mantine/core';

export type SingleTestimonialProps = {
  name: string;
  rating: number;
  description: string;
  image: string;
  date: string;
};

export function SingleTestimonial({ description, image, name, rating, date }: SingleTestimonialProps) {
  return (
    <div>
        <Grid style={{ border: '2px solid #016BE6', margin: "20px", padding: "10px", borderRadius: '50px', height: '449px' }}>
          <Grid.Col order={2} orderSm={1} sm={9} className='space-y-8'>
            <Group>
              <Image width={80} height={80} src={image} alt="testimonial" />
              <Grid.Col order={1} orderSm={2} sm={3}>
                <Title color={'white'} className='font-bold' order={4}>{name}</Title>
                <Rating defaultValue={rating} readOnly />
              </Grid.Col>
            </Group>
            <Group pt={46}>
              <Text mb={98} color={'white'} pl={10} size="sm" className='space-y-40'>
                {description}
              </Text>
              <Text color={'white'} pl={10} size="sm" className=''>
                {date}
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
    </div>
  );
}
