import { Container, Group, Title, Stack, Image, createStyles, Popover, Button, BackgroundImage } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { useState } from 'react';
import { Dots } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundImage:
      'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
    backdropFilter: 'blur(20px)',
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    // minHeight: '125vh',
    // height: '1127px',
    position: 'relative',
    marginTop: '-115px',
    // width: '100%',
    // height: '100vh',
  },
}));

export function BlogHero() {
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
          // minHeight: '100vh',
        }}
        className="relative opacity-21"
        src="/images/header/backgroundImage.png"
      >
        <Container fluid pl={matches ? 5 : 90} pr={matches ? 5 : 69} py={matches ? 50 : 100}>
          {/* <div className="absolute top-1/2 -translate-y-1/2"> */}
          <Stack pt={100} justify="center">
            <div className="text-center">
              <Title
                className="uppercase font-[900] text-center text-[#FFB800]"
                order={matches ? 6 : 3}
                style={{ textShadow: '0px 4px 33px #016BE6', lineHeight: matches ? '19px' : '38px' }}
              >
                Blogs
              </Title>
              <Title
                order={matches ? 4 : 1}
                mt={matches ? 10 : 30}
                maw={matches ? 770 : 1130}
                className="font-[700] uppercase text-[#FFF] text-center mx-auto"
                style={{
                  textShadow: '0px 4px 33px #016BE6',
                  letterSpacing: '-0.015em',
                  lineHeight: matches ? '42px' : '112px',
                }}
              >
                READ MORE ABOUT THE
                 PASA SLOTS COMMUNITY
              </Title>
            </div>
            <Image
              maw={942}
              mah={573}
              className="mx-auto my-auto"
              src="/images/pages/blogs/bloghero.png"
              alt="image"
            />
          </Stack>
        </Container>
      </BackgroundImage>
      {!matches ? (
          <Group align={'center'} className="">
            {/* <Grid.Col> */}
            <Popover
              opened={sideButtons}
              onClose={close}
              position="right"
              styles={{
                dropdown: {
                  background: 'transparent',
                  border: '0px',
                },
              }}
            >
              <Popover.Target>
                <Button
                  className="absolute top-1/2 left-0"
                  onClick={() => setSideButtons(!sideButtons)}
                  h={70}
                  w={70}
                  bg={
                    sideButtons
                      ? 'linear-gradient(248.75deg, #3F2680 12.71%, #3F2680 108.63%)'
                      : 'linear-gradient(248.75deg, #50A1FF 12.71%, #3F2680 108.63%)'
                  }
                  styles={{
                    root: {
                      border: 'none',
                      borderRadius: '0px 5px 5px 0px',
                      '&:hover': {
                        background: sideButtons
                          ? 'linear-gradient(248.75deg, #3F2680 12.71%, #3F2680 108.63%)'
                          : 'linear-gradient(248.75deg, #50A1FF 12.71%, #3F2680 108.63%)',
                      },
                    },
                  }}
                >
                  <Dots size={34} />
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Group align="center">
                  <Button
                    bg={'#0076FF'}
                    className="hover:bg-[#0076FF]"
                    radius={27}
                    mb={150}
                    ml={-20}
                    component={NextLink}
                    href="/about"
                    size="sm"
                    style={{ fontWeight: '700', fontSize: '15px' }}
                  >
                    About Us
                  </Button>
                  <Button
                    className="text-top items-center hover:bg-[#0076FF]"
                    bg={'#0076FF'}
                    mt={-20}
                    radius={35}
                    ml={-90}
                    component={NextLink}
                    href="/contact"
                    size="sm"
                    style={{ fontWeight: '700', fontSize: '15px' }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    bg={'#0076FF'}
                    className="hover:bg-[#0076FF]"
                    radius={36}
                    mt={120}
                    ml={-140}
                    component={NextLink}
                    href="/how-it-works"
                    size="sm"
                    style={{ fontWeight: '700', fontSize: '15px' }}
                  >
                    How it works?
                  </Button>
                </Group>
              </Popover.Dropdown>
            </Popover>
            {/* </Grid.Col> */}
          </Group>
        ) : undefined}
    </div>
  );
}
