import { Container, Grid, Text, Title,Image } from '@mantine/core';
import { ContactForm } from '@pasa/components/form';

export function ContactLayout() {
  return (
    <div style={{backgroundColor: '#150B2E'}}>
    <Container fluid mr={69} ml={90}>
      <Grid align="center" >
        <Grid.Col md={4} mt={99} mb={78} span={12}>
          <Title order={2} className="font-[700] uppercase text-[#fff]">
            Get in{' '}
            <span className="text-[#50A1FF]">
              touch<br/> with us
            </span>
          </Title>
        </Grid.Col>
        <Grid.Col mt={99} mb={78} span={12} md={8}>
          <Text className='align-text-top font-[400] text-white text-lg leading-[188.69%] tracking-[0.005em]'>
          If you have any questions or need help, please fill out the form below. We do our best to<br/> respond within 1 business day.
          </Text>
        </Grid.Col>
        <Grid.Col mb={76} sm={12}>
          <ContactForm />
        </Grid.Col>
      </Grid>
    </Container>
    </div>
  );
}
