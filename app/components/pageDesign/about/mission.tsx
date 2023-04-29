import { Container, Grid, Text, Title, Image as MImage } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';


export function Mission() {
  const matches = useMediaQuery('(max-width: 576px)');
  return (
    <div className="min-h-screen bg-black relative">
      <Container pb={100} className='pt-24 md:pt-0'>
        <div>
          {/* 1st Row */}
          <Grid className="space-y-24" grow gutter={'xl'}>
            <Grid.Col className="relative mt-16 md:mt-0" xs={12} sm={6} orderSm={1} order={1}>
              <div className="absolute top-1/2 -translate-y-1/2 text-center sm:text-left">
                <Title color="white" order={2}>
                  OUR MISSION
                </Title>
                <Text mt={20} color="white" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm">
                  Pasa slots was created with gamers' needs in mind with a singular focus: to bring the real life sounds
                  of coins crashing, bells ringing, creating magical moments, and winnings left to conquer in the power
                  of a finger tip on your device.
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col className="text-center md:text-right" xs={12} sm={6} orderSm={2} order={2}>
              <Image alt='mission' className='rounded-full md:rounded-none' src="/images/pages/about/mission.png" height={267} width={267} />
            
            </Grid.Col>

            {/* 2nd Row */}
            <Grid.Col className="text-center md:text-left" sm={6} orderSm={3} order={4}>
              {/* TODO: Image component needs to be refactored */}
              <Image className='rounded-full md:rounded-none' alt='approach' src="/images/pages/about/approach.png" height={267} width={267} />
            </Grid.Col>
            <Grid.Col className="relative mt-26 md:mt-0"  xs={12} sm={6} orderSm={4} order={3}>
              <div className="absolute top-1/2 -translate-y-1/2 text-center md:text-left">
                <Title color="white" order={2}>
                  OUR APPROACH
                </Title>
                <Text mt={20} color="white" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm">
                  We believe in putting players first, prefer quality over quantity, offer a range of different games,
                  protect personal details of our players, and offer fair play. We aim to always check those boxes,
                  placing the brand among the top online gaming platforms for players all around the world.
                </Text>
              </div>
            </Grid.Col>

            {/* 3rd Row */}
            <Grid.Col className="relative mt-16 md:mt-0" xs={12} sm={6} orderSm={5} order={5}>
              <div className="absolute top-1/2 -translate-y-1/2 text-center md:text-left">
                <Title color="white" order={2}>
                  OUR COMMITMENT
                </Title>
                <Text mt={20} color="white" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm">
                  At Pasa slots, we value our players and take their data seriously. Our online casino is safe,
                  encrypted with 128-bit SSL technology, and approved by JaCOG. We never share or sell your data to
                  third parties or use it for advertising purposes.
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col className="text-center md:text-right" sm={6} orderSm={6} order={6}>
              <Image className='rounded-full md:rounded-none' alt='commitment' src="/images/pages/about/commitment.png" height={267} width={267} />
            </Grid.Col>
          </Grid>
        </div>

        <div className="absolute right-0 top-1/4">
          <MImage alt='rightEllips' src="/images/pages/about/rightEllipse.png" height={matches ? 90 : 180} width={matches ? 50 :103} />
        </div>
        <div className="absolute left-0 bottom-10">
          <MImage alt='leftEllipse' src="/images/pages/about/leftEllipse.png" height={matches ? 90 : 180} width={matches ? 50 :95} />
        </div>
      </Container>
    </div>
  );
}
