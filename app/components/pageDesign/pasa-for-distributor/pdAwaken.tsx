import { Button, Container, Grid, Image, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';

export function PDAwaken() {
  return (
    <Container size={1300} pt={100}>
      <Grid>
        <Grid.Col xs={6}>
          <Title order={3} className="font-[700] uppercase">
            Awaken the
            <br /> <span style={{ color: '#C1C1C1' }}>balance </span>
          </Title>

          <Image src="/images/pages/pasa-for-distributor/pirate2.png" alt="pirate" height={300} width={300} />
        </Grid.Col>
        <Grid.Col xs={6}>
          <div className="relative h-full">
            <Text my={20} color="#0F0F0F" className="font-[400] tracking-[0.005em]" size="sm">
              Starting a home-based business also offers you the freedom to create a work-life balance that{' '}
              <span className="font-[700]">works for you and your family</span>. Whether you're a stay-at-home parent or
              just looking for a change, a home-based business allows you to turn your passions into a high-income
              career.
            </Text>

            <Button
              component={NextLink}
              href="/distributor-signup"
              bg="#6498B4"
              type="submit"
              className="h-12 px-12 rounded-sm text-[14px] font-[400] sm:absolute sm:bottom-20"
            >
              Contact Us
            </Button>
          </div>
        </Grid.Col>
      </Grid>

      <Image my={100} src="/images/pages/pasa-for-distributor/awaken.png" alt="casino" />

      <Grid m={0} align='center' gutterSm={50}>
        <Grid.Col className="text-left" xs={12} sm={6}>
          <Image src="/images/pages/pasa-for-distributor/pasaSlot.png" alt="casino"  />
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <div className="">
            <Title color="#0F0F0F" order={2} className="uppercase mt-12 sm:mt-0">
              Power of <br /> <span className="text-[#C1C1C1]">Technology</span>
            </Title>
            <Text mt={20} color="#0F0F0F" className="font-[300] tracking-[0.005em]" opacity={0.8} size="sm">
              With the rise of technology and the growing gig economy, there's never been a better time to start your
              own home-based business. The opportunities are endless, and the{' '}
              <span className="font-[700]">success is yours for the taking</span>. Say goodbye to the daily commute and
              say hello to the comfort and flexibility of working from your own home. You'll be in control of your
              schedule. So why wait? Unleash your entrepreneurial spirit and{' '}
              <span className="font-[700]">start your home-based business today!</span>
            </Text>
            <Button
             mt={50}
              component={NextLink}
              href="/distributor-signup"
              bg="#6498B4"
              type="submit"
              className="h-12 px-12 rounded-sm text-[14px] font-[400]"
            >
              Contact Us
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
