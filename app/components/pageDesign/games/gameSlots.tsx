import { Container, Grid, Image, Text, Title } from '@mantine/core';
import { SingleSlot, SingleSlotProps } from './singleSlot';

const slotData: SingleSlotProps[] = [
  {
    image: '/images/pages/game/slot1.png',
    text: 'Life of Luxury',
  },
  {
    image: '/images/pages/game/slot2.png',
    text: 'Life of Luxury 2',
  },
  {
    image: '/images/pages/game/slot3.png',
    text: 'COLORFUL ORCHARD',
  },
  {
    image: '/images/pages/game/slot4.png',
    text: 'Safari Heat',
  },
  {
    image: '/images/pages/game/slot5.png',
    text: 'Ultimate Fire Link - Glacier Gold',
  },
  {
    image: '/images/pages/game/slot6.png',
    text: '777',
  },
];

export function GameSlots() {
  return (
    <Container size={1300}>
      <Title id='gameSlots' my={50} order={3} className="font-[700] uppercase">
        SLOTS
      </Title>
      <Grid m={0} grow gutterSm={40}>
        {slotData.map((slot, key) => (
          <Grid.Col key={key + slot.text} sm={4}>
            <SingleSlot image={slot.image} text={slot.text} />
          </Grid.Col>
        ))}
      </Grid>

      <Grid m={0} pt={80} align='center'>
        <Grid.Col className="relative" xs={12} sm={6}>
          {/* <div className="absolute top-1/2 -translate-y-1/2 pr-32"> */}
            <Title color="#0F0F0F" order={2} className="uppercase">
              Experience a world of variety, right at your fingertips!
            </Title>
            <Text mt={20} color="#0F0F0F" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm">
              With an ever-growing selection of popular games like Fire Kirin Plus, Dragon Slayer, and Ocean King 5,
              you'll never get bored. And the best part? We add new games every month, ensuring that you always have
              access to the latest and greatest in gaming.
            </Text>
          {/* </div> */}
        </Grid.Col>
        <Grid.Col className="text-right" xs={12} sm={6}>
          <Image src="/images/pages/game/gameCouch.png" alt="gaming creator" />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
