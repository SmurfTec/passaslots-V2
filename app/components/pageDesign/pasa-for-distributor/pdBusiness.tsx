import { BackgroundImage, Button, Container, Grid, Text, Title, Image } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useMediaQuery } from '@mantine/hooks';

export function PDBusiness() {
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
        // marginTop: '25px',
      }}
      src="/images/header/backgroundImage.png"
    >
      <Container fluid pl={matches ? 5 : 90} pr={matches ? 5 : 69} py={matches ? 50 : 100}>
        <Grid m={0}>
          <Grid.Col style={{alignSelf: 'center'}} md={6}>
            <Image
              mah={638} maw={768}
              className='mx-auto my-auto'
              src="/images/pages/pasa-for-distributor/machine-leprechaun.png"
              alt="machine-leprechaun"
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <div className="relative h-full text-center sm:text-left">
              <Text mb={18} color="white" className="text-center sm:text-left uppercase font-[400] md:!text-[20px] xs:!text-[15px] sm:!text-[15px] leading-[21px]">
                Simplify Your Business
              </Text>
              <Title maw={600} color="white" className="text-center sm:text-left font-[700] xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[55px] sm:!leading-[30px] xs:!leading-[30px] uppercase" opacity={0.9}>
                Effortless Business{' '}
                Management with{' '}
                {/* <br /> */}
                Pasa's Innovative User{' '}
                and Gaming Insights{' '}
                System
              </Title>
              <Text maw={560} mb={matches ? 20 : 50} mt={matches ? 15 : 35} color="white" className="text-center sm:text-left font-[400] md:!text-[20px] xs:!text-[15px] sm:!text-[15px] md:!leading-[38px] sm:!leading-[25px] xs:!leading-[25px]">
                Pasa has everything you need to run your business smoothly. It{' '}
                {/* <br /> */}
                has an insights system that takes care of things like keeping{' '}
                {/* <br /> */}
                track of customers, giving you reports, and managing jackpots{' '}
                {/* <br /> */}
                and bonuses. Plus, it's safe and works on all types of devices{' '}
                {/* <br /> */}
                like computers, phones, tablets, and even special terminals you{' '}
                {/* <br /> */}
                can use on the go. So no matter where you are, you'll always{' '}
                {/* <br /> */}
                have everything you need!{' '}
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
                  },
                  label: {
                    marginBottom: '-2px',
                    fontSize: matches ? '15px' :'20px',
                    lineHeight: '23px',
                  },
                }}
                radius={50}
                className="font-[500]"
              >
                Connect With Us
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </BackgroundImage>
    // <BackgroundImage mt={100} className="" src="/images/pages/pasa-for-distributor/businessBackground.png">
    //   <Container size={1300} className='py-24 md:py-48'>
    //     <Grid m={0}>
    //       <Grid.Col xs={6}>
    //         <Title color="white" order={2}>
    //           Effortless Business <br /> Management with{' '}
    //           <span className="text-[#CAC6CB]">
    //             Pasa's <br /> Innovative User and Gaming <br /> Insights System
    //           </span>
    //         </Title>
    //         <Text color="white" mt={50} className="font-[300] uppercase" size="sm">
    //           Pasa has everything you need to run your business smoothly. It has an insights system that takes care of
    //           things like keeping track of customers, giving you reports, and managing jackpots and bonuses. Plus, it's
    //           safe and works on all types of devices like computers, phones, tablets, and even special terminals you can
    //           use on the go. So no matter where you are, you'll always have everything you need!
    //         </Text>
    //       </Grid.Col>
    //       <Grid.Col xs={6} className='text-right'>
    //         <Button
    //           px={50}
    //           styles={{ root: { fontSize: '16px', color: "white", borderColor: "white", '&:hover': { background: 'transparent' } } }}
    //           size="lg"
    //           variant="outline"
    //           component='a' href="http://Pasasweeps.net"
    //         >
    //           Play Now
    //         </Button>
    //       </Grid.Col>
    //     </Grid>
    //   </Container>
    // </BackgroundImage>
  );
}
