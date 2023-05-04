import { Container, Group, Title, Stack,Image, createStyles, BackgroundImage, Grid, Button, Popover } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Dots } from 'tabler-icons-react';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
    backdropFilter: 'blur(20px)',
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '130vh', 
    // height: '1127px',
    position: 'relative',
    marginTop: '-115px',
    // width: '100%',
    // height: '100vh',
  },
}));

export function ContactHero() {
  const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 810px)', true);
  const [sideButtons, setSideButtons] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const closesideMenu = () => {
    if(sideButtons) {
      setSideButtons(false);
    }
  };
    return (
      <div onClick={closesideMenu} className={classes.backdrop}>
        <BackgroundImage
        style={{
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          minHeight: '130vh',
        }} className='absolute opacity-21' src="/images/pages/contact/mainbanner.png" >
        {!matches ? (
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
                      <Button bg={'#0076FF'} className="hover:bg-[#0076FF]" radius={36} mt={120} ml={-136} component={NextLink} href="/how-it-works" size="sm">
                        How it works?
                      </Button>
                    </Group>
                </Popover.Dropdown>
              </Popover>
            {/* </Grid.Col> */}
          </Group>
          ) : undefined}
        <Container fluid ml={90} mr={69} className="mb-[-150px] sm:mb-[auto] relative">
          <Grid>
            <Grid.Col md={6}>
          <Stack h={matches ? "40vh" : "80vh"} justify='center'>
            <Group align='center'>
              <Title className="font-[900] text-[#FFB800]" order={3} style={{textShadow: '0px 4px 33px #016BE6', lineHeight: '38px'}}>
                Contact Us
              </Title>
            </Group>
            <Title order={1} mt={30} className="font-[700] uppercase text-[#FFF]" 
            style={{
              textShadow: '0px 4px 33px #016BE6',
              letterSpacing: '-0.015em',
              lineHeight: '112px',
            }}>
              More than just<br/> a platform
            </Title>
          </Stack>
          </Grid.Col>
          <Grid.Col md={6}>
            <Image mb={67} mt={422} w={786} h={638} className='' src="/images/pages/contact/bull.png" alt='image' />
          </Grid.Col>
          </Grid>
      </Container>
      </BackgroundImage>
      </div>
  );
}
