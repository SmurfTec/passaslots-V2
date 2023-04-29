import { Carousel } from '@mantine/carousel';
import { Container, Group, Image, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { SingleTestimonial, SingleTestimonialProps } from './singleTestimonial';
export function WhyPasaHome() {
  const testimonialData: SingleTestimonialProps[] = [
    {
      name: 'Chris Van',
      description:
        'Variety is the only thing that keeps slots fun or interesting for very long and Pasa has taken care of that.',
      image: '/images/pages/home/testimonialImage1.png',
      rating: 5,
    },
    {
      name: 'Samantha Richards',
      description:
        'Entertainment at its highest peak and a modern touch of gaming with its user-friendly platform.',
      image: '/images/pages/home/testimonialImage1.png',
      rating: 5,
    },
    {
      name: 'John Lopez',
      description:
        'The best part is how you can play through the browser without worrying about downloading a single app.',
      image: '/images/pages/home/testimonialImage1.png',
      rating: 5,
    },
    {
      name: 'Jessica Shaw',
      description:
        'The support is organized and customer satisfaction is taken very seriously.',
      image: '/images/pages/home/testimonialImage1.png',
      rating: 5,
    },
  ];

  const matches = useMediaQuery('(max-width: 460px)', true);
  return (
    <>
      <Container size={900}>
        <Group position="apart">
          <Image
            src="/images/pages/home/orion.png"
            height={matches ? 90 : 130}
            width={matches ? 90 : 130}
            alt="orion star"
          />
          <Image
            src="/images/pages/home/candy.png"
            height={matches ? 90 : 130}
            width={matches ? 90 : 130}
            alt="candy land"
          />
          <Image
            src="/images/pages/home/milky.png"
            height={matches ? 90 : 130}
            width={matches ? 90 : 130}
            alt="milky"
          />
        </Group>
      </Container>

      <Container size={1300} py={100}>
        <Title order={3} className="font-[700]">
          WHY <span className="text-[#697286]">PASA SLOTS</span>
        </Title>

        <Carousel
          styles={{
            controls: {
              position: 'relative',
              WebkitJustifyContent: 'end !important',
              bottom: '-30px',
              right: '0 !important',
            },
            control: {
              margin: '0 0 0 15px !important',
              padding: '15px',
            },
          }}
          slideSize={"100%"}
          pt={100}
          
        >
          {testimonialData.map((td, key) => (
            <Carousel.Slide key={key + td.image}>
              <SingleTestimonial image={td.image} description={td.description} name={td.name} rating={td.rating} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
