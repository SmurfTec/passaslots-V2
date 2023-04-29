import { Button, Container, Grid, Group, Image as MImage, Modal, ScrollArea, Stack, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import Image from 'next/image';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export const useSignUpModal = (): [JSX.Element, () => void] => {
  const [bonusValues] = useLocalStorage<{ name: string; email: string }>({
    key: 'bonus',
  });
  const [message, setMessage] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      phone: undefined,
    },
  });
  const handleClose = () => {
    const { email, name } = bonusValues;
    if (!message) {
      fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, phone: null }),
        headers: { 'Content-Type': 'application/json' },
      });
    }
    close();
  };
  const handleSubmit = ({ phone }: { phone: number | undefined }) => {
    const { email, name } = bonusValues;
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, phone }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        setMessage(true);
      })
      .catch((e) => {
        setMessage(false);
      });
  };
  const modal = (
    <Modal
      withinPortal
      keepMounted={false}
      scrollAreaComponent={ScrollArea.Autosize}
      styles={{
        content: {
          backgroundColor: '#F2F2F2',
        },
        header: {
          backgroundColor: '#F2F2F2',
        },
        close: {
          position: 'absolute',
          top: 30,
          right: 30,
          borderRadius: '20px',
          color: 'black',
          backgroundColor: 'white',
        },
      }}
      opened={opened}
      closeButtonProps={{ size: 'lg' }}
      onClose={handleClose}
      size={900}
      radius={3}
    >
      <Container size={800}>
        <div className="text-center">
          <Image className="my-4" alt="logo" src={'/images/modal/headerlogo.png'} height={80} width={110} />
        </div>
        <Grid align="top">
          <Grid.Col md={9}>
            <Stack align="flex-start" my={20}>
              <Title order={2} size={'33px'} color="black" className=" font-bold uppercase">
                SHIVER ME TIMBERS! Don't Miss out on the VIP offers.
              </Title>
              <Text size="md" color="#6D7D8E">
                Sign up for VIP SMS updates to be the first one to know about our new games,
                <br /> SMS exclusive bonuses, and other FIRE IN THE HOLE news.
              </Text>
              <Text size="sm" className="font-normal" color="#0F0F0F">
                Don't worry, we take your data seriously and promise to never spam and keep it safe like our very own
                treasure chest.
              </Text>
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <PhoneInput
                  style={{ width: '100%' }}
                  defaultCountry="US"
                  placeholder="Phone Number"
                  {...form.getInputProps('phone')}
                />
                <Text size={'10px'} opacity={0.5} maw={'32rem'} className="font-normal" mt={10} color="#0F0F0F">
                  By entering your phone number and submitting this form, you consent to receive marketing text messages
                  (such as promotion codes and account reminders) from pasa® US at the number provided, including
                  messages sent by the autodialer. Consent is not a condition of any purchase. Message and data rates
                  may apply. Message frequency varies. You can unsubscribe at any time by replying STOP to one of our
                  messages. View our Privacy Policy and Terms of Service.
                </Text>

                <Button
                  styles={{ label: { fontSize: '12px' } }}
                  radius={0}
                  mt={40}
                  mb={10}
                  px={40}
                  type="submit"
                  className="text-base font-[400]"
                  size="lg"
                  bg={'#751F86'}
                >
                  SIGN UP FOR SMS UPDATES NOW
                </Button>
                {message && (
                  <Text color="green" size={14}>
                    ✅ Successfully saved email
                  </Text>
                )}
                
              </form>
              <Group>
                <Text size={'sm'} component={NextLink} href="/terms-and-conditions" color="dark">
                  Terms and Conditions
                </Text>
                <Text size={'sm'} component={NextLink} href="/privacy-policy" color="dark">
                  Privacy Policy
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col md={3}>
            <MImage className="md:mt-44" src="/images/modal/signupPirate.png" alt="pirate" />
          </Grid.Col>
        </Grid>
      </Container>
    </Modal>
  );
  return [modal, open];
};
