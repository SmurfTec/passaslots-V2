import { Anchor, Burger, Button, Container, Flex, Group, Image, Menu, Text, createStyles } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { useBonusModal } from '@pasa/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ArrowRight } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  burger: {
    marginTop: -20,
    [theme.fn.largerThan(809)]: {
      display: 'none',
    },
  },

  group: {
    [theme.fn.smallerThan(810)]: {
      display: 'none',
    },
    marginRight: '200px',
    [theme.fn.smallerThan(1400)]: {
      marginRight: '40px',
    },
  },
  button: {
    fontSize: '16px',
    fontWeight: 'bold',
    [theme.fn.smallerThan(810)]: {
      display: 'none',
    },
    // borderColor: '#F6CAA7',
  },
  item: {
    paddingRight: 40,
    paddingLeft: 40,
    fontSize: 22,
    height: 72,
    color: '#222222',
    border: 'unset',
    '&[data-hovered]': {
      backgroundColor: 'unset',
    },
  },
  dropdown: {
    backgroundColor: 'white',
    border: 'unset',
    padding: 'unset',
  },
  divider: {
    borderColor: '#E4E4E4',
  },
}));

export function Header() {
  const matches = useMediaQuery('(max-width: 1250px)');
  const [BonusModal, bonusOpen] = useBonusModal();
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();

  let show = true;

  useEffect(() => {
    if (localStorage.getItem('show') !== 'false') {
      setTimeout(() => {
        bonusOpen();
        localStorage.setItem('show', 'false');
      }, 12000);
    }
  });

  return (
    <header>
      <Container fluid className="bg-transparent z-50 relative">
        <Group position="apart" spacing={matches ? 5 : 40}>
          <Anchor ml={79} mt={9} href="/" component={NextLink}>
            <Image className="cursor-pointer" alt="logo" src={'/images/modal/headerlogo.png'} height={80} width={114} />
          </Anchor>
          <div style={{ display: 'flex' }}>
            <Group spacing={matches ? 10 : 31} className={classes.group}>
              <Text
                color={'#fff'}
                className="cursor-pointer font-[700] uppercase"
                size="16px"
                onClick={bonusOpen}
                style={{ lineHeight: '18.75px', letterSpacing: '-1.5%' }}
              >
                Signup for Players
              </Text>
              <Text
                style={{
                  textDecoration: router.pathname === '/pasa-for-distributor' ? 'underline' : '',
                  textUnderlineOffset: router.pathname === '/pasa-for-distributor' ? '11px' : '',
                }}
                color={router.pathname === '/pasa-for-distributor' ? '#FFB800' : '#fff'}
                className="font-[700] uppercase"
                size="16px"
                component={NextLink}
                href="/pasa-for-distributor"
              >
                PASA Distribution
              </Text>
              <Text
                style={{
                  textDecoration: router.pathname === '/games' ? 'underline' : '',
                  textUnderlineOffset: router.pathname === '/games' ? '11px' : '',
                }}
                color={router.pathname === '/games' ? '#FFB800' : '#fff'}
                className="font-[700] uppercase"
                size="16px"
                component={NextLink}
                href="/games"
              >
                Games
              </Text>
              <Text
                style={{
                  textDecoration: router.pathname === '/blog' ? 'underline' : '',
                  textUnderlineOffset: router.pathname === '/blog' ? '11px' : '',
                }}
                color={router.pathname === '/blog' ? '#FFB800' : '#fff'}
                className="font-[700] uppercase"
                size="16px"
                component={NextLink}
                href="/blog"
              >
                Blogs
              </Text>
            </Group>
            <Menu
              closeOnItemClick={true}
              defaultOpened={false}
              onClose={close}
              keepMounted={false}
              classNames={classes}
              width="100%"
              position="bottom-end"
              offset={40}
              radius={0}
            >
              <Menu.Target>
                <Burger
                  opened={opened}
                  color={router.pathname === '/' ? 'white' : 'black'}
                  onClick={toggle}
                  className={classes.burger}
                  size="sm"
                />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={bonusOpen} rightSection={<ArrowRight strokeWidth={0.8} size={30} />}>
                  Sign up for Players
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  rightSection={<ArrowRight strokeWidth={0.8} size={30} />}
                  component={NextLink}
                  href="/pasa-for-distributor"
                >
                  PASA for Distribution
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item rightSection={<ArrowRight strokeWidth={0.8} size={30} />} component={NextLink} href="/games">
                  Games
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item rightSection={<ArrowRight strokeWidth={0.8} size={30} />} component={NextLink} href="/blog">
                  Blogs
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  rightSection={<ArrowRight strokeWidth={0.8} size={30} />}
                  component={NextLink}
                  href="/how-it-works"
                >
                  How does it work?
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item rightSection={<ArrowRight strokeWidth={0.8} size={30} />} component={NextLink} href="/about">
                  About
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  rightSection={<ArrowRight strokeWidth={0.8} size={30} />}
                  component={NextLink}
                  href="/contact"
                >
                  Contact Us
                </Menu.Item>
                <Button
                  fullWidth
                  maw={180}
                  onClick={bonusOpen}
                  size="lg"
                  className="text-sm font-bold ml-8 mt-2"
                  radius={50}
                >
                  LOGIN
                </Button>
                <Button
                  fullWidth
                  maw={180}
                  onClick={bonusOpen}
                  size="lg"
                  className="text-sm font-bold ml-8 mt-2"
                  radius={50}
                >
                  SIGN UP
                </Button>
                <Menu.Item></Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Group className={classes.group} spacing={matches ? 5 : 10} mr={matches ? 10 : 69}>
              <Button
                styles={{
                  label: {
                    color: 'white',
                    '&:hover': {
                      color: 'white',
                    },
                  },
                  root: {
                    background: 'linear-gradient(180deg, #016BE6 0%, rgba(246, 202, 167, 0.44) 100%)',

                    '&:hover': {
                      background: 'linear-gradient(180deg, #016BE6 0%, rgba(246, 202, 167, 0.44) 100%)',
                    },
                  },
                }}
                w={matches ? 120 : 180}
                maw={180}
                onClick={bonusOpen}
                className="font-[500] text-base "
                style={{ border: 'none' }}
                size="lg"
                radius={50}
              >
                LOGIN
              </Button>
              <Button
                styles={{
                  label: {
                    color: 'white',
                    '&:hover': {
                      color: 'white',
                    },
                  },
                  root: {
                    background: 'linear-gradient(180deg, #016BE6 0%, #A74C9A 100%)',

                    '&:hover': {
                      background: 'linear-gradient(180deg, #016BE6 0%, #A74C9A 100%)',
                    },
                  },
                }}
                w={matches ? 120 : 180}
                maw={180}
                onClick={bonusOpen}
                style={{ border: 'none', marginLeft: '10px' }}
                className="font-[500] text-base "
                size="lg"
                radius={50}
              >
                SIGN UP
              </Button>
            </Group>
          </div>
        </Group>
        {BonusModal}
      </Container>
    </header>
  );
}
