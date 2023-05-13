import { Grid, Title, Container, Image, Group, Popover, Button } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { NextLink } from '@mantine/next'
import { Dots } from 'tabler-icons-react';

export function PDHero() {
  const matches = useMediaQuery('(max-width: 810px)');
  const [sideButtons, setSideButtons] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const closesideMenu = () => {
    if(sideButtons) {
      setSideButtons(false);
    }
  };
  return (
    <div onClick={closesideMenu} style={{
      backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
      backdropFilter: 'blur(20px)',
      backgroundSize: 'cover',
      marginTop: '-115px',
    }}>
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
      <Container fluid pl={matches? 5 : 90} pr={matches? 5 : 69} pt={matches ? 50 : 100} pb={matches ? 0 : 50}>
        <Grid justify='center' align='center' mb={500}>
          <Grid.Col sm={12}>
            <div className='text-center'>
              <Title mt={matches ? 100 : 150} color='white' className='uppercase md:!text-[48px] sm:!text-[24px] xs:!text-[24px] font-[900] md:!leading-[56px] sm:!leading-[25px] xs:!leading-[25px] tracking-[-0.015em] drop-shadow-[0_4px_33px_#016BE6] text-center'>
                Empower Your Organization With
              </Title>
              <Title mt={20} color='#FFB800' className='uppercase md:!text-[96px] sm:!text-[40px] xs:!text-[40px] font-[900] md:!leading-[112px] sm:!leading-[56px] xs:!leading-[56px] tracking-[-0.015em] text-center'>
                PASA SLOTS
              </Title>
            </div>
          </Grid.Col>
          <Grid.Col sm={12} mb={-500}>
            <Grid align='center' justify='center' className='text-center'>
              <Image height='auto' width='auto' alt="logo"  className='mx-auto my-auto' src='/images/pages/pasa-for-distributor/lepriconhero.png' />
            </Grid>
          </Grid.Col>
          <Grid mt={-420} align='center' justify='center'>
            <div className="relative text-center">
              <Button
                styles={{
                  root: {
                    border: '1px solid #F6CAA7',
                    background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    padding: matches ? '12px 35px' : '17px 53px',
                    letterSpacing: '-0.015em',
                    // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                    '&:hover': {
                      background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                    },
                    fontSize: matches ? '15px' : '20px',
                    lineHeight: '23px',
                    textTransform: 'uppercase',
                    height: matches ? '40px' : '57px',
                    width: matches ? '220px' : '278px',
                  },
                  label: {
                    marginBottom: '-2px',
                    fontSize: matches ? '15px' : '20px',
                    lineHeight: '23px'
                  },
                }}
                radius={50}
                className='font-[500]'
                mt={matches ? 10 : 30}
                component={NextLink}
                href="/distributor-signup"
              >
                CONNECT WITH US
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
