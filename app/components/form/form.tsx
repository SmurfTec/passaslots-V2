import { Button, Checkbox, Group, Text, TextInput, Textarea, createStyles, Grid, Anchor } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import GoogleReCaptcha from '../reCaptcha/GoogleReCaptcha';

type ContactForm = {
  firstName: string;
  message: string;
  subject: string;
  lastName: string;
  phone: string;
  email: string;
  check: boolean;
};

export function ContactForm() {
  const router = useRouter();
  const { classes } = useStyles();
  const [message, setMessage] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const matches = useMediaQuery('(max-width: 810px)', true);
  const matches2 = useMediaQuery('(max-width: 991px)', true);
  const form = useForm({
    initialValues: {
      firstName: '',
      message: '',
      subject: '',
      lastName: '',
      phone: '',
      purpose: '',
      email: '',
      check: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = ({ firstName, message, subject, lastName, phone, email, check }: ContactForm) => {
    console.log(check);
    const purpose = router.pathname === '/contact' || router.pathname === '/about' ? 'message' : 'signup';
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ firstName, message, subject, lastName, phone, purpose, email }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        setMessage(true);
        if (check) {
          fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-Type': 'application/json' },
          });
        }
      })
      .catch((e) => {
        setMessage(false);
        console.log(e);
      });
  };
  const handleRecaptchaChange = (token: any) => {
    setAllowSubmit(!allowSubmit);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className="space-y-6">
        <Grid px={0}>
          <Grid.Col pl={0} pr={matches2 ? 0 : 8} md={6} className="space-y-[18px] space-x-37">
            <TextInput
              classNames={{ input: classes.input }}
              color="#F2F2F2"
              size={'xl'}
              placeholder="First Name"
              required
              style={{ backgroundColor: '#D9D9D934', borderRadius: '15px' }}
              {...form.getInputProps('firstName')}
            />
            <TextInput
              classNames={{ input: classes.input }}
              color="#F2F2F2"
              size="xl"
              placeholder="Email Address"
              required
              style={{ backgroundColor: '#D9D9D934', borderRadius: '15px' }}
              {...form.getInputProps('email')}
            />
            <TextInput
              classNames={{ input: classes.input }}
              color="#F2F2F2"
              size="xl"
              placeholder="Subject"
              required
              style={{ backgroundColor: '#D9D9D934', borderRadius: '15px' }}
              {...form.getInputProps('subject')}
            />
          </Grid.Col>
          <Grid.Col pr={0} pl={matches2 ? 0 : 8} md={6} className="space-y-[18px] space-x-37">
            <TextInput
              classNames={{ input: classes.input }}
              color="#F2F2F2"
              size="xl"
              placeholder="Last Name"
              required
              style={{ backgroundColor: '#D9D9D934', borderRadius: '15px' }}
              {...form.getInputProps('lastName')}
            />
            <TextInput
              classNames={{ input: classes.input }}
              color="#F2F2F2"
              size="xl"
              placeholder="Phone Number"
              required
              style={{ backgroundColor: '#D9D9D934', borderRadius: '15px' }}
              {...form.getInputProps('phone')}
            />
          </Grid.Col>
        </Grid>
        <Textarea
          classNames={{ input: classes.input }}
          color="#F2F2F2"
          size={matches ? '180px' : '220px'}
          placeholder="Message"
          required
          style={{
            backgroundColor: '#D9D9D934',
            borderRadius: '15px',
            margin: 'auto',
            // width: matches ? '95%' : '99%',
            marginTop: '10px',
          }}
          {...form.getInputProps('message')}
        />
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
          label={`I agree to receive special offers by email.`}
          {...form.getInputProps('check')}
        />
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
        <GoogleReCaptcha handleRecaptchaChange={handleRecaptchaChange} />
        <Group>
          <Button
            type="submit"
            radius={50}
            className="h-12 text-[20px] font-[400] w-[45%] lg:w-[auto] md:w-[45%] sm:w-[45%] xs:w-[80%]"
            styles={{
              root: {
                background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                padding: '15px 53px',
                // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
                '&:hover': {
                  background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
                },
                fontStyle: 'normal',
                lineHeight: '23px',
                letterSpacing: '-0.015em',
              },
              label: {
                marginBottom: '-2px',
              },
            }}
            disabled={!allowSubmit}
          >
            {allowSubmit ? 'SUBMIT' : 'Verify Captcha'}
          </Button>
        </Group>
        {message && (
          <Text color="green" size={15}>
            ✅ Successfully sent
          </Text>
        )}
      </div>
    </form>
  );
}

const useStyles = createStyles((theme) => ({
  input: {
    border: '2px solid #016BE6',
    borderRadius: '16px',
    lineHeight: '188.69%',
    letterSpacing: '0.005em',
    paddingLeft: '15px',
    [theme.fn.smallerThan(810)]: {
      fontSize: '15px',
      height: '45px',
    },
    [theme.fn.largerThan(809)]: {
      fontSize: '20px',
      height: '70px',
    },
    fontStyle: 'normal',
    ':focus': {
      border: '2px solid #016BE6',
    },
    '::placeholder': {
      // paddingLeft: '15px',
      fontSize: '20px',
      color: '#FFFFFF',
      fontStyle: 'normal',
    },
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
