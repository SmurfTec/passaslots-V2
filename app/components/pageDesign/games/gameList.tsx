import { Container, Grid, Text, Title, Image, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function GameList() {
  const matches = useMediaQuery('(max-width: 810px)', true);
  return (
    <div
      style={{
        backgroundImage:
          'radial-gradient(at 20% 25%, hsla(212,98%,45%,0.4) 0px, transparent 50%), radial-gradient(at 78% 26%, hsla(287,50%,40%,0.78) 0px, transparent 50%), radial-gradient(at 51% 68%, hsla(308,37%,47%,0.57) 0px, transparent 50%)',
        backdropFilter: 'blur(20px)',
        backgroundSize: 'cover',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <Container fluid pl={matches ? 5 : 90} pr={matches ? 5 : 69} py={matches ? 50 : 100}>
        <Grid align="center" justify="center">
          <Grid.Col sm={12}>
            <div className="flex justify-center">
              <Image
                maw={matches ? 300 : 507}
                mah={517}
                className="mx-auto my-auto"
                src="/images/pages/game/egyptian.png"
                alt="egyptian"
              />
            </div>
            <Title
              my={matches ? 30 : 70}
              className="font-[700] text-center xs:!text-[24px] sm:!text-[32px] md:!text-[48px] md:!leading-[63px] sm:!leading-[30px] xs:!leading-[30px] tracking-[0.0125em] uppercase"
            >
              Gaming just got better for you
            </Title>

            <Grid justify="center">
              <Group align="center" className="flex flex-nowrap place-content-between" pb={15} w={'97%'}>
                <Text
                  style={{
                    border: '4px solid #016BE6',
                    borderRadius: '50px',
                    filter: 'drop-shadow(0px 11px 32px #016BE6)',
                    padding: '15px 23px 15px 23px',
                  }}
                  className="font-[700] text-center text-[24px] leading-[32px] tracking-[0.0125em] uppercase"
                >
                  1
                </Text>
                <Text
                  style={{
                    border: '4px solid #016BE6',
                    borderRadius: '50px',
                    filter: 'drop-shadow(0px 11px 32px #016BE6)',
                    padding: '15px 20px 15px 20px',
                  }}
                  className="xl:w-[1145px] lg:w-[900px] md:w-[650px] sm:w-[270px] xs:w-[250px] font-[700] text-center text-[18px] leading-[34px] tracking-[0.0125em]"
                >
                  Imaginative themes: Be transported to a world of out-of-this-world graphics and dynamic audio.
                </Text>
              </Group>
              <Group align="center" className="flex flex-nowrap place-content-between" py={15}>
                <Text
                  style={{
                    border: '4px solid #016BE6',
                    borderRadius: '50px',
                    filter: 'drop-shadow(0px 11px 32px #016BE6)',
                    padding: '15px 23px 15px 23px',
                  }}
                  className="font-[700] text-center text-[24px] leading-[32px] tracking-[0.0125em] uppercase"
                >
                  2
                </Text>
                <Text
                  style={{
                    border: '4px solid #016BE6',
                    borderRadius: '50px',
                    filter: 'drop-shadow(0px 11px 32px #016BE6)',
                    padding: '15px 20px 15px 20px',
                  }}
                  className="xl:w-[1145px] lg:w-[900px] md:w-[650px] sm:w-[270px] xs:w-[250px] font-[700] text-center text-[18px] leading-[34px] tracking-[0.0125em]"
                >
                  High payout potential: Captivate yourself with the thrill of potentially life-changing winnings.
                </Text>
              </Group>
              <Group align="center" className="flex flex-nowrap place-content-between" py={15}>
                <Text
                  style={{
                    border: '4px solid #016BE6',
                    borderRadius: '50px',
                    filter: 'drop-shadow(0px 11px 32px #016BE6)',
                    padding: '15px 23px 15px 23px',
                  }}
                  className="font-[700] text-center text-[24px] leading-[32px] tracking-[0.0125em] uppercase"
                >
                  3
                </Text>
                <Text
                  style={{
                    border: '4px solid #016BE6',
                    borderRadius: '50px',
                    filter: 'drop-shadow(0px 11px 32px #016BE6)',
                    padding: '15px 20px 15px 20px',
                  }}
                  className="xl:w-[1145px] lg:w-[900px] md:w-[650px] sm:w-[270px] xs:w-[250px] font-[700] text-center text-[18px] leading-[34px] tracking-[0.0125em]"
                >
                  Convenient access: Play from the comfort of your own home or on-the-go with our online and mobile.
                </Text>
              </Group>
              <Group align="center" className="flex flex-nowrap place-content-between" py={15}>
                <Text
                  style={{
                    border: '4px solid #016BE6',
                    borderRadius: '50px',
                    filter: 'drop-shadow(0px 11px 32px #016BE6)',
                    padding: '15px 23px 15px 23px',
                  }}
                  className="font-[700] text-center text-[24px] leading-[32px] tracking-[0.0125em] uppercase"
                >
                  4
                </Text>
                <Text
                  style={{
                    border: '4px solid #016BE6',
                    borderRadius: '50px',
                    filter: 'drop-shadow(0px 11px 32px #016BE6)',
                    padding: '15px 20px 15px 20px',
                  }}
                  className="xl:w-[1145px] lg:w-[900px] md:w-[650px] sm:w-[270px] xs:w-[250px] font-[700] text-center text-[18px] leading-[34px] tracking-[0.0125em]"
                >
                  Dedicated to providing the best: Pasa is dedicated to giving you the best gaming experience possible.
                </Text>
              </Group>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
