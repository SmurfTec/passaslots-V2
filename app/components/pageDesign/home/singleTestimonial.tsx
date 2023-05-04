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
      <Grid
        style={{
          border: '2px solid #016BE6',
          marginTop: '75px',
          padding: '10px 20px 10px 20px',
          borderRadius: '50px',
          width: '400px',
          height: '449px',
        }}
      >
        <Grid.Col order={2} orderSm={1} sm={12} className="flex flex-col space-y-8">
          <Group h={100}>
            <Image width={80} height={80} src={image} alt="testimonial" />
            <Grid.Col order={1} orderSm={2} sm={6}>
              <Title
                color={'white'}
                className="font-[700] text-normal"
                order={4}
                style={{ fontSize: '32px', lineHeight: '37.5px' }}
              >
                {name}
              </Title>
              <Rating defaultValue={rating} readOnly style={{ marginTop: '10px' }} />
            </Grid.Col>
          </Group>
          <Group className="mt-20">
            <Text
              mb={25}
              h={150}
              color={'white'}
              pl={10}
              className="space-y-40 font-[400] text-xl leading-8"
              style={{ fontSize: '20px', lineHeight: '37.74px' }}
            >
              {description}
            </Text>
            <Text
              mt={50}
              color={'white'}
              pl={10}
              className="align-text-bottom textfont-[400] text-lg leading-8 align-end"
              style={{ fontSize: '16px', lineHeight: '30.19px' }}
            >
              {date}
            </Text>
          </Group>
        </Grid.Col>
      </Grid>
    </div>
  );
}
