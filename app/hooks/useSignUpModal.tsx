import { Button, Container, Grid, Group, Image as MImage, Modal, ScrollArea, Stack, Text, Title, createStyles, Checkbox, Anchor } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import Image from 'next/image';
import { useState } from 'react';
import { useThankModal } from './useThankModal';
import { useMediaQuery } from '@mantine/hooks';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export const useSignUpModal = (): [JSX.Element, () => void] => {
  const matches = useMediaQuery('(max-width: 810px)', true);
  const [bonusValues] = useLocalStorage<{ name: string; email: string }>({
    key: 'bonus',
  });
  const [thankYouModal, thankYouOpen] = useThankModal();
  const [message, setMessage] = useState(false);
  const { classes } = useStyles();
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
        thankYouOpen();
        close();
      })
      .catch((e) => {
        setMessage(false);
      });
  };
  const modal = (
    <>
      <Modal
        withinPortal
        keepMounted={false}
        scrollAreaComponent={ScrollArea.Autosize}
        styles={{
          content: {
            backgroundColor: '#01152D',
          },
          header: {
            backgroundColor: '#01152D',
          },
          close: {
            position: 'absolute',
            top: 30,
            right: 30,
            borderRadius: '20px',
            color: '#016BE6',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        }}
        opened={opened}
        closeButtonProps={{ size: 'lg' }}
        onClose={handleClose}
        size={1000}
        radius={10}
      >
        <Container size={1000}>
          <div className="text-center">
            <Image className="my-4" alt="logo" src={'/images/modal/headerlogo.png'} height={80} width={110} />
          </div>
          <Grid align="top">
            <Grid.Col md={9}>
              <Stack align="flex-start" my={20}>
                <Title order={2} size={'33px'} color="white" className="font-bold uppercase">
                  SHIVER ME TIMBERS! Don't Miss out on the VIP offers.
                </Title>
                <Text size="md" color="#6D7D8E">
                  Sign up for VIP SMS updates to be the first one to know about our new games,
                  <br /> SMS exclusive bonuses, and other FIRE IN THE HOLE news.
                </Text>
                <Text size="sm" className="font-normal" color="#FFFFFF">
                  Don't worry, we take your data seriously and promise to never spam and keep it safe like our very own
                  treasure chest.
                </Text>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <PhoneInput
                    style={{ 
                      borderRadius: 10,
                      border: '1px solid #016BE6 !important',
                      width: '100%', 
                      color:'white', 
                      backgroundColor: 'transparent', 
                      '::placeholder': {
                        color: 'white',
                      },
                    }}
                    inputStyle={{ color: 'white' }}
                    inputClassName={classes}
                    className={classes.phoneinput}
                    defaultCountry="US"
                    placeholder="Phone Number"
                    {...form.getInputProps('phone')}
                  />
                  <Text size={'10px'} opacity={0.5} maw={'32rem'} className="font-normal" mt={10} color="#FFFFFF">
                    By entering your phone number and submitting this form, you consent to receive marketing text messages
                    (such as promotion codes and account reminders) from pasa® US at the number provided, including
                    messages sent by the autodialer. Consent is not a condition of any purchase. Message and data rates
                    may apply. Message frequency varies. You can unsubscribe at any time by replying STOP to one of our
                    messages. View our Privacy Policy and Terms of Service.
                  </Text>

                  <Button
                    styles={{ label: { fontSize: '12px' }, root: { '&:hover': { background: 'linear-gradient(to bottom, #2072D2, #A74C9A)' } } }}
                    radius={50}
                    mt={40}
                    mb={10}
                    px={40}
                    type="submit"
                    className="text-base font-[400]"
                    size="lg"
                    color={'white'}
                    bg={'#016BE6'}
                  >
                    SIGN UP FOR SMS UPDATES NOW
                  </Button>
                  {message && (
                    <Text color="green" size={14}>
                      ✅ Thankyou for subscribing
                    </Text>
                  )}
                  
                </form>
                
                <Group>
                  <Checkbox
                    color="blue"
                    classNames={{ label: classes.Checkbox }}
                    styles={{
                      root: {
                        // width: matches ? '95%' : '99%',
                        margin: 'auto',
                      },
                      body: { display: 'flex', alignItems: 'center' },
                      label: { fontSize: matches ? '9px !important' : 'inherit' },
                    }}
                    label={<>I accept the <Anchor href="/terms-and-conditions" className='underline' color='white' target="_blank">Terms of Use</Anchor> Of <Anchor className='underline' href="privacy-policy" color='white' target="_blank">Privacy Policy</Anchor> and acknowledge that I have reached the age of 18.</>}
                    {...form.getInputProps('check')}
                  />
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col md={3}>
              <MImage className="md:mt-44 bottom" src="/images/modal/bonusthief.png" alt="pirate" />
            </Grid.Col>
          </Grid>
        </Container>
      </Modal>
      {thankYouModal}
    </>
  );
  return [modal, open];
};

const useStyles = createStyles((theme) => ({
  phoneinput: {
    color:'white',
  },
  Checkbox: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontSize: '16px',
    lineHeight: '188.7%',
    letterSpacing: '0.0125em',
  },
}));
