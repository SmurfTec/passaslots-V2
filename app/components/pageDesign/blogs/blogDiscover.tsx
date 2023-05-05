import { Container, Grid, Text, Title, Button,Image, BackgroundImage } from '@mantine/core';

export function BlogDiscover() {
  return (
    <div>
      <BackgroundImage 
      style={{
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }} className='' src="/images/pages/blogs/mobilegamebg.png" bgsz='auto'>
        <Container fluid pl={90} pr={69} py={100}>
          <Grid align="center" justify='center'>
            <Grid justify='center' align='center'>
                <Image height='auto' width='auto' className='mx-auto mb-[20px]'  src="/images/pages/blogs/mobileGame.png" alt="mobile game" />
            </Grid>
            <Grid.Col sm={12}>
              <Title mb={20} className="text-center font-[700] text-[48px] leading-[51px] tracking-[0.0125em] uppercase text-[#FFFFFF]">
                DISCOVER MORE WITH PASA
              </Title>
            </Grid.Col>
            <Grid.Col sm={12}>
              <Text mt={25} color="#FFFFFF" className="text-center font-[400] tracking-[0.005em] leading-[38px] text-[20px]">
                Experience ultimate online gaming at Pasa. Our renowned software developers bring you<br/> 
                incredible graphics, dynamic audio, and payout-packed symbols for a unique and thrilling<br /> 
                experience. We've got you covered on any device and in-browser with a wide range of<br/> 
                games, including multiplayer fishing, classic slots, Roulette, keno, and more. Join the fun<br/> 
                and hit the jackpot at Pasa!
              </Text>
              <div className='text-center mt-10'>
                <Button 
                styles={{
                  root: {
                    border: 'none',
                    background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    padding: '15px 53px',
                    letterSpacing: '-0.015em',
                    // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                    '&:hover': {
                      background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    },
                    fontSize: '20px',
                    lineHeight: '23px',
                    textTransform: 'uppercase',
                    height: '57px',
                    width: '215px',
                  },
                  label: {
                    marginBottom: '-2px',
                    fontSize: '20px',
                    lineHeight: '23px'
                  },
                }}
                radius={50}
                mt={25} 
                className="font-[500]"
                >
                  READ MORE
                </Button>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </BackgroundImage>
    </div>
  );
}
