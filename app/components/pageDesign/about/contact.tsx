import { Button, Container, Grid, Image, Text, Title, BackgroundImage } from '@mantine/core';
import { ContactForm } from '@pasa/components/form';
import { useBonusModal } from '@pasa/hooks';

export function AboutContact() {
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <div
      style={{
        backgroundColor: '#150B2E',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <BackgroundImage
        style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}
        bgsz="auto"
        src="/images/pages/contact/querygiant.png"
      >
        <Container fluid mr={69} ml={90}>
          <Grid align="center">
            <Grid.Col md={4} mt={99} mb={78} span={12}>
              <Title order={2} className="font-[700] uppercase text-[#fff]">
                Get in{' '}
                <span className="text-[#50A1FF]">
                  touch
                  <br /> with us
                </span>
              </Title>
            </Grid.Col>
            <Grid.Col mt={99} mb={78} span={12} md={8}>
              <Text maw={705} className="align-text-top font-[400] text-white text-lg leading-[188.69%] tracking-[0.005em]">
                If you have any questions or need help, please fill out the form below. We do our best to{' '}
                respond within 1 business day.
              </Text>
            </Grid.Col>
            <Grid.Col mb={76} sm={12}>
              <ContactForm />
            </Grid.Col>
          </Grid>
        </Container>
        {/* <Image w={257} h={428} className='absolute center top-1/2' src="/images/pages/contact/querygiant.png" alt='' /> */}
      </BackgroundImage>
    </div>
  );
}
