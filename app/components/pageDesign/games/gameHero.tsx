import { Anchor, Container, Grid, Image, Title, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NextLink } from '@mantine/next';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundImage: 'url("/images/pages/game/heroBackground.png")',
    // backdropFilter: 'blur(16.5px)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '133vh',
    filter: 'blur(16.5px)',
    marginTop: '-115px',
  },
  backdrop2: {
    minHeight: '133vh',
    marginTop: '-133vh',
  },
}));

export function GameHero() {
  const matches = useMediaQuery('(max-width: 810px)');
  const { classes } = useStyles();
  return (<>
    <div className={classes.backdrop} />
    <div className={classes.backdrop2}>
      <Container fluid pl={90} pr={69} py={100}>
        <Grid justify='center' align='center'>
          <Grid.Col sm={12}>
            <div className='text-center'>
              <Title mt={200} color='white' className='uppercase text-[96px] font-[900] leading-[112px] tracking-[-0.015em] drop-shadow-[0_4px_33px_#016BE6] text-center'>
                <span className='text-[#FFB800]'>Endless Gaming</span><br/> Anytime & Anywhere
              </Title>
              <Title mt={10} color='white' className='uppercase text-[36px] font-[600] leading-[68px] tracking-[0.005em] drop-shadow-[0_0_0_#FFFFFF] text-center'>
                WITH
              </Title>
            </div>
          </Grid.Col>
          <Grid.Col sm={12} className='text-center'>
            <Anchor mt={60} href="/" component={NextLink}>
              <Image height={140} width={199} alt="logo"  className='cursor-pointer mx-auto my-auto' src='/images/modal/headerlogo.png' />
            </Anchor>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
    </>
  );
}
