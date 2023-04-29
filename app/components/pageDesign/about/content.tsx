
import { Container, Grid, Text, Title,Image } from '@mantine/core';


export function Content() {
  return (
    <div className="relative">
      <Container size={1300} py={100}>
        <div>
          <Grid className="space-y-24" align='center' gutter={50}>
            {/* 1st Row */}
            <Grid.Col className="relative" xs={12} sm={6}>
              <div className="text-right md:text-left">
                <Title color="#0F0F0F" order={2} className="uppercase">
                  Where gaming creators meet <span className="text-[#C1C1C1]">lifelong gamers</span>
                </Title>
                <Text mt={20} color="#0F0F0F" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm">
                  At Pasa, we're used to being in the spotlight. That's because we offer you exactly what all online
                  casinos should: every kind of game imaginable, a safe and
                  <span className="font-[700]"> secure environment to play in,</span> and quick top-up solutions to fund
                  your account.
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col className="text-right" xs={12} sm={6}>
              <Image src="/images/pages/about/gamingCreator.png" alt='gaming creator' className='block' />
            </Grid.Col>

            {/* 2nd Row */}
            <Grid.Col className="text-left" xs={12} sm={6}>
              <Image src="/images/pages/about/casino.png" alt="casino" />
            </Grid.Col>
            <Grid.Col className="relative" xs={12} sm={6}>
              {/* <div className="absolute top-1/2 -translate-y-1/2 md:pr-32"> */}
                <Title color="#0F0F0F" order={2} className="uppercase">
                  And, whether you're doing your Pasa Casino online gaming
                </Title>
                <Text mt={20} color="#0F0F0F" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm">
                  via your browser, laptop, PC, smartphone, or tablet, we promise one of the most diverse{' '}
                  <span className="font-[700]">selections of slot games, blackjack</span> and roulette variations, and
                  more to make your experience with us unforgettable.
                </Text>
              {/* </div> */}
            </Grid.Col>

            {/* 3rd Row */}
            <Grid.Col className="relative" order={6} orderSm={5} xs={12} sm={6}>
              <div className="text-center sm:text-left">
                <Title color="#0F0F0F" order={2} className="uppercase">
                  We make gaming easy, fun, and accessible to <span className="text-[#C1C1C1]">everyone</span>
                </Title>
                <Text mt={20} color="#0F0F0F" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm">
                  We've removed the stress of finding, downloading, and registering for games by doing it for you. All
                  with one click. It's a simple, innovative way to{' '}
                  <span className="font-[700]">bring the joy of gaming to everyone,</span> anywhere, anytime.
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col className="text-right" order={5} orderSm={6} xs={12} sm={6}>
              <Image src="/images/pages/about/fun.png" alt="fun" />
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
