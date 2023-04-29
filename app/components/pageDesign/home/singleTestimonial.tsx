import { Container, Grid, Image, Rating, Text, Title } from '@mantine/core';

export type SingleTestimonialProps = {
  name: string;
  rating: number;
  description: string;
  image: string;
};

export function SingleTestimonial({ description, image, name, rating }: SingleTestimonialProps) {
  return (
    <div>
        <Grid>
          <Grid.Col order={2} orderSm={1} sm={9} className='space-y-8'>
            <Title className='font-bold' order={3}>{name}</Title>
            <Text style={{ borderLeft: '3px solid black', padding: "20px" }} pl={10} size="sm">
              {description}
            </Text>
          </Grid.Col>
          <Grid.Col order={1} orderSm={2} sm={3}>
            <Image width={80} height={80} src={image} alt="testimonial" />
            <Rating defaultValue={rating} readOnly />
          </Grid.Col>
        </Grid>
    </div>
  );
}
