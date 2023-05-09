import {
  ActionIcon,
  BackgroundImage,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { ChevronRight } from 'tabler-icons-react';

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
    <div
      style={{
        backgroundColor: '#150B2E',
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundRepeat: 'no-repeat',
        // position: 'relative',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        // height: '1127px',
        position: 'relative',
        // width: '100%',
        // height: '100vh',
        zIndex: 150,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <BackgroundImage
        style={{
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
        className="relative opacity-21"
        src="/images/header/backgroundImage.png"
      >
        <Container fluid pl={90} pr={69} py={100}>
          <Grid justify="center" align="center">
            <Grid.Col sm={12}>
              <Grid justify="center" align="center">
                <Image
                  height="auto"
                  width="auto"
                  className="mx-auto my-auto"
                  src="/images/pages/blogs/addsomeluck.png"
                  alt="image"
                />
                <div className="flex flex-col mt-[85px]">
                  <Title
                    color="white"
                    className="uppercase font-[700] leading-[51px] text-center tracking-[0.0125em] text-[48px]"
                  >
                    Add some luck to your inbox
                  </Title>
                  <Text
                    mt={33}
                    color="white"
                    maw={900}
                    className=" font-[400] leading-[38px] text-center tracking-[0.005em] text-[20px]"
                  >
                    Join our email newsletter "The High Roller Herald" to be the first to know about new things{' '} 
                    {/* <br /> */}
                     happening at Pasa, from new games, winning tips, and oh, did we mention the occasional gift?
                  </Text>
                </div>
              </Grid>
              <Grid align="center" justify="center">
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <TextInput
                    className="font-[600] mx-auto leading-[16px] uppercase tracking-[0.0125em]"
                    mt={40}
                    // maw={'60%'}
                    // p={10}
                    styles={{
                      input: {
                        padding: '30px',
                        fontSize: '14px',
                        width: '425px',
                        borderRadius: '50px',
                        borderColor: '#016BE6',
                        ':focus': {
                          borderColor: '#016BE6',
                        },
                        '::placeholder': {
                          color: 'white',
                          fontSize: '14px',
                        },
                      },
                    }}
                    // radius="xl"
                    // size="lg"
                    rightSection={
                      <ActionIcon
                        type="submit"
                        size={56}
                        bg="#FFB800"
                        mr={10}
                        radius="xl"
                        variant="filled"
                        sx={{
                          ':hover': {
                            background: '#FFB800',
                          },
                        }}
                      >
                        <ChevronRight size="1.1rem" />
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
              </Grid>
            </Grid.Col>
          </Grid>
        </Container>
      </BackgroundImage>
    </div>
  );
}
