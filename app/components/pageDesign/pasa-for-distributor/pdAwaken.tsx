import { BackgroundImage, Button, Container, Grid, Image, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useMediaQuery } from '@mantine/hooks';

export function PDAwaken() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  return (
    <Container
      fluid
      px={0}
      style={{ zIndex: 50, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      <BackgroundImage
        style={{
          backgroundRepeat: 'no-repeat',
          // position: 'relative',
          backgroundPosition: 'center center',
          position: 'relative',
          backgroundSize: 'cover',
        }}
        pt={matches ? 0 : 50}
        src="/images/header/backgroundImage.png"
      >
        <Grid align="center" pl={matches ? 5 : 90} pr={matches ? 5 : 69}>
          <Grid.Col order={!matches ? 1 : 2} md={6}>
            <Title
              className="text-center sm:text-left uppercase md:!text-[64px] sm:!text-[40px] xs:!text-[32px] font-[700] md:!leading-[69px] sm:!leading-[35px] xs:!leading-[35px] tracking-[0.0125em]"
              color="white"
            >
              Awaken the
              <br />
              <span style={{ color: '#50A1FF' }}>balance </span>
            </Title>
            <Text
              my={37}
              className="text-center sm:text-left md:!text-[20px] sm:!text-[15px] xs:!text-[15px] font-[400] md:!leading-[38px] sm:!leading-[24px] xs:!leading-[24px] tracking-[0.0125em]"
              color="white"
            >
              Starting a home-based business also offers you the freedom to {/* <br /> */}
              create a work-life balance that <span className="font-[700]">works for you and your family</span>.{' '}
              {/* <br /> */}
              Whether you're a stay-at-home parent or just looking for a change, a {/* <br /> */}
              home-based business allows you to turn your passions into a high-
              {/* <br /> */}
              income career.
            </Text>
          </Grid.Col>
          <Grid.Col style={{ alignSelf: 'center' }} order={matches ? 1 : 2} md={6}>
            <Image
              maw={735}
              mah={553}
              className="mx-auto my-auto"
              src="/images/pages/pasa-for-distributor/awakenBalance.png"
              alt="awakenBalance"
            />
          </Grid.Col>
        </Grid>
      </BackgroundImage>
      <div
        style={{
          backgroundImage:
            'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
          backdropFilter: 'blur(20px)',
          backgroundSize: 'cover',
          // minHeight: '100vh',
          // padding: '200px 0px',
          zIndex: 50,
          boxShadow: '-1px 0px 20px 3px #016BE6',
          borderTop: '6px solid #016BE6',
        }}
      >
        <BackgroundImage
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
          }}
          src="/images/pages/pasa-for-distributor/bgPowerOfTech.png"
        >
          <Grid
            pt={matches ? 50 : 100}
            pb={matches ? 50 : 100}
            pl={matches ? 5 : 90}
            pr={matches ? 5 : 69}
            m={0}
            align="center"
            justify="center"
            gutterSm={50}
          >
            <Grid.Col xs={12} sm={12}>
              <div className="text-center">
                <Title
                  className="uppercase xs:!text-[24px] sm:!text-[24px] md:!text-[48px] text-center font-[700] xs:!leading-[30px] sm:!leading-[30px] md:!leading-[51px] tracking-[0.0125em]"
                  color="white"
                >
                  Power of <span className="text-[#50A1FF]">Technology</span>
                </Title>
                <Text
                  mt={matches ? 10 : 37}
                  className="mx-auto md:!text-[20px] xs:!text-[15px] sm:!text-[15px] font-[400] text-center md:!leading-[38px] sm:!leading-[25px] xs:!leading-[25px] tracking-[0.0125em]"
                  color="white"
                  maw={934}
                >
                  With the rise of technology and the growing gig economy, there's never been a better time to start
                  your {/* <br /> */}
                  own home-based business. The opportunities are endless, and the{' '}
                  <span className="font-[700]">success is yours for the taking</span>. Say {/* <br /> */}
                  goodbye to the daily commute and say hello to the comfort and flexibility of working from your own{' '}
                  {/* <br /> */}
                  home. You'll be in control of your schedule. So why wait? Unleash your entrepreneurial spirit and{' '}
                  <span className="font-[700]">
                    start {/* <br />  */}
                    your home-based business
                  </span>{' '}
                  today!
                </Text>
                <Button
                  styles={{
                    root: {
                      // border: '1px solid #F6CAA7',
                      background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                      padding: matches ? '12px 35px' : '17px 53px',
                      letterSpacing: '-0.015em',
                      // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                      '&:hover': {
                        background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                      },
                      fontSize: matches ? '15px' : '20px',
                      lineHeight: '23px',
                      textTransform: 'uppercase',
                      height: matches ? '40px' : '57px',
                      width: matches ? '220px' : '278px',
                    },
                    label: {
                      marginBottom: '-2px',
                      fontSize: matches ? '15px' : '20px',
                      lineHeight: '23px',
                    },
                  }}
                  radius={50}
                  mt={matches ? 50 : 100}
                  component={NextLink}
                  href="/distributor-signup"
                  className="font-[500]"
                >
                  Contact Us
                </Button>
              </div>
            </Grid.Col>
          </Grid>
        </BackgroundImage>
      </div>
    </Container>
  );
}
