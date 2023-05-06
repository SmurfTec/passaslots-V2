import {
  ActionIcon,
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { NextLink } from '@mantine/next';
import { ScrollButton } from '@pasa/customComponents';
import { useBonusModal } from '@pasa/hooks';
import { useState } from 'react';
import {
  BrandAndroid,
  BrandApple,
  BrandWindows,
  DeviceDesktop,
  DeviceMobile,
  DeviceTablet,
  ArrowRight,
} from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundImage: "url('/images/footer/backgroundImage.png')",
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    // backgroundPosition: 'center center',
    backgroundSize: 'cover',
    // width: '100%',
    // height: '100vh',
  },
}));

export function Footer() {
  const [BonusModal, bonusOpen] = useBonusModal();
  const { classes } = useStyles();
  const [message, setMessage] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

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
    <div className={classes.backdrop}>
      <Container pos="relative" py={50} size={1300}>
        <Grid align="top">
          <Grid.Col sm={12} className="text-center">
            <div className="text-center">
              <Group position="center">
                <Image src="/images/footer/footer2.png" width={63} height={62} alt="JACOG" />
                <Image src="/images/footer/footer3.png" width={70} height={70} alt="JACOG" />
                <Image src="/images/footer/footer4.png" width={58} height={58} alt="JACOG" />
                <Image src="/images/footer/footer5.png" width={76} height={76} alt="JACOG" />
                <Image src="/images/footer/footer1.png" width={73} height={66} alt="JACOG" />
              </Group>
              <Divider className="my-5 mx-auto" w={50} size={'sm'} orientation="horizontal" />
              <Group mt={30} position="center">
                <Image src="/images/footer/payment1.png" width={42} height={41} alt="JACOG" />
                <Image src="/images/footer/payment2.png" width={50} height={31.5} alt="JACOG" />
                <Image src="/images/footer/payment3.png" width={59} height={37} alt="JACOG" />
                <Image src="/images/footer/payment4.png" width={96} height={41} alt="JACOG" />
              </Group>
              <Divider className="my-5 mx-auto" w={50} size={'sm'} orientation="horizontal" />
              <Group mt={30} className="sm:space-x-4 xs:space-x-0" position="center">
                <BrandApple fill="#CAC6CB" color="#CAC6CB" />
                <BrandWindows color="#CAC6CB" />
                <BrandAndroid color="#CAC6CB" />
                <Divider orientation="vertical" />

                <DeviceDesktop color="#CAC6CB" />
                <DeviceTablet color="#CAC6CB" />
                <DeviceMobile color="#CAC6CB" />
              </Group>

              <Button
                radius={50}
                className="w-[45%] lg:w-auto mt-5"
                // styles={{ label: { fontSize: '16px', fontWeight: 'lighter' } }}
                styles={{
                  root: {
                    fontSize: '16px',
                    color: 'white',
                    borderImage: 'linear-gradient(to bottom, #FFFFFF, #016BE6)',
                    borderImageWidth: '2px',
                    borderImageRepeat: 'round',
                    borderRadius: '50px',
                    borderImageSlice: '1',
                    '&:hover': { background: 'transparent' },
                  },
                  label: { fontSize: '16px', fontWeight: 'lighter' },
                }}
                rightIcon={<ArrowRight />}
                bg={'transparent'}
                size="lg"
                component="a"
                href="http://Pasasweeps.net"
              >
                PLAY PASA NOW
              </Button>

              <Group mt={20} position="center">
                <ActionIcon component="a" href="https://www.facebook.com/pasaslots" variant="transparent">
                  <Avatar src="/images/socialIcons/facebook.png" size="1.25rem" />
                </ActionIcon>
                <ActionIcon component="a" href="https://t.me/pasaslots" variant="transparent">
                  <Avatar src="/images/socialIcons/twitter.png" size="1.25rem" />
                </ActionIcon>
                <ActionIcon component="a" href="https://tiktok.com/@pasaslots" variant="transparent">
                  <Avatar src="/images/socialIcons/tiktok.png" size="1.25rem" />
                </ActionIcon>
              </Group>

              <Text mt={30} color={'#ACACAC'} className="font-[300]" size="sm">
                We care about protecting your data. Read more in our <br />{' '}
                <Text color={'#ffffff'} size="sm" component={NextLink} href="/privacy-policy" className="font-[700]">
                  Privacy Policy.
                </Text>
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col xs={12}>
            <Divider className="mt-10" size={'sm'} orientation="horizontal" />
            <div className="text-center space-y-2 mt-10">
              <Text
                color={'#ffffff'}
                size="md"
                className="block font-[500]"
                component={NextLink}
                href="/terms-and-conditions"
              >
                Terms and Conditions
              </Text>
              <Text color={'#ACACAC'} size="sm">
                © Copyright {new Date().getFullYear()} Pasa Slots All Rights Reserved
              </Text>
            </div>
          </Grid.Col>
        </Grid>

        <ScrollButton pointerPosition="UP" className="absolute top-10 right-0" />
        {BonusModal}
      </Container>
    </div>
  );
}
