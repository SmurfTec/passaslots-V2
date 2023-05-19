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
import GoogleReCaptcha from '@pasa/components/reCaptcha/GoogleReCaptcha';
import { useState } from 'react';
import { ChevronRight } from 'tabler-icons-react';

export function NewsletterBlog() {
  const [message, setMessage] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const matches = useMediaQuery('(max-width: 770px)');

  const handleRecaptchaChange = (token: any) => {
    setAllowSubmit(!allowSubmit);
  };

  const handleSubmit = ({ email }: { email: string }) => {
    allowSubmit &&
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
        // minHeight: '100vh',
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
          // minHeight: '100vh',
        }}
        className="relative opacity-21"
        src="/images/header/backgroundImage.png"
      >
        <Container fluid pl={matches ? 5 : 90} pr={matches ? 5 : 69} py={100}>
          <Grid justify="center" align="center">
            <Grid.Col sm={12}>
              <Grid justify="center" align="center">
                <Grid.Col>
                  <Image
                    maw={500}
                    mah={500}
                    className="mx-auto my-auto"
                    src="/images/pages/blogs/addsomeluck.png"
                    alt="image"
                  />
                </Grid.Col>
                <div className="flex flex-col md:mt-[85px] sm:mt-[20px] xs:mt-[20px]">
                  <Title
                    color="white"
                    className="uppercase font-[700] leading-[51px] text-center tracking-[0.0125em] md:!text-[48px] sm:!text-[24px] xs:!text-[24px]"
                  >
                    Add some luck to your inbox
                  </Title>
                  <Text
                    mt={matches ? 15 : 33}
                    color="white"
                    maw={900}
                    className=" font-[400] leading-[38px] text-center tracking-[0.005em] md:text-[20px] sm:text-[15px] xs:text-[15px]"
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
                        padding: matches ? '18px' : '30px',
                        fontSize: '14px',
                        width: matches ? '270px' : '425px',
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
                        disabled={allowSubmit}
                        type="submit"
                        size={matches ? 35 : 56}
                        bg={allowSubmit ? '#FFB800' : 'grey'}
                        mr={matches ? -5 : 10}
                        radius="xl"
                        variant="filled"
                        sx={{
                          ':hover': {
                            background: allowSubmit ? '#FFB800' : 'grey',
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
                    <Text color="green" size={matches ? 12 : 14}>
                      ✅ Successfully saved email
                    </Text>
                  )}
                </form>
              </Grid>
              <Grid align="center" justify="center" mt={20}>
                {' '}
                <GoogleReCaptcha handleRecaptchaChange={handleRecaptchaChange} />
              </Grid>
            </Grid.Col>
          </Grid>
        </Container>
      </BackgroundImage>
    </div>
  );
}
