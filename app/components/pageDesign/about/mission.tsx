import { Container, Grid, Text, Title, Image as MImage } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function Mission() {
  return (
    <div style={{
      backgroundImage: "url('/images/pages/about/missionbg.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      minHeight: '200vh', 
      position: 'relative',
    }}>
      <Container size={1000} py={100} className='pt-50 md:pt-0'>
        <div style={{
          backgroundImage: "url('/images/pages/about/missionroadmap.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          minHeight: '100%', 
          position: 'relative',
        }}>
          {/* 1st Row */}
          <Grid className="space-y-24" grow gutter={'xl'} py={50}>
            <Grid.Col className="relative mt-16 md:mt-0" xs={12} sm={4} orderSm={1} order={1} pt={30} mb={50}>
              <div className="absolute text-center sm:text-left mt-[40px] ml-[75px]">
                <Title color="white" order={2}>
                  OUR MISSION
                </Title>
                <Text mt={20} color="white" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm" maw={300}>
                  Pasa slots was created with gamers' needs in mind with a singular focus: to bring the real life sounds
                  of coins crashing, bells ringing, creating magical moments, and winnings left to conquer in the power
                  of a finger tip on your device.
                </Text>
              </div>
            </Grid.Col>

            {/* 2nd Row */}
            <Grid.Col className="relative ml-[250px]"  xs={12} sm={3} orderSm={4} order={3} pt={300}>
              <div className="absolute text-center md:text-left">
                <Title color="white" order={2}>
                  OUR APPROACH
                </Title>
                <Text mt={20} color="white" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm" maw={300}>
                  We believe in putting players first, prefer quality over quantity, offer a range of different games,
                  protect personal details of our players, and offer fair play. We aim to always check those boxes,
                  placing the brand among the top online gaming platforms for players all around the world.
                </Text>
              </div>
            </Grid.Col>

            {/* 3rd Row */}
            <Grid.Col className="relative" xs={12} sm={3} orderSm={5} order={5} pt={500}>
              <div className="absolute text-center md:text-left ml-[-150px]">
                <Title color="white" order={2}>
                  OUR COMMITMENT
                </Title>
                <Text mt={20} color="white" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm" maw={300}>
                  At Pasa slots, we value our players and take their data seriously. Our online casino is safe,
                  encrypted with 128-bit SSL technology, and approved by JaCOG. We never share or sell your data to
                  third parties or use it for advertising purposes.
                </Text>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
