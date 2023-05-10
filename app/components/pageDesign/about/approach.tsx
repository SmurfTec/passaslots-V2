import { Container, Title, Image, Text, BackgroundImage, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function Approach() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  return (
    <div
      style={{
        background:
          'radial-gradient(124.84% 124.84% at 50% 50%, rgba(26, 14, 55, 0.76) 0%, #1A0E37 100%), url(image.png)',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <BackgroundImage
        style={{
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          minHeight: '108vh',
        }}
        className=""
        src="/images/pages/about/approachbg.png"
        bgsz="auto"
      >
        <Container fluid ml={matches ? 5 : 90} mr={matches ? 5 : 69} py={100}>
          <Title className="uppercase text-[#ffffff] text-center font-[700] text-[48px] leading-[56px] tracking-[-0.015em]">
            OUR APPROACH
          </Title>
          <Text
            mt={25}
            className="text-[#ffffff] font-[400] text-center text-[24px] leading-[28px] tracking-[0.0125em]"
          >
            Let’s create the next generation of online game room platform
          </Text>
          <Grid
            mt={100}
            justify="center"
            align="center"
            className={matches ? 
              "grid grid-items-center grid-rows-3 grid-flow-col gap-[80px]"
            : "grid grid-items-center grid-rows-2 grid-flow-col gap-[80px]"}
          >
            <Image h={211} w={211} src="/images/pages/about/approach1.png" />
            <Image h={177} w={177} src="/images/pages/about/approach4.png" />
            <Image h={178} w={177} src="/images/pages/about/approach2.png" />
            <Image h={150} w={257} src="/images/pages/about/approach5.png" />
            <Image h={202} w={179} src="/images/pages/about/approach3.png" />
            <Image h={110} w={158} src="/images/pages/about/approach6.png" />
          </Grid>
        </Container>
      </BackgroundImage>
    </div>
  );
}
