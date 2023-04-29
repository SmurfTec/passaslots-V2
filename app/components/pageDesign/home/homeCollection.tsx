import { Container, Grid, Title } from '@mantine/core';
import { SingleCollection, SingleCollectionProps } from './singleCollection';

const collectionData: SingleCollectionProps[] = [
  {
    title: 'Fishing Collection',
    button: { path: 'games/#gameSlots', text: 'More on Fish Games' },
    content: 'Love fishing for cash. We do too.',
    image: '/images/pages/home/collection1.png',
  },
  {
    title: 'The Casino Collection',
    button: { path: 'games/#gameSlots', text: 'More on Casino Games' },
    content: 'Games that make you feel like you walked into the real-life casino.',
    image: '/images/pages/home/collection2.png',
  },
  {
    title: 'SLOTS COLLECTION',
    button: { path: 'games/#gameSlots', text: 'More on Slot Games' },
    content: 'SPIN ALL DAY LONG',
    image: '/images/pages/home/collection3.png',
  },
];

export function HomeCollection() {
  return (
    <Container pb={100} pt={50} size={1300}>
      <Title mb={50} order={3} className="font-[700]">
        POPULAR <span className="text-[#751F86]">COLLECTIONS</span>
      </Title>
      <Grid m={0} p={0} gutterMd={70}>
        {collectionData.map((item, key) => (
          <Grid.Col px={0} sm={6} key={key + item.content}>
            <SingleCollection button={item.button} title={item.title} content={item.content} image={item.image} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
