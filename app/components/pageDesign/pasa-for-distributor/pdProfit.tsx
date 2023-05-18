import { Button, Container, Grid, Image, Text, Title, BackgroundImage } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useMediaQuery } from '@mantine/hooks';

export function PDProfit() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  return (
    <BackgroundImage
      style={{
        backgroundRepeat: 'no-repeat',
        // position: 'relative',
        backgroundPosition: 'center center',
        position: 'relative',
        backgroundSize: 'cover',
        // minHeight: '100vh',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
      src="/images/pages/pasa-for-distributor/bgProfit.png"
    >
      <Container fluid pl={matches ? 5 : 90} pr={matches ? 5 : 69} pt={matches ? 50 : 100} pb={matches ? 0 : 100}>
        <Grid m={0}>
          <Grid.Col style={{alignSelf: 'center'}} order={matches ? 2 : 1} md={6}>
            <Image className='my-auto mx-auto' mah={matches ? 387 : 598} maw={matches ? 387 : 598}
              src="/images/pages/pasa-for-distributor/Gold_Dollar_Coins_stack.png"
              alt="Gold_Dollar_Coins_stack"
            />
          </Grid.Col>
          <Grid.Col order={matches ? 1 : 2} md={6}>
            <div className="relative h-full text-center">
              <Title maw={620} color="white" className="text-center sm:text-left font-[700] md:!text-[48px] sm:!text-[24px] xs:!text-[24px] md:!leading-[51px] sm:!leading-[24px] xs:!leading-[24px] tracking-[0.0125em] uppercase">
                Profits with the Online
                 Revolution
              </Title>
              <Text maw={585} mb={50} mt={35} color="white" className="text-center sm:text-left font-[400] md:!text-[20px] sm:!text-[15px] xs:!text-[15px] md:!leading-[38px] sm:!leading-[20px] xs:!leading-[20px] tracking-[0.005em]">
                Are you looking to take your gaming distribution to the next level?{' '}
                {/* <br /> */}
                Look no further than Pasa Online! As a distributor, you can buy{' '}
                {/* <br /> */}
                virtual credits with us and benefit from our ever-growing{' '}
                {/* <br /> */}
                platform. The more sales volumes and wider channels you have,{' '}
                {/* <br /> */}
                your distributor level will be higher. And the bigger your profit{' '}
                {/* <br /> */}
                space becomes! With the support of our top-notch app{' '}
                {/* <br /> */}
                development team, you'll never have to worry about a thing.{' '}
                {/* <br /> */}
                Become a part of our distribution network, reaching prominent{' '}
                {/* <br /> */}
                distributors and stores nationwide. We take the responsibility of{' '}
                {/* <br /> */}
                our platform seriously and will take legal action against any{' '}
                {/* <br /> */}
                misuse of our software.{' '}
              </Text>

              <Button
                component={NextLink}
                href="/distributor-signup"
                styles={{
                  root: {
                    background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    padding: matches ? '12px 35px' : '17px 53px',
                    letterSpacing: '-0.015em',
                    // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                    '&:hover': {
                      background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    },
                    fontSize: matches ? '15px' :'20px',
                    lineHeight: '23px',
                    textTransform: 'uppercase',
                    height: matches ? '40px' : '57px',
                    width: matches ? '220px' : '278px',
                    marginLeft: matches ? 'auto' : '',
                    marginRight: matches ? 'auto' : '', 
                  },
                  label: {
                    marginBottom: '-2px',
                    fontSize: matches ? '15px' :'20px',
                    lineHeight: '23px',
                  },
                }}
                radius={50}
                className="block font-[500]"
              >
                Contact Us
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </BackgroundImage>
  );
}
