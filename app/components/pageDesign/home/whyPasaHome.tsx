import { Carousel } from '@mantine/carousel';
import { Container, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { SingleTestimonial, SingleTestimonialProps } from './singleTestimonial';
export function WhyPasaHome() {
  const testimonialData: SingleTestimonialProps[] = [
    {
      name: 'Chris Van',
      description:
        '"Variety is the only thing that keeps slots fun or interesting for very long and Pasa has taken care of that."',
      image: '/images/pages/home/Ellipse2.png',
      rating: 5,
      date: '18 Nov, 2022',
    },
    {
      name: 'Samantha Richards',
      description: '"Entertainment at its highest peak and a modern touch of gaming with its user-friendly platform."',
      image: '/images/pages/home/Ellipse3.png',
      rating: 5,
      date: '20 Aug, 2022',
    },
    {
      name: 'John Lopez',
      description:
        '"The best part is how you can play through the browser without worrying about downloading a single app."',
      image: '/images/pages/home/Ellipse4.png',
      rating: 5,
      date: '08 Dec, 2022',
    },
    {
      name: 'Jessica Shaw',
      description: '"The support is organized and customer satisfaction is taken very seriously."',
      image: '/images/pages/home/testimonialImage1.png',
      rating: 5,
      date: '17 Jan, 2023',
    },
  ];

  const matches = useMediaQuery('(max-width: 770px)', true);
  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-purple-600"
      style={{
        backgroundColor: '#150B2E',
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container fluid pl={matches ? 5 : 90} pr={matches ? 5 : 69} py={matches ? 50 : 100}>
        <Title
          color={'white'}
          // order={3}
          className="font-[700] xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[56px] sm:!leading-[30px] xs:!leading-[30px]"
          style={{
            letterSpacing: '-1.5%',
          }}
        >
          WHY PASA SLOTS?
        </Title>

        <Carousel
          styles={{
            controls: {
              position: 'relative',
              WebkitJustifyContent: 'end !important',
              bottom: matches ? '500px' : '600px',
            },
            control: {
              margin: '0 0 0 10px !important',
              padding: '10px',
              background: 'transparent',
              color: '#fff',
              '&:hover': {
                color: '#50A1FF',
              },
              borderColor: 'transparent',
            },
          }}
          slideSize={matches ? '50%' : '25%'}
          pt={20}
          align="start"
          slidesToScroll={'auto'}
          slideGap={matches ? 'md' : 'xl'}
          previousControlIcon={<ChevronLeft size={28} />}
          nextControlIcon={<ChevronRight size={28} />}
        >
          {testimonialData.map((td, key) => (
            <Carousel.Slide key={key + td.image}>
              <SingleTestimonial
                image={td.image}
                description={td.description}
                name={td.name}
                rating={td.rating}
                date={td.date}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
