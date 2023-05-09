import { BackgroundImage, Group, Text, Title, Image, createStyles, Grid, Popover, Button} from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { useState } from 'react';
import { Dots } from 'tabler-icons-react';

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

export function Hero() {
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
    <div 
    onClick={closesideMenu}
    className="bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      backgroundColor: '#150B2E',
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(20px)',
    }}>
      <div className={classes.backdrop} style={{ marginTop: '-115px' }}>
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
                  <Button bg={'#0076FF'} className="hover:bg-[#0076FF]" radius={36} mt={120} ml={-135} component={NextLink} href="/how-it-works" size="sm">
                    How it works?
                  </Button>
                </Group>
            </Popover.Dropdown>
          </Popover>
        {/* </Grid.Col> */}
      </Group>
      ) : undefined}
        <div className="pt-[163px] pb-[50px]">
          <div className="text-center">
            <Group position='center'>
              <Title className="font-[700] text-[#FFB800]" order={3}>
                About Us
              </Title>
            </Group>
            <Image className='mx-auto' src="/images/pages/about/homeImage.png" width={551} height={523} alt="vector" />
            <Text color="black" className="font-[400] uppercase text-[#FFFFFF]" mt={0} size={24}>
              25+ full-time professionals, 1 goal:
            </Text>
            <Grid justify='center' align='center'>
              <Title color="white" size={36} mt={20} className="font-[500] justify-center text-center" order={3} maw={1000}>
                To create the world's most entertaining and user-friendly online game room platform.
              </Title>
            </Grid>
            <Grid justify='center' align='center'>
              <Title style={{
                borderRadius: '50px',
                border: '7px solid #016BE6',
              }} p={10} px={50} mb={50} size={31} color="#FFFFFF" mt={31} className="font-[400]" order={4} maw={541}>
                How are we going to get there?
              </Title>
            </Grid>
          </div>
        </div>
          {/* <ScrollButton pointerPosition='DOWN' className='bottom-20 left-1/2 absolute' /> */}
      </div>
    </div>
  );
}
