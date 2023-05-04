import { Container, Group, Stack, Text, Title, Image, createStyles, Popover, Button, BackgroundImage } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundImage: 'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
    backdropFilter: 'blur(20px)',
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '130vh', 
    // height: '1127px',
    position: 'relative',
    marginTop: '-115px',
    // width: '100%',
    // height: '100vh',
  },
}));

export function HiwHero() {
  const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 810px)', true);
  return (
    <div className={classes.backdrop}>
      <BackgroundImage
        style={{
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }} className='absolute opacity-21' src="/images/header/backgroundImage.png" >
      <Container fluid ml={90} mr={69} className="mb-[-150px] mt-[300px] sm:mb-[auto] relative">
        <Stack h={matches ? '40vh' : '80vh'} justify="center">
          <Group align='center'>
            <Title className="font-[900] text-[#FFB800]" order={3} style={{textShadow: '0px 4px 33px #016BE6', lineHeight: '38px'}}>
              How it works?
            </Title>
          </Group>
          <Title order={1} mt={30} className="font-[700] uppercase text-[#FFF]" 
          style={{
            textShadow: '0px 4px 33px #016BE6',
            letterSpacing: '-0.015em',
            lineHeight: '112px',
          }}>
            HOW PASA WORKS
          </Title>
          <Text color="#FFFFFF" className="font-[400] uppercase tracking-[0.005em] leading-6" size="20px">
            Experience the thrill of casino gaming from the comfort of your own home
          </Text>
          <Image w="562px !important" h="562px !important" className="mx-auto my-auto pt-[33px]" src="/images/pages/hiw/herohiw.png" alt="image" />
        </Stack>
      </Container>
      </BackgroundImage>
    </div>
  );
}
