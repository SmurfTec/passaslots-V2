import { Button, Container, Grid, Image, Text, Title } from '@mantine/core';
import { ContactForm } from '@pasa/components/form';
import { useBonusModal } from '@pasa/hooks';

export function AboutContact() {
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <div>
      <Container size={1300} pt={100}>
        <Grid>
          <Grid.Col sm={6}>
            <Title order={3} className="font-[700]">
              INTERESTED IN <br /> GETTING STARTED
            </Title>
          </Grid.Col>
          <Grid.Col className="text-left mt-10 sm:mt-0 sm:text-right " sm={6} p={0}>
            <Button onClick={bonusOpen} className="h-12 px-12 rounded-md text-[14px] font-[300]">
              SIGN UP NOW
            </Button>
          </Grid.Col>
          {BonusModal}
          <Grid.Col mt={100} span={12}>
            <Title order={3} className="font-[700] text-center sm:text-left">
              GET IN{' '}
              <span className="text-[#C1C1C1]">
                TOUCH <br /> WITH US
              </span>
            </Title>
          </Grid.Col>
        </Grid>
        <Grid align="center">
          <Grid.Col sm={6} className="text-center sm:text-left mt-10 sm:mt-0">
            <Image src="/images/pages/about/pirate.png" alt="pirate" />
          </Grid.Col>
          <Grid.Col sm={6} my={30}>
            <Text my={40} color="#0F0F0F" className="font-[400] tracking-[0.005em]" opacity={0.8} size="sm">
              If you have any questions or need help, please fill out the form <br /> below. We do our best to respond
              within 1 business day.
            </Text>

            <ContactForm />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
