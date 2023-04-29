import { ActionIcon, BackgroundImage, Container, Grid, Image, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { ArrowRight } from 'tabler-icons-react';

export function NewsletterBlog() {
  const [message, setMessage] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const matches = useMediaQuery('(max-width: 570px)');

  const handleSubmit = ({ email }: { email: string }) => {
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        setMessage(true);
      })
      .catch((e) => {
        setMessage(false);
        console.log(e);
      });
  };
  return (
    <BackgroundImage className="relative text-center" src="/images/pages/blogs/newsletterBackground.png">
      <Container size={1300} py={100}>
        <Grid>
          <Grid.Col sm={6}>
            <Title color="white" className="uppercase" order={2}>
              Add some luck <br /> to your inbox
            </Title>
          </Grid.Col>

          <Grid.Col sm={6}></Grid.Col>

          <Grid.Col sm={6}></Grid.Col>
          <Grid.Col sm={4}>
            <Text mt={20} color="white" className="font-[300] tracking-[0.005em]" size="sm">
              Join our email newsletter "The High Roller Herald" to be the first to know about new things happening at
              Pasa, from new games, winning tips, and oh, did we mention the occasional gift?
            </Text>

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                mt={40}
                // maw={'60%'}
                p={10}
                styles={{ input: { padding: '20px', fontSize: '12px', fontWeight: 'bold' } }}
                radius="xl"
                size="lg"
                rightSection={
                  <ActionIcon type='submit' size={42} bg="#BA6833" mr={10} radius="xl" variant="filled">
                    <ArrowRight size="1.1rem" />
                  </ActionIcon>
                }
                placeholder="Email Address"
                rightSectionWidth={42}
                {...form.getInputProps('email')}
              />
              {message && (
                <Text color="green" size={14}>
                  ✅ Successfully saved email
                </Text>
              )}
            </form>
          </Grid.Col>
          <Grid.Col sm={2}></Grid.Col>
        </Grid>
      </Container>
      {matches ? undefined : (
        <>
          <div className="absolute right-0 top-1/4">
            <Image src="/images/pages/about/rightEllipse.png" alt="rightEllips" height={180} width={103} />
          </div>
          <div className="absolute left-0 bottom-10">
            <Image src="/images/pages/about/leftEllipse.png" alt="leftEllipse" height={180} width={95} />
          </div>
        </>
      )}
    </BackgroundImage>
  );
}
