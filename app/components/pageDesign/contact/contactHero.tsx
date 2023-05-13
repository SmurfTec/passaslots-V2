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
    backgroundSize: '100% 100%',
    // minHeight: '130vh', 
    // height: '1127px',
    // position: 'relative',
    marginTop: '-115px',
    // width: '100%',
    // height: '100vh',
  },
}));

export function ContactHero() {
  const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 810px)', true);
  const matches2 = useMediaQuery('(max-width: 770px)', true);
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
          // minHeight: '130vh',
        }} className='opacity-21' src="/images/pages/contact/mainbanner.png" >
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
                      <Button bg={'#0076FF'} className="absolute hover:bg-[#0076FF]" radius={27} mb={150} ml={-20} component={NextLink} href="/about" size="sm">
                        About Us
                      </Button>
                      <Button className="absolute text-top items-center hover:bg-[#0076FF]" bg={'#0076FF'} mt={-20} radius={35} ml={0} component={NextLink} href="/contact" size="sm">
                        Contact Us
                      </Button>
                      <Button bg={'#0076FF'} className="absolute hover:bg-[#0076FF]" radius={36} mt={120} ml={-20} component={NextLink} href="/how-it-works" size="sm">
                        How it works?
                      </Button>
                    </Group>
                </Popover.Dropdown>
              </Popover>
            {/* </Grid.Col> */}
          </Group>
          ) : undefined}
        <Container fluid ml={matches ? 5 : 90} mr={matches ? 5 : 69} pt={120} pb={matches ? 50 : 100}>
          <Grid align='center'>
            <Grid.Col xs={6}>
              <Group align='center'>
                <Title className="font-[900] text-[#FFB800] sm:!text-[32px] xs:!text-[16px]" style={{textShadow: '0px 4px 33px #016BE6', lineHeight: '38px'}}>
                  Contact Us
                </Title>
              </Group>
              <Title maw={790} mt={30} className="font-[700] lg:!leading-[112px] md:!leading-[56px] uppercase text-[#FFF] xl:!text-[96px] lg:!text-[48px] md:!text-[40px] sm:!text-[40px] xs:!text-[40px]" 
              style={{
                textShadow: '0px 4px 33px #016BE6',
                letterSpacing: '-0.015em',
              }}>
                More than just a platform
              </Title>
            </Grid.Col>
          <Grid.Col xs={6}>
            <Image mt={matches ? 0 : 50} maw={786} mah={638} className='mx-auto' src="/images/pages/contact/bull.png" alt='image' />
          </Grid.Col>
          </Grid>
        </Container>
      </BackgroundImage>
      </div>
  );
}
