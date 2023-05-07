import { Container, Group, Title, Stack, Image, createStyles, Popover, Button, BackgroundImage } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundImage:
      'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
    backdropFilter: 'blur(20px)',
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '125vh',
    // height: '1127px',
    position: 'relative',
    marginTop: '-115px',
    // width: '100%',
    // height: '100vh',
  },
}));

export function BlogHero() {
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
        }}
        className="relative opacity-21"
        src="/images/header/backgroundImage.png"
      >
        <Container fluid ml={90} mr={69} py={100} className="sm:mb-[auto] relative">
          {/* <div className="absolute top-1/2 -translate-y-1/2"> */}
          <Stack pt={400} h={matches ? '40vh' : '80vh'} justify="center">
            <div className="text-center">
              <Title
                className="uppercase font-[900] text-center text-[#FFB800]"
                order={3}
                style={{ textShadow: '0px 4px 33px #016BE6', lineHeight: '38px' }}
              >
                Blogs
              </Title>
              <Title
                order={1}
                mt={30}
                className="font-[700] uppercase text-[#FFF]"
                style={{
                  textShadow: '0px 4px 33px #016BE6',
                  letterSpacing: '-0.015em',
                  lineHeight: '112px',
                }}
              >
                READ MORE ABOUT THE
                <br /> PASA SLOTS COMMUNITY
              </Title>
            </div>
            <Image
              width="auto"
              height="auto"
              className="mx-auto my-auto pt-[35px]"
              src="/images/pages/blogs/bloghero.png"
              alt="image"
            />
          </Stack>
        </Container>
      </BackgroundImage>
    </div>
  );
}
