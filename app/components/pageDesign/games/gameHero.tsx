import { Anchor, Container, Grid, Image, Title, createStyles, Group, Popover, Button } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { useState } from 'react';
import { Dots } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundImage: 'url("/images/pages/game/heroBackground.png")',
    // backdropFilter: 'blur(16.5px)',
    backgroundPosition: 'center center',
    backgroundSize: '100% 85%',
    backgroundRepeat: 'no-repeat',
    [theme.fn.smallerThan(1440)]: {
      backgroundSize: '100% 90%',
    },
    [theme.fn.largerThan(767)]: {
      minHeight: '80vh',
    },
    [theme.fn.smallerThan(768)]: {
      minHeight: '60vh',
    },
    filter: 'blur(16.5px)',
    marginTop: '-115px',
  },
  backdrop2: {
    [theme.fn.largerThan(767)]: {
      minHeight: '100vh',
      marginTop: '-105vh',
    },
    [theme.fn.smallerThan(768)]: {
      minHeight: '60vh',
      marginTop: '-63vh',
    },
  },
}));

export function GameHero() {
  const matches = useMediaQuery('(max-width: 810px)');
  const { classes } = useStyles();
  const [sideButtons, setSideButtons] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const closesideMenu = () => {
    if (sideButtons) {
      setSideButtons(false);
    }
  };
  return (
    <>
      <div onClick={closesideMenu} className={classes.backdrop} />
      <div className={classes.backdrop2}>
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
                  className="absolute top-1/2"
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
                  >
                    Contact Us
                  </Button>
                  <Button
                    bg={'#0076FF'}
                    className="hover:bg-[#0076FF]"
                    radius={36}
                    mt={120}
                    ml={-135}
                    component={NextLink}
                    href="/how-it-works"
                    size="sm"
                  >
                    How it works?
                  </Button>
                </Group>
              </Popover.Dropdown>
            </Popover>
            {/* </Grid.Col> */}
          </Group>
        ) : undefined}
        <Container fluid pl={matches ? 5 : 90} pr={matches ? 5 : 69} py={matches ? 100 : 150} mt={matches ? 0 : 130}>
          <Grid justify="center" align="center">
            <Grid.Col sm={12}>
              <div className="text-center">
                <Title
                  mt={matches ? 100 : 150}
                  color="white"
                  className="uppercase md:!text-[96px] sm:!text-[40px] xs:!text-[40px] font-[900] md:!leading-[112px] sm:!leading-[56px] xs:!leading-[56px] tracking-[-0.015em] drop-shadow-[0_4px_33px_#016BE6] text-center"
                >
                  <span className="text-[#FFB800]">Endless Gaming</span>
                </Title>
                <Title
                  color="white"
                  className="uppercase md:!text-[96px] sm:!text-[40px] xs:!text-[40px] font-[900] md:!leading-[112px] sm:!leading-[56px] xs:!leading-[56px] tracking-[-0.015em] drop-shadow-[0_4px_33px_#016BE6] text-center"
                >
                  Anytime & Anywhere
                </Title>
                <Title
                  mt={10}
                  color="white"
                  className="uppercase md:!text-[36px] sm:!text-[24px] xs:!text-[24px] font-[600] md:!leading-[68px] sm:!leading-[34px] xs:!leading-[34px] tracking-[0.005em] drop-shadow-[0_0_0_#FFFFFF] text-center"
                >
                  WITH
                </Title>
              </div>
            </Grid.Col>
            <Grid.Col sm={12} className="text-center">
              <Anchor mt={60} href="/" component={NextLink}>
                <Image
                  height={matches ? 82 : 140}
                  width={matches ? 114 : 199}
                  alt="logo"
                  className="cursor-pointer mx-auto my-auto"
                  src="/images/modal/headerlogo.png"
                />
              </Anchor>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </>
  );
}
