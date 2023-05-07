import { Container, Grid, Group, Text, Title, Image as MImage } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function Mission() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/pages/about/missionbg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '200vh',
        position: 'relative',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container fluid py={100} className="pt-50 md:pt-0">
        <Grid>
          <Grid.Col mt={318} sm={5} className="grid justify-items-end">
            <Group className="flex flex-col">
              <div className="flex mt-[390px]">
                <Grid justify="flex-end" ml="auto" mr={43} align="center">
                  <Title
                    mb={70}
                    className="absolute text-right uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]"
                  >
                    OUR APPROACH
                  </Title>
                  <Text className="absolute text-right mt-[170px] text-[#ffffff] font-[400] text-[16px] leading-[30px] tracking-[0.005em] opacity-80">
                    We believe in putting players first, prefer quality over
                    <br />
                    quantity, offer a range of different games, protect
                    <br />
                    personal details of our players, and offer fair play. We
                    <br />
                    aim to always check those boxes, placing the brand
                    <br />
                    among the top online gaming platforms for players
                    <br />
                    all around the world.
                  </Text>
                </Grid>
                <MImage className="ml-[43px] text-right" src="/images/pages/about/capitalT.png" />
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col mt={318} sm={2}>
            <Group className="flex flex-col">
              <div
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '36px',
                  height: '36px',
                  background: '#150B2E',
                  border: '11px solid #FFB800',
                  borderRadius: '50px',
                }}
              />
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
              <div
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '36px',
                  height: '36px',
                  background: '#150B2E',
                  border: '11px solid #FFB800',
                  borderRadius: '50px',
                  marginTop: '385px',
                }}
              />
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
              <div
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '36px',
                  height: '36px',
                  background: '#150B2E',
                  border: '11px solid #FFB800',
                  borderRadius: '50px',
                  marginTop: '767px',
                }}
              />
            </Group>
          </Grid.Col>
          <Grid.Col mt={318} sm={5}>
            <Group className="flex flex-col content-start">
              <div className="flex">
                <MImage src="/images/pages/about/capitalT.png" />
                <Grid ml={43} align="center">
                  <Title
                    mb={70}
                    className="absolute uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]"
                  >
                    OUR MISSION
                  </Title>
                  <Text className="absolute mt-[120px] text-[#ffffff] font-[400] text-[16px] leading-[30px] tracking-[0.005em] opacity-80">
                    Pasa slots was created with gamers' needs in mind
                    <br />
                    with a singular focus: to bring the real life sounds of
                    <br />
                    coins crashing, bells ringing, creating magical
                    <br />
                    moments, and winnings left to conquer in the power
                    <br />
                    of a finger tip on your device.
                  </Text>
                </Grid>
              </div>
              <div className="flex mt-[660px]">
                <MImage src="/images/pages/about/capitalT.png" />
                <Grid ml={43} align="center">
                  <Title
                    mb={70}
                    className="absolute uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]"
                  >
                    OUR COMMITMENT
                  </Title>
                  <Text className="absolute mt-[120px] text-[#ffffff] font-[400] text-[16px] leading-[30px] tracking-[0.005em] opacity-80">
                    At Pasa slots, we value our players and take their
                    <br />
                    data seriously. Our online casino is safe, encrypted
                    <br />
                    with 128-bit SSL technology, and approved by
                    <br />
                    JaCOG. We never share or sell your data to third
                    <br />
                    parties or use it for advertising purposes.
                  </Text>
                </Grid>
              </div>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
