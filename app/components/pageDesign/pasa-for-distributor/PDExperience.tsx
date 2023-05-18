import { Container, Grid, Image, Text, Title, Group, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function PDExperience() {
  const matches = useMediaQuery('(max-width: 770px)', true);
  return (
    <div
      style={{
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container fluid ml={matches ? 5 : 90} mr={matches ? 5 : 69} py={matches ? 50 : 100}>
        <Grid align="center" justify="center">
          <Image maw={350} mah={350}
            className="mx-auto my-auto"
            src="/images/pages/pasa-for-distributor/experience.png"
            alt="experience"
          />
        </Grid>
        <Title
          mt={matches ? 10 : 37}
          maw={890}
          className="mx-auto uppercase xs:!text-[24px] sm:!text-[30px] md:!text-[40px] font-[700] md:!leading-[50px] sm:!leading-[30px] xs:!leading-[30px] tracking-[0.0125em] text-center"
          color="white"
        >
          Pasa distributors{' '}
          <span className="text-[#50A1FF]">
            experience growth
          </span>{' '}
          within their first month
        </Title>
        <Group mt={matches ? 30 : 50} position="apart">
          <Button
            styles={{
              label: {
                flexDirection: 'column',
                gap: '30px',
                alignItems: 'stretch',
                whiteSpace: 'normal',
              },
            }}
            style={{
              border: '6px solid #016BE6',
              maxWidth: '365px',
              minHeight: '315px',
              flexDirection: 'column',
              background: 'transparent',
              padding: '34px 25px',
              filter: 'drop-shadow(0px 11px 32px rgba(1, 107, 230, 0.76))',
            }}
            className="rounded-[29px] mx-auto text-[16px] font-[700] text-[#EEEEEE] tracking-[0.0125em] leading-[23px]"
          >
            <Image
              pos="inherit"
              height="auto"
              width="auto"
              src="/images/pages/pasa-for-distributor/experience1.png"
              alt=""
            />
            EASY TO START - Start Offering{' '}
            {/* <br /> */}
            Promotional Games to You Customers{' '}
            {/* <br /> */}
            Same Day.
          </Button>
          <Button
            styles={{
              label: {
                flexDirection: 'column',
                gap: '30px',
                alignItems: 'stretch',
                whiteSpace: 'normal',
              },
            }}
            style={{
              border: '6px solid #016BE6',
              maxWidth: '365px',
              minHeight: '315px',
              flexDirection: 'column',
              background: 'transparent',
              padding: '34px 25px',
              filter: 'drop-shadow(0px 11px 32px rgba(1, 107, 230, 0.76))',
            }}
            className="rounded-[29px] mx-auto text-[16px] font-[700] text-[#EEEEEE] tracking-[0.0125em] leading-[23px]"
          >
            <Image
              pos="inherit"
              height="auto"
              width="auto"
              src="/images/pages/pasa-for-distributor/experience2.png"
              alt=""
            />
            NO LARGE INVESTMENT REQUIRED -{' '}
            {/* <br /> */}
            Contact Us Now and Get Your Agent{' '}
            {/* <br /> */}
            Account Today!{' '}
          </Button>
          <Button
            styles={{
              label: {
                flexDirection: 'column',
                gap: '30px',
                alignItems: 'stretch',
                whiteSpace: 'normal',
              },
            }}
            style={{
              border: '6px solid #016BE6',
              maxWidth: '365px',
              minHeight: '315px',
              flexDirection: 'column',
              background: 'transparent',
              padding: '34px 25px',
              filter: 'drop-shadow(0px 11px 32px rgba(1, 107, 230, 0.76))',
            }}
            className="rounded-[29px] mx-auto text-[16px] font-[700] text-[#EEEEEE] tracking-[0.0125em] leading-[23px]"
          >
            <Image
              pos="inherit"
              height="auto"
              width="auto"
              src="/images/pages/pasa-for-distributor/experience3.png"
              alt=""
            />
            #1 PLATFORM - Over 40 Top Performing{' '}
            {/* <br /> */}
            Promotional Games created with industry{' '}
            {/* <br /> */}
            leading experience. Always aiming for{' '}
            {/* <br /> */}
            growth and updates with your customers{' '}
            {/* <br /> */}
            in mind{' '}
          </Button>
        </Group>
      </Container>
    </div>
  );
}
