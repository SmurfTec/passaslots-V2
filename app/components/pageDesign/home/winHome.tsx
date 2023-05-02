import { Button, Container, Grid, Text, Title, Image, createStyles, BackgroundImage } from '@mantine/core';
import { useBonusModal } from '@pasa/hooks';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('/images/pages/home/casinochipsfalling.png')`,
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '100vh', 
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));

export function WinHome() {
  const [BonusModal, bonusOpen] = useBonusModal();
  const { classes } = useStyles();
  return (
    <div className={classes.backdrop}>
      <Container size={1300} pt={94}>
        <Grid align="center">
          <Grid.Col sm={12}>
          <Image className='text-center mx-auto' mb={58} width={644} height={363} src="/images/pages/home/winHomeImage.png" alt='image' />
          <Title color={'#fff'} mb={29} order={3} className="font-[700] uppercase text-center">
            Play on any device now
          </Title>
          <Text mb={29} color="#fff" className="font-[400] tracking-[0.005em] leading-6 text-center" size="sm">
            Every kind of game imaginable, a safe and secure environment <br /> to play in, and quick top-up{' '}
            <span className="font-[700]">solutions to fund your account</span> <br /> with.
          </Text>
          <div className="text-center mt-8">
            <Button 
            radius={50}
            mb={86}
            styles={{
              root: {
                background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                // borderColor: '#F6CAA7',
                '&:hover': {
                  background: 'linear-gradient(to bottom, #2072D2, #A74C9A)',
                }
              }
            }}
            onClick={bonusOpen} className="h-12 px-12 text-[14px] font-[300]">
              SIGN UP
            </Button>
          </div>
          </Grid.Col>
        </Grid>
        {BonusModal}
      </Container>
    </div>
  );
}
