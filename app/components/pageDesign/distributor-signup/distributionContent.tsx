import { Container, Grid, List, Text, Title, BackgroundImage } from '@mantine/core';
import { ContactForm } from '@pasa/components';

export function DistributionContent() {
  return (
    <div style={{background: '#150B2E'}}>
      <BackgroundImage style={{backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}} bgsz='auto' src="/images/pages/distribution/dices.png">
        <Container pt={100} pb={50} fluid ml={90} mr={69}>
          <Grid align="center">
            <Grid.Col sm={12}>
              <Title color='white' className="font-[700] uppercase leading-[51px] tracking-[0.0125em] text-[48px]">
                Take Charge and <span className="text-[#50A1FF]">Own Your</span> Success
              </Title>
            </Grid.Col>
          </Grid>

          <Grid pt={100} align='center' grow gutterSm={100}>
            <Grid.Col sm={6} pt={80}>
              <Text color="#FFFFFF" className="font-[400] leading-[38px] tracking-[0.005em] text-[20px]" opacity={0.8}>
                Transform yourself, embrace responsibility, and drive Your<br/> 
                Success forward. PASA builds gaming technology that powers<br/> 
                successful partnerships with individuals like you across the<br/> 
                industry. PASA's gaming software is the industry's most flexible<br/> 
                gaming platform for building, managing, and growing your<br/> 
                customers' networks to take your additional revenue stream for<br/> 
                your <span className="font-[700]">business to the NEXT LEVEL.</span>
              </Text>
            </Grid.Col>
            <Grid.Col sm={6} pt={80}>
              <List styles={{
                item: {
                  'color': 'white',
                  // 'background': 'white'
                }
              }}>
                <List.Item>
                  <Text color='#FFFFFF' className='font-[400] leading-[38px] tracking-[0.0125em] text-[20px]' opacity={0.8}>
                    Maximize ROI from onboarding through payout with your most{' '}<br/>
                    <span className="font-[700]">
                      important partners—networks, groups, and other business<br/> 
                      development relationships
                    </span>.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text color='#FFFFFF' className='font-[400] leading-[38px] tracking-[0.0125em] text-[20px]' opacity={0.8}>
                    Stay at the forefront of an ever-evolving industry.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text color='#FFFFFF' className='font-[400] leading-[38px] tracking-[0.0125em] text-[20px]' opacity={0.8}>
                    Access real-time reporting and data streaming to help you make<br/> 
                    better-<span className="font-[700]">informed decisions</span>.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text color='#FFFFFF' className='font-[400] leading-[38px] tracking-[0.0125em] text-[20px]' opacity={0.8}>
                    <span className="font-[700]">Terms and conditions apply:</span> Please do review our Disclaimers<br/> 
                    for Distribution for additional Terms and Conditions.
                  </Text>
                </List.Item>
              </List>
            </Grid.Col>
          </Grid>
          <Grid pt={100} align='center'>
            <Grid.Col sm={12}>
              <Text color='#FFB800' mb={30} className='font-[400] leading-[25px] text-[13px]'>
                Please fill out the form below with your valid information and best understanding of the inquiry in the
                "message" section. We do our best to respond within one business day. Thank you for contacting us, and<br/> we
                are looking forward to doing business with you in the future.
              </Text>
              <ContactForm />
              <Text color='#FFFFFF' opacity={0.8} mt={30} className='font-[400] leading-[23px] tracking-[0.0125em] text-[12px]'>
                Disclaimer: Hey there, just a heads up that we can't help with forgotten passwords, 
                player accounts, or cashing out. We have distributors all over the world, but we don't 
                screen or monitor all of them. So, if you have any<br/> payment disputes, you'll need to sort 
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
