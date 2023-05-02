import { BackgroundImage, Button, Grid, Group, Image, Text, Title, createStyles, Modal, Popover } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { Carousel, ScrollButton } from '@pasa/customComponents';
import { useBonusModal } from '@pasa/hooks';
import { useState } from 'react';
import { ArrowRight, Dots } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  backdrop: {
    // backgroundColor: '#150B2E',
    backgroundImage: "url('/images/header/backgroundImage.png')",
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '100vh', 
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));

const images = [
  '/images/pages/home/HomeFirstImage.png',
  '/images/pages/home/HomeFirstImage.png',
  '/images/pages/home/HomeFirstImage.png',
];

export function HomeHero() {
  const matches = useMediaQuery('(max-width: 1000px)');
  const { classes } = useStyles();
  const [BonusModal, bonusOpen] = useBonusModal();
  const [sideButtons, setSideButtons] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const handleSideButtons = () => {
    if (sideButtons) {
      setSideButtons(false);
    }
  };
  return (
    <div onClick={handleSideButtons}
    className="bg-gradient-to-br from-blue-800 to-indigo-900"
    style={{
      backgroundColor: '#150B2E',
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(50px)',
    }}>
      <div className={classes.backdrop} style={{ marginTop: '-115px' }}>
        <Grid m={0} align="center">
          {!matches ? (
            <Group align={'center'}>
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
                  <Button className='justify-center' onClick={() => setSideButtons(!sideButtons)} h={70} w={70} radius={5} 
                    bg={sideButtons ? '#3F2680' : 'linear-gradient(to top right, #3F2680, #50A1FF)'}
                    styles={{
                      root: {
                        '&:hover': {
                          background: sideButtons ? '#3F2680' : 'linear-gradient(to top right, #3F2680, #50A1FF)',
                        },
                      },
                    }}>
                      <Dots size={34} />
                  </Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <Group align='center'>
                      <Button bg={'#0076FF'} className="hover:bg-[#0076FF]" radius={50} mb={150} ml={-20} component={NextLink} href="/about" size="sm">
                        About Us
                      </Button>
                      <Button className="text-top items-center hover:bg-[#0076FF]" bg={'#0076FF'} mt={-20} radius={50} ml={-90} component={NextLink} href="/contact" size="sm">
                        Contact Us
                      </Button>
                      <Button bg={'#0076FF'} className="hover:bg-[#0076FF]" radius={90} mt={120} ml={-140} component={NextLink} href="/how-it-works" size="sm">
                        How does it work?
                      </Button>
                    </Group>
                </Popover.Dropdown>
              </Popover>
            </Group>
          ) : undefined}
          <Grid.Col order={2} orderMd={2} m={0} md={8} className='relative text-center mt-[190px]'>
            <Carousel styles={{
              indicator: {
                width: "22px",
                height: "22px",
                transition: 'width 250ms ease',
                backgroundColor: '#D9D9D9',
                gap: '21px',

                '&[data-active]': {
                  width: "22px",
                  backgroundColor: '#016BE6',
                },
              },
            }}
            withIndicators ml={351} mr={150} slideSize="50%" loop initialSlide={1} images={images} delay={5000} hC={598} wC={598} />
            {/* <Image className='ml-[421px]' width={598} height={598} src="/images/pages/home/HomeFirstImage.png" alt='image' /> */}
            <Title color={'#FFB800'} mt={27} className="font-[700] uppercase ml-[210px]" order={1}>
              Pasa SLOTS
            </Title>
            <Title color={'#ffffff'} mt={13} className="font-[400] uppercase ml-[210px]" size={'md'} order={2}>
              Seize Your $10 Sign up Fortune by the Seashore
            </Title>
            <Button
              mt={58}
              radius={50}
              w={180}
              mb={106}
              styles={{
                root: {
                  background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                  // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                  '&:hover': {
                    background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                  },
                  fontSize: '17px',
                  marginLeft: "210px",
                },
                label: {
                  marginBottom: '-2px',
                },
              }}
              size="xl"
              component='a'
              href="http://Pasasweeps.net"
            >
              Play Now
            </Button>

            <Image className='absolute right-0 top-1/2 -translate-y-1/2' width={250} height={250} src="/images/pages/home/homeHeroBackground.png" alt='image' />

          </Grid.Col>
          {BonusModal}
        </Grid>
      </div>
    </div>
  );
}
