import { Button, Checkbox, Group, Text, TextInput, Textarea, createStyles, Grid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

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
  const matches = useMediaQuery('(max-width: 810px)', true);

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
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className="space-y-6">
        <Grid px={0}>
          <Grid.Col md={6} className="space-y-[18px] space-x-37">
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
          <Grid.Col md={6} className="space-y-[18px] space-x-37">
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
          size={matches ? '200px' : '255px'}
          placeholder="Message"
          required
          style={{
            backgroundColor: '#D9D9D934',
            borderRadius: '15px',
            margin: 'auto',
            width: '95%',
            marginTop: '10px',
          }}
          {...form.getInputProps('message')}
        />
        <Checkbox
          color="blue"
          classNames={{ label: classes.Checkbox }}
          styles={{
            root: { width: '95%', margin: 'auto' },
            body: { display: 'flex', alignItems: 'center' },
            label: { fontSize: matches ? '9px !important' : 'inherit' },
          }}
          label={`I'd like to recieve more information tik mark here as well similar to the contact us page to get confirmation for emails and sms. `}
          {...form.getInputProps('check')}
        />

        <Group>
          <Button
            type="submit"
            radius={50}
            className="h-12 px-12 text-[20px] font-[400] w-[45%] lg:w-[auto] md:w-[45%] sm:w-[45%] xs:w-[80%]"
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
          >
            SUBMIT
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
      height: '65px',
    },
    [theme.fn.largerThan(809)]: {
      fontSize: '20px',
      height: '105px',
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
