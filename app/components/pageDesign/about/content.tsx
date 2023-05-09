import { Container, Grid, Text, Title, Image } from '@mantine/core';

export function Content() {
  return (
    <div
      style={{
        backgroundColor: '#150B2E',
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        // minHeight: '200vh',
        position: 'relative',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container fluid ml={90} mr={69} py={100}>
        <div>
          <Grid className="space-y-24" align="center" gutter={50}>
            {/* 1st Row */}
            <Grid.Col className="text-left" xs={12} sm={6}>
              <Image src="/images/pages/about/fun.png" alt="fun" className="block" />
            </Grid.Col>
            <Grid.Col className="relative" xs={12} sm={6}>
              <div className="text-right md:text-left">
                <Title className="uppercase text-[#ffffff] font-[700] text-[48px] leading-[51px] tracking-[0.0125em]">
                  <span className="text-[#50A1FF]">
                    Where gaming creators <br />
                    meet
                  </span>{' '}
                  lifelong gamers
                </Title>
                <Text maw={619} mt={20} className="text-[#ffffff] font-[400] text-[20px] leading-[38px]">
                  To see what kind of winnings are in store for you on the games, Pasa{' '}
                  {/* <br /> */}
                  invites all our online and mobile players to launch into playing this slot{' '}
                  {/* <br /> */}
                  sensation the moment <span className="font-[700]">you’ve logged into your unique real money</span>{' '}
                  {/* <br /> */}
                  account. You never know, one spin is all it takes to potentially change{' '}
                  {/* <br /> */}
                  your life forever!{' '}
                </Text>
              </div>
            </Grid.Col>

            {/* 2nd Row */}
            <Grid.Col className="relative" xs={12} sm={6}>
              {/* <div className="absolute top-1/2 -translate-y-1/2 md:pr-32"> */}
              <Title className="uppercase text-[#ffffff] font-[700] text-[48px] leading-[51px] tracking-[0.0125em]">
                And, whether you're doing
                <br /> your{' '}
                <span className="text-[#50A1FF]">
                  Pasa Casino online
                  <br /> gaming
                </span>
              </Title>
              <Text maw={619} mt={20} className="text-[#ffffff] font-[400] text-[20px] leading-[38px]">
                Via your browser, laptop, PC, smartphone, or tablet, we promise one of{' '}
                {/* <br /> */}
                the most diverse <span className="font-[700]">selections of slot games, blackjack</span> and roulette{' '}
                {/* <br /> */}
                variations, and more to make your experience with us unforgettable.{' '}
              </Text>
              {/* </div> */}
            </Grid.Col>
            <Grid.Col className="text-right" xs={12} sm={6}>
              <Image src="/images/pages/about/casino.png" alt="casino" />
            </Grid.Col>

            {/* 3rd Row */}
            <Grid.Col className="text-left" xs={12} sm={6}>
              <Image src="/images/pages/about/gamingCreator.png" alt="gaming Creator" />
            </Grid.Col>
            <Grid.Col className="relative" xs={12} sm={6}>
              <div className="text-center sm:text-left">
                <Title className="uppercase text-[#ffffff] font-[700] text-[48px] leading-[51px] tracking-[0.0125em]">
                  <span className="text-[#50A1FF]">We make gaming easy,</span> fun,
                  <br /> and accessible to
                  <br /> everyone
                </Title>
                <Text maw={619} mt={20} className="text-[#ffffff] font-[400] text-[20px] leading-[38px]">
                  We've removed the stress of finding, downloading, and registering for{' '}
                  {/* <br /> */}
                  games by doing it for you. All with one click. It's a simple, innovative{' '}
                  {/* <br /> */}
                  way to <span className="font-[700]">bring the joy of gaming to everyone,</span> anywhere, anytime.{' '}
                </Text>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
      {/* <div className="absolute left-0 bottom-0">
        <Image src="/images/pages/about/leftEllipse.png" alt="leftEllips" height={180} width={100} />
      </div> */}
    </div>
  );
}
