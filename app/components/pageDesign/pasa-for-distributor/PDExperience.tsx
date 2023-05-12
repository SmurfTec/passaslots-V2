import { Container, Grid, Image, Text, Title, Group, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function PDExperience() {
  const matches = useMediaQuery('(max-width: 700px)', true);
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
      <Container fluid ml={matches ? 2 : 90} mr={matches ? 2 : 69} py={100}>
        <Grid align="center" justify="center">
          <Image maw={450} mah={450}
            className="mx-auto my-auto"
            src="/images/pages/pasa-for-distributor/experience.png"
            alt="experience"
          />
        </Grid>
        <Title
          mt={37}
          className="uppercase xs:!text-[40px] text-[48px] font-[700] leading-[61px] tracking-[0.0125em] text-center"
          color="white"
        >
          Pasa distributors{' '}
          <span className="text-[#50A1FF]">
            experience
            <br /> growth
          </span>{' '}
          within their first month
        </Title>
        <Group mt={110} position="apart">
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
              maxWidth: '385px',
              minHeight: '382px',
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
              maxWidth: '385px',
              minHeight: '382px',
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
              maxWidth: '385px',
              minHeight: '382px',
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
