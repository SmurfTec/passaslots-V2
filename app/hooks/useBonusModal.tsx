import {
  Button,
  Container,
  Grid,
  Group,
  Image as MImage,
  Modal,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { useSignUpModal } from './useSignUpModal';
import Image from 'next/image';

export const useBonusModal = (): [React.ReactNode, () => void] => {
  const [value, setValue] = useLocalStorage<{ name: string; email: string }>({
    key: 'bonus',
    defaultValue: { name: '', email: '' },
  });
  const [signupModal, signupOpen] = useSignUpModal();
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = ({ email, name }: { email: string; name: string }) => {
    setValue({ email, name });
    signupOpen();
    close();
  };
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
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
        onClose={close}
        size={900}
        radius={10}
      >
        <Container size={800}>
          <div className="text-center">
            <Image className="my-4" alt="logo" src={'/images/modal/headerlogo.png'} height={80} width={110} />
          </div>
          <Grid align="top">
            <Grid.Col md={12}>
              <Stack align="flex-start" my={20}>
                <Title order={2} size={'33px'} color="#FFFFFF" className=" font-bold uppercase">
                  AHOY THERE MATEY!
                </Title>
                <Text size="md" color="#6D7D8E">
                  Ready to ride the Waves of Good Fortune with us on our high seas adventure?
                </Text>
                <Text size="sm" className="font-normal" color="#FFFFFF">
                  But first, we need to know a bit about you. Don't worry, your data is safe with us. We'll protect it
                  like we protect our precious loot. So, come aboard and let's set sail to treasure-filled waters!
                </Text>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <TextInput placeholder="NAME" mb={20} classNames={classes} required {...form.getInputProps('name')} />
                  <TextInput placeholder="EMAIL" classNames={classes} required {...form.getInputProps('email')} />
                  <Group spacing={50} mt={50}>
                    <Button
                      styles={{
                        root: {
                          fontSize: '10px',
                          color: 'white',
                          '&:hover': { background: '#016BE6' },
                        },
                      }}
                      bg={'#016BE6'}
                      radius={50}
                      px={40}
                      className="text-base font-light"
                      type="submit"
                      size="lg"
                    >
                      UNLOCK MY BONUS
                    </Button>
                    <Text color={'white'} className="underline text-base font-bold cursor-pointer" onClick={close}>
                      No thanks, I'll play without it.
                    </Text>
                  </Group>
                </form>
                
                <Group>
                  <Text size={'sm'} component={NextLink} href="/terms-and-conditions" color="white">
                  Aye, Aye your code will be sent to your email address.
                  </Text>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Modal>
      {signupModal}
    </>
  );

  return [modal, open];
};

const useStyles = createStyles((theme) => ({
  input: {
    borderRadius: 10,
    border: '1px solid #016BE6 !important',
    height: '60px',
    width: '100%',
    color:'white',
    backgroundColor: 'transparent',
    '::placeholder': {
      color: '#ffffff',
    },
  },
}));
