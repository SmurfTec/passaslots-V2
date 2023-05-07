import { Image, Button, Container, Group, Text, Title, Grid, BackgroundImage } from '@mantine/core';
export function Goal() {
  return (
    <div
      style={{
        backgroundColor: '#150B2E',
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <BackgroundImage
        src="/images/pages/about/goalZeus.png"
        style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundPositionY: '735px' }}
        bgsz="auto"
      >
        <Container fluid mr={69} ml={90} py={100}>
          <div className="pb-20 space-y-4">
            <Group position="center">
              <Button
                styles={{
                  label: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10',
                  },
                }}
                style={{
                  border: '4px solid #016BE6',
                  width: '226px',
                  height: '260px',
                  flexDirection: 'column',
                  background: 'transparent',
                  alignItems: 'center',
                }}
                className="text-center rounded-[29px] text-[16px] font-[700] text-[#EEEEEE] tracking-[0.0125em] leading-[23px]"
              >
                <img src="images/pages/about/🏆.svg" />
                Revolutionary Gaming
                <br /> Platform of 2023
              </Button>
              <Button
                styles={{
                  label: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                  },
                }}
                style={{
                  border: '4px solid #016BE6',
                  width: '226px',
                  height: '260px',
                  flexDirection: 'column',
                  background: 'transparent',
                  alignItems: 'center',
                }}
                className="text-center rounded-[29px] text-[16px] font-[700] text-[#EEEEEE] tracking-[0.0125em] leading-[23px]"
              >
                <img src="images/pages/about/🎮.svg" />
                Curated by
                <br /> life-long gamers
              </Button>
              <Button
                styles={{
                  label: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                  },
                }}
                style={{
                  border: '4px solid #016BE6',
                  width: '226px',
                  height: '260px',
                  flexDirection: 'column',
                  background: 'transparent',
                  alignItems: 'center',
                }}
                className="text-center rounded-[29px] text-[16px] font-[700] text-[#EEEEEE] tracking-[0.0125em] leading-[23px]"
              >
                <img src="images/pages/about/🌟.svg" />
                Memorable
                <br /> experience
              </Button>
              <Button
                styles={{
                  label: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                  },
                }}
                style={{
                  border: '4px solid #016BE6',
                  width: '226px',
                  height: '260px',
                  flexDirection: 'column',
                  background: 'transparent',
                  alignItems: 'center',
                }}
                className="text-center rounded-[29px] text-[16px] font-[700] text-[#EEEEEE] tracking-[0.0125em] leading-[23px]"
              >
                <img src="images/pages/about/👨‍💻.svg" />
                Timeless
                <br /> support 24/7
              </Button>
              <Button
                styles={{
                  label: {
                    flexDirection: 'column',
                    justifyContent: 'center',
                  },
                }}
                style={{
                  border: '4px solid #016BE6',
                  width: '226px',
                  height: '260px',
                  flexDirection: 'column',
                  background: 'transparent',
                  alignItems: 'center',
                }}
                className="text-center rounded-[29px] text-[16px] font-[700] text-[#EEEEEE] tracking-[0.0125em] leading-[23px]"
              >
                <img src="images/pages/about/🍋.svg" />
                Easy peasy one-click
                <br /> download & registration 
              </Button>
            </Group>
          </div>
          <div className="text-center">
            <Title color="white" className="font-[700] text-[64px] leading-[68px] tracking-[0.0125em] uppercase">
              Our goal is to aim <br /> without a limit
            </Title>
            <Text
              mt={20}
              color="white"
              className="font-[400] text-[20px] tracking-[0.005em] leading-[38px]"
              opacity={0.8}
            >
              Our commitment to being No.1 drives us to constantly improve. We are <br /> always broadening our
              community, enhancing our content, and finding <br /> new ways to provide value to our players.
            </Text>
            {/* <Image className='mx-auto' width={478} height={565} src="/images/pages/about/goalZeus.png" /> */}
            <Title
              color="white"
              mt={562}
              className="font-[700] leading-[34px] tracking-[0.0125em] text-[32px] uppercase"
            >
              Our goal is to be
            </Title>
            <div className="space-y-0 mt-0">
              <Title
                color="#50A1FF"
                mt={0}
                className="font-[900] leading-[68px] tracking-[0.0125em] text-[64px] uppercase"
              >
                World's No 1
              </Title>
              <Text
                style={{
                  padding: '11px 28px',
                  width: '300px',
                  height: '43px',
                  borderRadius: '53px',
                  marginTop: '24px',
                }}
                color="#1A0E37"
                className="mx-auto font-[900] bg-[#FFB800] leading-[21px] justify-center tracking-[0.0125em] text-[20px] uppercase"
              >
                by the end of 2023
              </Text>
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </div>
  );
}
