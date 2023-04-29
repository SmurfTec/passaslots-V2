import { Container, Grid, List, Text, Title,Image } from '@mantine/core';
import { ContactForm } from '@pasa/components';

export function DistributionContent() {
  return (
    <Container pt={100} pb={50} size={1300}>
      <Grid align="center">
        <Grid.Col sm={6}>
          <Title order={3} className="font-[700] uppercase">
            Take Charge and <br /> <span className="text-[#751F86]">Own Your</span> <br /> Success
          </Title>
          <Image src="/images/pages/distribution/pirate.png" alt="pirate" height={300} width={350} />
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text mt={20} color="#0F0F0F" className="font-[400] tracking-[0.005em]" size="md">
            Transform yourself, embrace responsibility, and drive Your Success forward. PASA builds gaming technology
            that powers successful partnerships with individuals like you across the industry. PASA's gaming software is
            the industry's most flexible gaming platform for building, managing, and growing your customers' networks to
            take your additional revenue stream for your <span className="font-[700]">business to the NEXT LEVEL.</span>
          </Text>
        </Grid.Col>
      </Grid>

      <Grid align='center' grow gutterSm={100}>
        <Grid.Col sm={6} pt={80}>
          <List>
            <List.Item>
              Maximize ROI from onboarding through payout with your most{' '}
              <span className="font-[700]">
                important partners—networks, groups, and other business development relationships.
              </span>
            </List.Item>
            <List.Item>Stay at the forefront of an ever-evolving industry.</List.Item>
            <List.Item>To start development server run npm start command</List.Item>
            <List.Item>
              Access real-time reporting and data streaming to help you make better-
              <span className="font-[700]">informed decisions.</span>
            </List.Item>
            <List.Item>
              <span className="font-[700]">Terms and conditions apply:</span> Please do review our Disclaimers for
              Distribution for additional Terms and Conditions.
            </List.Item>
          </List>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text mb={30} size="xs">
            Please fill out the form below with your valid information and best understanding of the inquiry in the
            "message" section. <br /> We do our best to respond within one business day. Thank you for contacting us, and we
            are looking forward to doing <br /> business with you in the future.
          </Text>
          <ContactForm />
          <Text mt={30} opacity={0.5} size="xs">
          Disclaimer: Hey there, just a heads up that we can't help with forgotten passwords, player accounts, or cashing out. We have distributors all over the world, but we don't screen or monitor all of them. So, if you have any payment disputes, you'll need to sort those out with your distributor. Unfortunately, we can't help with any disputes between players and stores. Thanks for understanding!

          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
