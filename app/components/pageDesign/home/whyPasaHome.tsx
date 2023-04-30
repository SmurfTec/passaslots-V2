import { Carousel } from '@mantine/carousel';
import { Container, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
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
      description:
        '"Entertainment at its highest peak and a modern touch of gaming with its user-friendly platform."',
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
      description:
        '"The support is organized and customer satisfaction is taken very seriously."',
      image: '/images/pages/home/testimonialImage1.png',
      rating: 5,
      date: '17 Jan, 2023',
    },
  ];

  const matches = useMediaQuery('(max-width: 460px)', true);
  return (
    <div 
    className="bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      backgroundImage:
        'linear-gradient(to right, #1A0E37, #016BE6, #A74C9A, #84329A)',
      backdropFilter: 'blur(20px)',
    }}>
      <Container size={1300} py={100}>
        <Title color={'white'} order={3} className="font-[700]">
          WHY PASA SLOTS?
        </Title>

        <Carousel
          styles={{
            controls: {
              position: 'relative',
              WebkitJustifyContent: 'end !important',
              bottom: '400px',
              right: '0 !important',
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
          slideSize={"33.33%"}
          pt={20}
          initialSlide={1}
        >
          {testimonialData.map((td, key) => (
            <Carousel.Slide key={key + td.image}>
              <SingleTestimonial image={td.image} description={td.description} name={td.name} rating={td.rating} date={td.date} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
