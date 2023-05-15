import { Container, createStyles, Grid, Title } from '@mantine/core';
import { SingleCollection, SingleCollectionProps } from './singleCollection';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  backdrop: {
    // backgroundColor: '#150B2E',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#150B2E',
    backgroundImage:
      'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
    backdropFilter: 'blur(20px)',
    backgroundSize: 'cover',
    // position: 'relative',
    backgroundPosition: 'center center',
    minHeight: '50vh',
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));

const collectionData: SingleCollectionProps[] = [
  {
    title: 'CASINO COLLECTION',
    button: { path: 'games/#gameSlots', text: 'More on Fish Games' },
    content: 'SPIN ALL DAY LONG',
    image: '/images/pages/home/collection1.png',
  },
  {
    title: 'SLOTS COLLECTION',
    button: { path: 'games/#gameSlots', text: 'More on Casino Games' },
    content: 'GAMES THAT MAKE YOU FEEL LIKE YOU WALKED INTO THE REAL-LIFE CASINO.',
    image: '/images/pages/home/collection2.png',
  },
  {
    title: 'FISHING COLLECTION',
    button: { path: 'games/#gameSlots', text: 'More on Slot Games' },
    content: 'LOVE FISHING FOR CASH. WE DO TOO.',
    image: '/images/pages/home/collection3.png',
  },
];

export function HomeCollection() {
  const matches = useMediaQuery('(max-width: 770px)', true);
  const { classes } = useStyles();
  return (
    <div
      className={classes.backdrop}
      style={{ zIndex: 50, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      <Container pb={matches ? 50 : 100} pt={matches ? 50 : 100} pl={matches ? 5 : 90} pr={matches ? 5 : 69} fluid>
        <Title
          color={'white'}
          mb={matches ? 50 : 100}
          className="font-[700] text-center xs:!text-[24px] sm:!text-[24px] md:!text-[48px]"
        >
          POPULAR COLLECTIONS
        </Title>
        <Grid m={0} p={0} gutterMd={70}>
          {collectionData.map((item, key) => (
            <Grid.Col px={0} md={4} key={key + item.content}>
              <SingleCollection button={item.button} title={item.title} content={item.content} image={item.image} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
