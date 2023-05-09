import { Button, Container, Group, Image, Popover, Title } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { NextLink } from '@mantine/next'
import { Dots } from 'tabler-icons-react';

export function DistributorHero() {
  const matches = useMediaQuery('(max-width:520px)')
  const matches_left = useMediaQuery('(max-width: 810px)', true);
  const [sideButtons, setSideButtons] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const closesideMenu = () => {
    if(sideButtons) {
      setSideButtons(false);
    }
  };
  return (
    <div onClick={closesideMenu} style={{
      backgroundColor: '#150B2E',
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(20px)',
    }}>
      <div style={{
      // backgroundColor: '#150B2E',
      backgroundImage: "url('/images/header/backgroundImage.png')",
      backgroundRepeat: 'no-repeat',
      // position: 'relative',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      minHeight: '100vh', 
      position: 'relative',
      marginTop: '-115px',
      // width: '100%',
      // height: '100vh',
      }}>
        {!matches_left ? (
        <Group align={'center'} className=''>
          {/* <Grid.Col> */}
            <Popover
              opened={sideButtons}
              onClose={close}
              position="right"
              styles={{
                dropdown: {
                  background: 'transparent',
                  border: '0px',
                }
              }}
            >
              <Popover.Target>
                <Button className='absolute top-1/2' onClick={() => setSideButtons(!sideButtons)} h={70} w={70} 
                  bg={sideButtons ? 'linear-gradient(248.75deg, #3F2680 12.71%, #3F2680 108.63%)' : 'linear-gradient(248.75deg, #50A1FF 12.71%, #3F2680 108.63%)'}
                  styles={{
                    root: {
                      borderRadius: '0px 5px 5px 0px',
                      '&:hover': {
                        background: sideButtons ? 'linear-gradient(248.75deg, #3F2680 12.71%, #3F2680 108.63%)' : 'linear-gradient(248.75deg, #50A1FF 12.71%, #3F2680 108.63%)',
                      },
                    },
                  }}>
                    <Dots size={34} />
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                  <Group align='center'>
                    <Button bg={'#0076FF'} className="hover:bg-[#0076FF]" radius={27} mb={150} ml={-20} component={NextLink} href="/about" size="sm">
                      About Us
                    </Button>
                    <Button className="text-top items-center hover:bg-[#0076FF]" bg={'#0076FF'} mt={-20} radius={35} ml={-90} component={NextLink} href="/contact" size="sm">
                      Contact Us
                    </Button>
                    <Button bg={'#0076FF'} className="hover:bg-[#0076FF]" radius={36} mt={120} ml={-135} component={NextLink} href="/how-it-works" size="sm">
                      How it works?
                    </Button>
                  </Group>
              </Popover.Dropdown>
            </Popover>
          {/* </Grid.Col> */}
        </Group>
        ) : undefined}
        <Container fluid py={100} ml={90} mr={69} className="min-h-[65vh] sm:min-h-screen relative">
          <div className="text-center">
            <Image styles={{
              image:{
                margin: 'auto'
              }
            }} className='items-center pt-20' src="/images/pages/distribution/crown.png" alt="graph" height="auto" width="auto" />
            <div className="text-center">
              <Title mt={30} className="font-[900] uppercase leading-[112px] tracking-[-0.015em] text-[96px]" color='white' style={{textShadow: '0px 4px 33px #016BE6'}}>
                THE LEADING PARTNER<br/> GAMING PLATFORM
              </Title>
              <Title mt={20} className="font-[900] uppercase leading-[38px] tracking-[-0.015em] text-[32px] text-[#FFB800]">
                Pasa Slots
              </Title>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
