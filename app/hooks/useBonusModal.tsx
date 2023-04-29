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
        onClose={close}
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
                  AHOY THERE MATEY!
                </Title>
                <Text size="md" color="#6D7D8E">
                  Ready to ride the Waves of Good Fortune with us on our high seas adventure?
                </Text>
                <Text size="sm" className="font-normal" color="#0F0F0F">
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
                          fontSize: '16px',
                          color: 'white',
                          '&:hover': { background: '#751F86' },
                        },
                      }}
                      bg={'#751F86'}
                      radius={0}
                      px={40}
                      className="text-base font-light"
                      type="submit"
                      size="lg"
                    >
                      UNLOCK MY BONUS
                    </Button>
                    <Text className="underline text-base font-bold cursor-pointer" onClick={close}>
                      No thanks, I'll play without it.
                    </Text>
                  </Group>
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
              <MImage className="md:mt-44" src="/images/modal/bonuspirate.png" alt="bonus pirate" />
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
    borderRadius: 3,
    border: '1px solid #84848470 !important',
    height: '60px',
    width: '100%',
    backgroundColor: '#F2F2F2',
    '::placeholder': {
      color: '#393939',
    },
  },
}));
