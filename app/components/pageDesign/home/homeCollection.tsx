import { Container, createStyles, Grid, Title } from '@mantine/core';
import { SingleCollection, SingleCollectionProps } from './singleCollection';

const useStyles = createStyles((theme) => ({
  backdrop: {
    // backgroundColor: '#150B2E',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'linear-gradient(to right, #1A0E37, #016BE6, #A74C9A, #84329A)',
    backdropFilter: 'blur(20px)',
    backgroundSize: 'cover',
    // position: 'relative',
    backgroundPosition: 'center center',
    minHeight: '100vh', 
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));


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
  const { classes } = useStyles();
  return (
    <div className={classes.backdrop}>
      <Container pb={100} pt={100} size={1300}>
        <Title color={'white'} mb={60} order={3} className="font-[700] text-center">
          POPULAR COLLECTIONS
        </Title>
        <Grid m={0} p={0} gutterMd={70}>
          {collectionData.map((item, key) => (
            <Grid.Col px={0} sm={4} key={key + item.content}>
              <SingleCollection button={item.button} title={item.title} content={item.content} image={item.image} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
