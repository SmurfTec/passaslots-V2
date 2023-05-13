import { Container, Grid, Group, Text, Title, Image as MImage, Timeline, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';

export function Mission() {
  const matches = useMediaQuery('(max-width: 1024px)', true);
  const matches2 = useMediaQuery('(max-width: 767px)', true);
  return (
    <>
      {' '}
      {!matches2 && (
        <div
          style={{
            backgroundImage: "url('/images/pages/about/missionbg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '100% 100%',
            // minHeight: '200vh',
            position: 'relative',
            zIndex: 50,
            boxShadow: '-1px 0px 20px 3px #016BE6',
            borderTop: '6px solid #016BE6',
          }}
        >
          <Container fluid py={100} className="md:pt-0">
            {/* {matches ? 
        <Grid mt={150}>
          <Grid.Col xs={3}>
            <Group className="flex flex-col">
              <Group position='center' spacing={33}>
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    background: '#016BE6',
                    border: '11px solid #FFB800',
                    borderRadius: '50px',
                    // marginTop: '-60px',
                  }}
                />
                <MImage className="ml-[180px] text-right" src="/images/pages/about/capitalT.png" />
              </Group>
              <div
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '337px',
                  height: '0px',
                  border: '4px dashed #FFFFFF',
                  transform: 'rotate(90deg)',
                  marginTop: '204.5px',
                }}
              />
              <Group position='center' spacing={33} className='mt-[277px]'>
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    background: '#016BE6',
                    border: '11px solid #FFB800',
                    borderRadius: '50px',
                    marginTop: '-70px',
                  }}
                />
                <MImage ml={180} src="/images/pages/about/capitalT.png" />
              </Group>
              <div
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '337px',
                  height: '0px',
                  border: '4px dashed #FFFFFF',
                  transform: 'rotate(90deg)',
                  marginTop: '589.5px',
                }}
              />
              <Group position='center' spacing={33} className='mt-[270px]'>
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    background: '#016BE6',
                    border: '11px solid #FFB800',
                    borderRadius: '50px',
                    marginTop: '-60px',
                  }}
                />
                <MImage ml={180} src="/images/pages/about/capitalT.png" />
              </Group>
            </Group>
          </Grid.Col>
          <Grid.Col xs={9}>

          </Grid.Col>
        </Grid>
          : */}
            <Grid mb={100}>
              <Grid.Col order={1} mt={100} md={4} className="grid justify-items-end">
                <Group className="flex flex-col">
                  <div className="flex mt-[440px]">
                    <Grid justify="flex-end" ml="auto" align="center">
                      <Title
                        mb={70}
                        className="absolute text-right uppercase text-[#ffffff] font-[700] sm:!text-[32px] xs:!text-[24px] leading-[38px] tracking-[-0.015em]"
                      >
                        OUR APPROACH
                      </Title>
                      <Text
                        maw={381}
                        className="absolute text-right mt-[170px] text-[#ffffff] font-[400] sm:text-[16px] xs:text-[15px] leading-[30px] tracking-[0.005em] opacity-80"
                      >
                        We believe in putting players first, prefer quality over {/* <br /> */}
                        quantity, offer a range of different games, protect {/* <br /> */}
                        personal details of our players, and offer fair play. We {/* <br /> */}
                        aim to always check those boxes, placing the brand {/* <br /> */}
                        among the top online gaming platforms for players {/* <br /> */}
                        all around the world.{' '}
                      </Text>
                    </Grid>
                  </div>
                </Group>
              </Grid.Col>
              <Grid.Col order={2} mt={100} md={4}>
                <Group className="flex flex-col">
                  <Group position="center" spacing={33}>
                    <div
                      style={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        width: matches ? '22px' : '36px',
                        height: matches ? '22px' : '36px',
                        background: '#016BE6',
                        border: matches ? '5px solid #FFB800' : '11px solid #FFB800',
                        borderRadius: '50px',
                        marginTop: '-60px',
                      }}
                    />
                    <MImage
                      height={matches ? 48 : 95}
                      width={matches ? 42 : 84}
                      className="ml-[180px] text-right"
                      src="/images/pages/about/capitalT.png"
                    />
                  </Group>
                  <div
                    style={{
                      boxSizing: 'border-box',
                      position: 'absolute',
                      width: '337px',
                      height: '0px',
                      border: matches ? '2px dashed #FFFFFF' : '4px dashed #FFFFFF',
                      transform: 'rotate(90deg)',
                      marginTop: '204.5px',
                    }}
                  />
                  <Group position="center" spacing={33} className="mt-[277px]">
                    <MImage
                      height={matches ? 48 : 95}
                      width={matches ? 42 : 84}
                      mr={180}
                      style={{ transform: 'scaleX(-1)' }}
                      src="/images/pages/about/capitalT.png"
                    />
                    <div
                      style={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        width: matches ? '22px' : '36px',
                        height: matches ? '22px' : '36px',
                        background: '#016BE6',
                        border: matches ? '5px solid #FFB800' : '11px solid #FFB800',
                        borderRadius: '50px',
                        marginTop: '-70px',
                      }}
                    />
                  </Group>
                  <div
                    style={{
                      boxSizing: 'border-box',
                      position: 'absolute',
                      width: '337px',
                      height: '0px',
                      border: matches ? '2px dashed #FFFFFF' : '4px dashed #FFFFFF',
                      transform: 'rotate(90deg)',
                      marginTop: '589.5px',
                    }}
                  />
                  <Group position="center" spacing={33} className="mt-[270px]">
                    <div
                      style={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        width: matches ? '22px' : '36px',
                        height: matches ? '22px' : '36px',
                        background: '#016BE6',
                        border: matches ? '5px solid #FFB800' : '11px solid #FFB800',
                        borderRadius: '50px',
                        marginTop: '-60px',
                      }}
                    />
                    <MImage
                      height={matches ? 48 : 95}
                      width={matches ? 42 : 84}
                      ml={180}
                      src="/images/pages/about/capitalT.png"
                    />
                  </Group>
                </Group>
              </Grid.Col>
              <Grid.Col order={3} mt={100} md={4}>
                <Group className="flex flex-col content-start">
                  <div className="flex mt-[50px]">
                    <Grid align="center">
                      <Title
                        mb={70}
                        className="absolute uppercase text-[#ffffff] font-[700] sm:!text-[32px] xs:!text-[24px] leading-[38px] tracking-[-0.015em]"
                      >
                        OUR MISSION
                      </Title>
                      <Text
                        maw={372}
                        className="absolute mt-[120px] text-[#ffffff] font-[400] sm:text-[16px] xs:text-[15px] leading-[30px] tracking-[0.005em] opacity-80"
                      >
                        Pasa slots was created with gamers' needs in mind {/* <br /> */}
                        with a singular focus: to bring the real life sounds of {/* <br /> */}
                        coins crashing, bells ringing, creating magical {/* <br /> */}
                        moments, and winnings left to conquer in the power {/* <br /> */}
                        of a finger tip on your device.{' '}
                      </Text>
                    </Grid>
                  </div>
                  <div className="flex mt-[750px]">
                    <Grid align="center">
                      <Title
                        mb={70}
                        className="absolute uppercase text-[#ffffff] font-[700] sm:!text-[32px] xs:!text-[24px] leading-[38px] tracking-[-0.015em]"
                      >
                        OUR COMMITMENT
                      </Title>
                      <Text
                        maw={363}
                        className="absolute mt-[120px] text-[#ffffff] font-[400] sm:text-[16px] xs:text-[15px] leading-[30px] tracking-[0.005em] opacity-80"
                      >
                        At Pasa slots, we value our players and take their {/* <br /> */}
                        data seriously. Our online casino is safe, encrypted {/* <br /> */}
                        with 128-bit SSL technology, and approved by {/* <br /> */}
                        JaCOG. We never share or sell your data to third {/* <br /> */}
                        parties or use it for advertising purposes.{' '}
                      </Text>
                    </Grid>
                  </div>
                </Group>
              </Grid.Col>
            </Grid>
            {/* } */}
          </Container>
        </div>
      )}
      {matches2 && (
        <div
          style={{
            backgroundImage: "url('/images/pages/about/missionbg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '250%',
            // minHeight: '200vh',

            zIndex: 50,
            boxShadow: '-1px 0px 20px 3px #016BE6',
            borderTop: '6px solid #016BE6',
            paddingTop: '70px',
          }}
        >
          {' '}
          <div style={{ width: '90%', margin: 'auto' }}>
            {' '}
            <Timeline
              active={2}
              bulletSize={24}
              lineWidth={5}
              color="blue"
              styles={{ itemTitle: { fontSize: '24px' } }}
            >
              <Timeline.Item
                bullet={<Image src={'/images/pages/hiw/timeline-yellow.png'} alt={'timeLine-yellow'} />}
                title="OUR MISSION"
                align="right"
                style={{ color: 'white' }}
                tabIndex={0}
                pb={100}
              >
                <Text style={{ fontSize: '13px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  Pasa slots was created with gamers' needs in mind with a singular focus: to bring the real life sounds
                  of coins crashing, bells ringing, creating magical moments, and winnings left to conquer in the power
                  of a finger tip on your device.
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<Image src={'/images/pages/hiw/timeline-blue.png'} alt={'timeLine-yellow'} />}
                title="OUR APPROACH"
                align="right"
                style={{ color: 'white' }}
                tabIndex={0}
                pb={100}
              >
                <Text style={{ fontSize: '13px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  We believe in putting players first, prefer quality over quantity, offer a range of different games,
                  protect personal details of our players, and offer fair play. We aim to always check those boxes,
                  placing the brand among the top online gaming platforms for players all around the world.{' '}
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<Image src={'/images/pages/hiw/timeline-yellow.png'} alt={'timeLine-yellow'} />}
                title="OUR COMMITMENT"
                align="right"
                style={{ color: 'white' }}
                tabIndex={0}
                pb={70}
              >
                <Text style={{ fontSize: '13px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  At Pasa slots, we value our players and take their data seriously. Our online casino is safe,
                  encrypted with 128-bit SSL technology, and approved by JaCOG. We never share or sell your data to
                  third parties or use it for advertising purposes.
                </Text>
              </Timeline.Item>
            </Timeline>
            {/* <Timeline bulletSize={24} lineWidth={5}>
              {' '}
              <Timeline.Item
                bullet={<Image src={'/images/pages/hiw/timeline-yellow.png'} alt={'timeLine-yellow'} />}
                title="STAGE 1"
                align="right"
                style={{ color: 'white' }}
                tabIndex={0}
                pb={20}
              >
                <Text style={{ fontSize: '12px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  Complete the player registration
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<Image src={'images/pages/hiw/timeline-yellow.png'} alt={'timeLine-yellow'} />}
                title="STAGE 1"
                align="right"
                style={{ color: 'white' }}
                pb={20}
              >
                <Text style={{ fontSize: '12px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  Complete the player registration
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<Image src={'images/pages/hiw/timeline-yellow.png'} alt={'timeLine-yellow'} />}
                title="STAGE 1"
                align="right"
                style={{ color: 'white' }}
                pb={20}
              >
                <Text style={{ fontSize: '12px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  Complete the player registration
                </Text>
              </Timeline.Item>
            </Timeline> */}
          </div>
        </div>
      )}
    </>
  );
}
