import { BackgroundImage, Button, Container, Grid, Text, Title, Image } from '@mantine/core';
import { NextLink } from '@mantine/next';

export function PDBusiness() {
  return (
    <BackgroundImage style={{
      backgroundRepeat: 'no-repeat',
      // position: 'relative',
      backgroundPosition: 'center center',
      position: 'relative',
      backgroundSize: 'cover',
      minHeight: '100vh',
    }}
    src='/images/header/backgroundImage.png'>
      <Container fluid ml={90} mr={69} py={100}>
        <Grid m={0}>
          <Grid.Col xs={6}>
            <Image src="/images/pages/pasa-for-distributor/machine-leprechaun.png" alt="machine-leprechaun" 
            height='auto' width='auto' />
          </Grid.Col>
          <Grid.Col xs={6}>
            <div className='relative h-full'>
              <Text mb={18}color='white' className="uppercase font-[400] text-[20px] leading-[21px]">
                Simplify Your Business
              </Text>
              <Title color='white' className="font-[700] text-[48px] leading-[55px] uppercase" opacity={0.9}>
                Effortless Business<br /> Management with<br/> 
                Pasa's Innovative User<br/> and Gaming Insights<br/> System
              </Title>
              <Text mb={50} mt={35} color='white' className="font-[400] text-[20px] leading-[38px]">
                Pasa has everything you need to run your business smoothly. It<br/> 
                has an insights system that takes care of things like keeping<br/> 
                track of customers, giving you reports, and managing jackpots<br/> 
                and bonuses. Plus, it's safe and works on all types of devices<br/> 
                like computers, phones, tablets, and even special terminals you<br/> 
                can use on the go. So no matter where you are, you'll always<br/> 
                have everything you need!
              </Text>

              <Button component={NextLink} href='/distributor-signup' 
              styles={{
                root: {
                  background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                  padding: '17px 53px',
                  letterSpacing: '-0.015em',
                  // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                  '&:hover': {
                    background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                  },
                  fontSize: '20px',
                  lineHeight: '23px',
                  textTransform: 'uppercase',
                  height: '57px',
                  width: '278px',
                },
                label: {
                  marginBottom: '-2px',
                  fontSize: '20px',
                  lineHeight: '23px'
                },
              }}
              radius={50}
              className='font-[500]'>
                Contect With Us
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
