import { Image, Stack, Text, Title, createStyles, Modal, Container, ScrollArea, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import 'react-phone-number-input/style.css';

export const useThankModal = (): [React.ReactNode, () => void ] => {
  // const { classes } = useStyles();
  // const [value, setValue] = useState<string>();
  const [opened, { open, close }] = useDisclosure(false);
  const modal = (
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
      size={900}
      onClose={close}
      radius={10}>
      <Container size={800}>
        <div className="text-center">
          <Image alt="logo" src={'/images/modal/headerlogo.png'} height={80} width={110} />
        </div>
        <Grid align="top">
          <Grid.Col md={9}>
            <Stack align="flex-start" my={20}>
              <Title order={3} color="white" className=" font-bold uppercase">
                THANKS FOR SUBSCRIBING
              </Title>
              <Text size="lg" mt={20} color="#6D7D8E">
                Raise the flag and let the world know, we're on the hunt for treasure!
              </Text>
              <Text size="sm" className="font-normal" mr={180} color="#FFFFFF">
                Check your email and phone for a confirmation message as well as your code.
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col md={3}>
            <Image className="md:mt-10 bottom" alt="logo" src={'/images/modal/thanksthief.png'} />
          </Grid.Col>
        </Grid>
      </Container>
    </Modal>
  );
  return [modal, open];
};

const useStyles = createStyles((theme) => ({
  input: {
    borderRadius: 3,
    border: '1px solid #84848470 !important',
    height: '60px',
    width: '620px',
    backgroundColor: '#F2F2F2',
    '::placeholder': {
      color: '#393939',
    },
  },
}));
