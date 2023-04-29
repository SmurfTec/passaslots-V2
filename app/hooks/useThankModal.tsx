import { Image, Stack, Text, Title, createStyles } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import 'react-phone-number-input/style.css';

export const useThankModal = (): [React.ReactNode, boolean, { open: () => void; close: () => void }] => {
  const { classes } = useStyles();
  const [value, setValue] = useState<string>();
  const [opened, { open, close }] = useDisclosure(false);
  const Modal = (
    <div>
      <div className="text-center">
        <Image alt="logo" src={'/images/modal/headerlogo.png'} height={80} width={110} />
      </div>
      <Stack align="flex-start" ml={80} my={20}>
        <Image alt="logo" src={'/images/modal/thankpirate.png'} height={150} width={190} />
        <Title order={3} color="black" className=" font-bold uppercase">
          THANKS FOR SUBSCRIBING
        </Title>
        <Text size="lg" mt={20} color="#6D7D8E">
          Raise the flag and let the world know, we're on the hunt for treasure!
        </Text>
        <Text size="md" className="font-normal" mr={180} color="#0F0F0F">
          Check your email and phone for a confirmation message as well as your code.
        </Text>
      </Stack>
    </div>
  );
  return [Modal, opened, { open, close }];
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
