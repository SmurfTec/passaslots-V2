import { Button, Checkbox, Group, Text, TextInput, Textarea, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import { useState } from 'react';

type ContactForm = {
  firstName: string;
  message: string;
  lastName: string;
  phone: string;
  email: string;
  check: boolean;
};

export function ContactForm() {
  const router = useRouter();
  const { classes } = useStyles();
  const [message, setMessage] = useState(false);
  const form = useForm({
    initialValues: {
      firstName: '',
      message: '',
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

  const handleSubmit = ({ firstName, message, lastName, phone, email, check }: ContactForm) => {
    console.log(check);
    const purpose = router.pathname === '/contact' || router.pathname === '/about' ? 'message' : 'signup';
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ firstName, message, lastName, phone, purpose, email }),
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
        <TextInput
          classNames={{ input: classes.input }}
          color="#F2F2F2"
          size="xl"
          placeholder="FIRST NAME"
          required
          {...form.getInputProps('firstName')}
        />
        <TextInput
          classNames={{ input: classes.input }}
          color="#F2F2F2"
          size="xl"
          placeholder="LAST NAME"
          required
          {...form.getInputProps('lastName')}
        />
        <TextInput
          classNames={{ input: classes.input }}
          color="#F2F2F2"
          size="xl"
          placeholder="EMAIL ADDRESS"
          required
          {...form.getInputProps('email')}
        />
        <TextInput
          classNames={{ input: classes.input }}
          color="#F2F2F2"
          size="xl"
          placeholder="PHONE NUMBER"
          required
          {...form.getInputProps('phone')}
        />
        <Textarea
          classNames={{ input: classes.input }}
          color="#F2F2F2"
          size="xl"
          placeholder="MESSAGE"
          required
          {...form.getInputProps('message')}
        />

        <Checkbox
          className="opacity-50"
          label="I'd like to receive more information about PASA; I understand and agree to the privacy policy. "
          {...form.getInputProps('check')}
        />

        <Group>
          <Button
            bg="#6498B4"
            type="submit"
            className="h-12 px-12 rounded-sm text-[14px] font-[400] w-[45%] lg:w-[auto]"
          >
            SUBMIT
          </Button>
          <Text size={12} className="font-[600] w-[50%]" color="#86888A">
            This site is protected by reCAPTCHA Enterprise andthe Google Privacy Policy and Terms of Service apply.
          </Text>
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

const useStyles = createStyles(() => ({
  input: {
    '::placeholder': {
      paddingLeft: '15px',
      fontSize: '14px',
      color: '#0F0F0F',
      opacity: 0.5,
      fontWeight: 'bold',
    },
  },
}));
