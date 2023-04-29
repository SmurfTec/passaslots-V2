import { Container, Grid, Text, Title,Image } from '@mantine/core';
import { ContactForm } from '@pasa/components/form';

export function ContactLayout() {
  return (
    <Container size={1300}>
      <Grid align="center" >
        <Grid.Col mt={200} span={12}>
          <Title order={3} className="font-[700] uppercase">
            Lets talk{' '}
            <span className="text-[#751F86]">
              We're here
            </span>
          </Title>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Image src="/images/pages/contact/pirate.png" alt="pirate" height={350} width={350} />
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text my={20} color="#0F0F0F" className="font-[700] tracking-[0.005em]"  size="sm">
            Our door is always open for a good cup of coffee.
          </Text>
          

          <Text my={20} color="#0F0F0F" className="font-[400] tracking-[0.005em]"  size="sm">
            Pasa Slots invites you to contact us directly if you have any issues, queries or questions, we are here to
            help so get in touch if you have anything you need or even just to say Hi! Please fill out the form below.
            We do our best to respond within 1 business day.
          </Text>

          <ContactForm />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
