import { Container, Grid, List, Text, Title, BackgroundImage } from '@mantine/core';
import { ContactForm } from '@pasa/components';
import { useMediaQuery } from '@mantine/hooks';

export function DistributionContent() {
  const matches = useMediaQuery('(max-width: 810px)', true);

  return (
    <div style={{background: '#150B2E'}}>
      <BackgroundImage style={{backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}} bgsz='auto' src="/images/pages/distribution/dices.png">
        <Container pt={matches ? 50 : 100} pb={50} fluid ml={matches ? 5 : 90} mr={matches ? 5 : 69}>
          <Grid align="center">
            <Grid.Col sm={12}>
              <Title color='white' className="font-[700] uppercase md:!leading-[51px] xs:!leading-[30px] sm:!leading-[30px] tracking-[0.0125em] xs:!text-[24px] sm:!text-[24px] md:!text-[48px]">
                Take Charge and <span className="text-[#50A1FF]">Own Your</span> Success
              </Title>
            </Grid.Col>
          </Grid>

          <Grid pt={matches ? 20: 50} grow gutterSm={100}>
            <Grid.Col sm={6} pt={20}>
              <Text maw={575} color="#FFFFFF" className="font-[400] md:!leading-[38px] sm:!leading-[25px] xs:!leading-[25px] tracking-[0.005em] xs:!text-[15px] sm:!text-[15px] md:!text-[20px]" opacity={0.8}>
                Transform yourself, embrace responsibility, and drive Your{' '} 
                Success forward. PASA builds gaming technology that powers{' '}
                successful partnerships with individuals like you across the{' '}
                industry. PASA's gaming software is the industry's most flexible{' '}
                gaming platform for building, managing, and growing your{' '}
                customers' networks to take your additional revenue stream for{' '}
                your <span className="font-[700]">business to the NEXT LEVEL.</span>{' '}
              </Text>
            </Grid.Col>
            <Grid.Col sm={6} pt={20}>
              <List styles={{
                item: {
                  'color': 'white',
                  // 'background': 'white'
                }
              }}>
                <List.Item>
                  <Text maw={566} color='#FFFFFF' className='font-[400] md:!leading-[38px] sm:!leading-[25px] xs:!leading-[25px] tracking-[0.0125em] xs:!text-[15px] sm:!text-[15px] md:!text-[20px]' opacity={0.8}>
                    Maximize ROI from onboarding through payout with your most{' '}
                    <span className="font-[700]">
                      important partners—networks, groups, and other business{' '}
                      development relationships
                    </span>.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text maw={566} color='#FFFFFF' className='font-[400] md:!leading-[38px] sm:!leading-[25px] xs:!leading-[25px] tracking-[0.0125em] xs:!text-[15px] sm:!text-[15px] md:!text-[20px]' opacity={0.8}>
                    Stay at the forefront of an ever-evolving industry.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text maw={566} color='#FFFFFF' className='font-[400] md:!leading-[38px] sm:!leading-[25px] xs:!leading-[25px] tracking-[0.0125em] xs:!text-[15px] sm:!text-[15px] md:!text-[20px]' opacity={0.8}>
                    Access real-time reporting and data streaming to help you make{' '}
                    better-<span className="font-[700]">informed decisions</span>.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text maw={566} color='#FFFFFF' className='font-[400] md:!leading-[38px] sm:!leading-[25px] xs:!leading-[25px] tracking-[0.0125em] xs:!text-[15px] sm:!text-[15px] md:!text-[20px]' opacity={0.8}>
                    <span className="font-[700]">Terms and conditions apply:</span> Please do review our Disclaimers{' '}
                    for Distribution for additional Terms and Conditions.
                  </Text>
                </List.Item>
              </List>
            </Grid.Col>
          </Grid>
          <Grid pt={matches ? 20 : 50} align='center'>
            <Grid.Col sm={12}>
              <Text maw={1185} color='#FFB800' mb={matches ? 10 : 30} className='font-[400] leading-[25px] text-[13px]'>
                Please fill out the form below with your valid information and best understanding of the inquiry in the
                "message" section. We do our best to respond within one business day. Thank you for contacting us, and{' '} we
                are looking forward to doing business with you in the future.
              </Text>
              <ContactForm />
              <Text maw={1100} color='#FFFFFF' opacity={0.8} mt={matches ? 10 : 30} className='font-[400] leading-[23px] tracking-[0.0125em] text-[12px]'>
                Disclaimer: Hey there, just a heads up that we can't help with forgotten passwords, 
                player accounts, or cashing out. We have distributors all over the world, but we don't 
                screen or monitor all of them. So, if you have any{' '} payment disputes, you'll need to sort 
                those out with your distributor. Unfortunately, we can't help with any disputes between 
                players and stores. Thanks for understanding!
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </BackgroundImage>
    </div>
  );
}
