import { Center, Container, Grid, Text, Title, BackgroundImage } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Comment } from '@pasa/components';
import { Carousel } from '@pasa/customComponents';

const comments = [
  {
    thumbnail: '/images/carousel/person1.png',
    name: 'Nick C',
    rating: 5,
    description: 'Pasa Slots Community Member',
    message:
      "Can't keep my phone down! The variety of features keeps me entertained and the graphics are excellent. You get a varied amount through the daily lucky wheel and level up credits on each level. It runs very smoothly with very few glitches. If you enjoy slots you will likely enjoy this game!",
  },
  {
    thumbnail: '/images/carousel/person2.png',
    name: 'Heather W',
    rating: 5,
    description: 'Pasa Slots Community Member',
    message:
      'Super fun games, I very much like the different challenges aspect which is a refreshing change from the usual games. There are alternate ways to earn credits or perks. It runs very smoothly on my Android 11 with the in-browser option instead of downloading apps. I like it!',
  },
  {
    thumbnail: '/images/carousel/person1.png',
    name: 'Allison P',
    rating: 5,
    description: 'Pasa Slots Community Member',
    message:
      'With day to day waiting and opportunity to kill time, I always depend on this platform with amazing support and very few glitches',
  },
  {
    thumbnail: '/images/carousel/person2.png',
    name: 'Christian C',
    rating: 5,
    description: 'Pasa Slots Community Member',
    message:
      'Having the ability to play on-browser with new games every month, I think that’s a huge advantage when it comes to platforms giving variety for the players',
  },
  {
    thumbnail: '/images/carousel/person2.png',
    name: 'Matt P',
    rating: 5,
    description: 'Pasa Slots Community Member',
    message:
      "Never A Dull Moment. The biggest feature, the constant stream of new slot games. 98% of the time I never play the same slot over and over again. The release of the Life of Luxury was hands down the best. Didn't have tons of issues, especially with payments, getting bonuses, the play during bonus, and the Keno edition are totally unusual and imaginative. Great freakin' app!",
  },
  {
    thumbnail: '/images/carousel/person2.png',
    name: 'Steve C',
    rating: 5,
    description: 'Pasa Slots Community Member',
    message:
      "If you like slots as much as I do, but always end up finding what you thought to be a great slot game, then it turns out to be nothing but scams after scams on accounts, one spin, then back to zeros. Well look no further cause you found the complete opposite of that, a platform, not a zero’s game, lol if that's a thing but the variety of games are really fun, and you actually get to play slots this is the platform to play on!!",
  },
  ,
  {
    thumbnail: '/images/carousel/person2.png',
    name: 'Mary M',
    rating: 5,
    description: 'Pasa Slots Community Member',
    message:
      "PASA's looking out for serious gamers, they took the platform very seriously when creating it. It’s been nothing but fun playing the games you can’t get on all the platforms at once, well I never thought that would happen but they made it happen",
  },
];

export const TestimonialCarousel = () => {
  const matches = useMediaQuery('(max-width: 700px)');
  const matches2 = useMediaQuery('(max-width: 1024px)', true);
  return (
    // <Flex className='py-16 sm:py-24' mb={80} bg="black" gap="md" align="center" direction="row" wrap="nowrap">
    <div
      className="bg-gradient-to-r from-blue-500 to-purple-600 pb-20"
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
      <Container fluid ml={matches2 ? 0 : 90} mr={matches2 ? 0 : 69} mt={matches2 ? 70 : 50}>
        <BackgroundImage
          className={matches2 ? 'mb-10' : ''}
          style={{ backgroundSize: 'cover', rotate: '-10deg' }}
          src="/images/pages/home/multicolorfall.png"
        >
          <div style={{ rotate: '10deg' }}>
            <Title
              color={'white'}
              className="font-[700] uppercase text-center xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[56px] sm:!leading-[30px] xs:!leading-[30px]"
              style={{
                margin: 'auto',
                width: '80%',
              }}
            >
              What our community says about us
            </Title>

            <Grid m={0} mt={matches2 ? 20 : 50}>
              {/* <Grid.Col md={3} className="relative">
                <Center>
                  <Text color="white" size={'md'} className="absolute top-1/2 -translate-y-1/2">
                    Clients Testimonials
                  </Text>
                </Center>
              </Grid.Col> */}
              <Grid.Col md={12} p={0} className="text-center">
                <Carousel
                  align="start"
                  // maw={"90vw"}
                  mr={matches ? '0px' : '-20px'}
                  mt={'50px'}
                  mx="auto"
                  p={matches2 ? '0' : 10}
                  styles={{
                    root: {
                      background: 'transparent',
                      color: '#FFFFFF',
                      '&:hover': {
                        background: 'transparent',
                        color: '#FFFFFF',
                      },
                    },
                    controls: {
                      position: 'relative',
                      WebkitJustifyContent: 'start !important',
                      bottom: '50px',
                      left: '-100px',
                    },
                    control: {
                      margin: '0 0 0 10px !important',
                      color: '#808080',
                      backgroundColor: 'transparent',
                      borderRadius: 'unset',
                      borderColor: 'transparent',
                      minWidth: '15px',
                      ['&:hover']: {
                        color: '#3E66DF',
                      },
                    },
                  }}
                  slideSize={matches ? '100%' : '33.333333%'}
                  withControls={false}
                  withIndicators={false}
                  slidesToScroll={matches ? 1 : 2}
                  loop
                  slides={comments.map((item, key) => (
                    <Comment
                      key={key + item!.thumbnail}
                      thumbnail={item!.thumbnail}
                      name={item!.name}
                      rating={item!.rating}
                      description={item!.description}
                      message={item!.message}
                    />
                  ))}
                />
              </Grid.Col>
            </Grid>
          </div>
        </BackgroundImage>
      </Container>
    </div>
  );
};
