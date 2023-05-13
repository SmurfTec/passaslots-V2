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
    <div
      className={classes.backdrop}
      style={{ zIndex: 150, boxShadow: '-1px 0px 20px 3px #016BE6', borderTop: '6px solid #016BE6' }}
    >
      <Container pos="relative" py={50} size={1300} style={{ marginTop: '50px' }}>
        <Grid align="top">
          <Grid.Col sm={12} className="text-center">
            <div className="text-center">
              <Group position="center">
                <Image
                  src="/images/footer/footer2.png"
                  width={63}
                  height={62}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
                <Image
                  src="/images/footer/footer3.png"
                  width={70}
                  height={70}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
                <Image
                  src="/images/footer/footer4.png"
                  width={58}
                  height={58}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
                <Image
                  src="/images/footer/footer5.png"
                  width={76}
                  height={76}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
                <Image
                  src="/images/footer/footer1.png"
                  width={73}
                  height={66}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
              </Group>
              <Divider className="my-5 mx-auto" w={50} size={'sm'} orientation="horizontal" />
              <Group mt={30} position="center">
                <Image
                  src="/images/footer/payment1.png"
                  width={42}
                  height={41}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
                <Image
                  src="/images/footer/payment2.png"
                  width={50}
                  height={31.5}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
                <Image
                  src="/images/footer/payment3.png"
                  width={59}
                  height={37}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
                <Image
                  src="/images/footer/payment4.png"
                  width={96}
                  height={41}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
              </Group>
              <Divider className="my-5 mx-auto" w={50} size={'sm'} orientation="horizontal" />
              <Group mt={30} className="sm:space-x-4 xs:space-x-0" position="center">
                <Image
                  src="/images/footer/apple.png"
                  width={19.29}
                  height={22.89}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
                <Image
                  src="/images/footer/windows.png"
                  width={19.29}
                  height={22.89}
                  alt="JACOG"
                  style={{ marginRight: '10px' }}
                />
                <BrandAndroid color="#CAC6CB" />

                <Divider orientation="vertical" />

                <DeviceDesktop color="#CAC6CB" />
                <DeviceTablet color="#CAC6CB" />
                <DeviceMobile color="#CAC6CB" />
              </Group>

              <Button
                className="w-[auto] lg:w-auto mt-5"
                // styles={{ label: { fontSize: '16px', fontWeight: 'lighter' } }}
                styles={{
                  root: {
                    fontSize: '16px',

                    borderImageSlice: '1',
                    borderRadius: '50px',
                    backgroundImage: 'linear-gradient(to bottom, #FFFFFF, #016BE6)',
                    border: '2px solid #016BE6',
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

              <Text mt={30} color={'#ACACAC'} className="font-[400]" size="sm" style={{ fontSize: '12px' }}>
                We care about protecting your data. Read more in our <br />{' '}
                <Text
                  color={'#ffffff'}
                  size="sm"
                  component={NextLink}
                  href="/privacy-policy"
                  className="font-[400]"
                  style={{ fontSize: '12px' }}
                >
                  Privacy Policy.
                </Text>
              </Text>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(to left,  #FFFFFF,  #212121)',
          backgroundClip: 'padding-box',
          width: '100%',
        }}
      />

      <Container pos="relative" py={50} size={1300}>
        <Grid align="top">
          <Grid.Col xs={12}>
            <div className="text-center space-y-2">
              <Text
                color={'#ffffff'}
                size="md"
                className="block font-[400]"
                component={NextLink}
                href="/terms-and-conditions"
                style={{ fontSize: '18px' }}
              >
                Terms and Conditions
              </Text>
              <Text color={'#ACACAC'} size="sm" style={{ fontSize: '16px', marginTop: '15px' }}>
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
