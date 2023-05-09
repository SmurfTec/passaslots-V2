import { BackgroundImage, Container, Grid, Group, Image, Text, Title } from '@mantine/core';
import { SingleStage, SingleStageProps } from './singleStage';
import { useBonusModal } from '@pasa/hooks';

const stageData = [
  {
    image: '/images/pages/hiw/stage1.png',
    title: 'Stage 1',
    content: 'Complete the player registeration',
  },
  {
    image: '/images/pages/hiw/stage2.png',
    title: 'Stage 2',
    content: 'Visit your favorite gaming platform in browser or download the app',
  },
  {
    image: '/images/pages/hiw/stage3.png',
    title: 'Stage 3',
    subTitle: 'YOU’RE ALMOST DONE.',
    content:
      'After you have filled out the registration form and PASA browser app, You will be contacted by one of the PA team members with your credentials (username and password)',
  },
  {
    image: '/images/pages/hiw/stage4.png',
    title: 'Stage 4',
    content: 'Purchase first game credits',
  },

  {
    image: '/images/pages/hiw/stage5.png',
    title: 'Stage 5',
    content: 'Get your gaming on and enjoy responsibly.',
  },
  {
    image: '/images/pages/hiw/stage6.png',
    title: 'Stage 6',
    content: 'If you want a $10 bonus for your new account and stay connected to pasa gaming.',
    button: 'UNLOCK YOUR BONUS',
    link: 'SIGN UP FOR PROMOTIONS',
  },
];

export function HiwStage() {
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <div
      style={{
        background: 'radial-gradient(58.07% 58.07% at 50% 50%, rgba(27, 16, 59, 0) 0%, #1A0F39 100%)',
        zIndex: 50,
        boxShadow: '-1px 0px 20px 3px #016BE6',
        borderTop: '6px solid #016BE6',
      }}
    >
      <BackgroundImage
        style={{
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          minHeight: '315vh',
        }}
        className=""
        src="/images/pages/hiw/pasagamming.png"
        bgsz="auto"
      >
        <Container className="mt-24 sm:mt-0" fluid ml={90} mr={69}>
          <Grid justify="center" align="center">
            <Grid.Col sm={12}>
              <Grid justify="center" align="center">
                <Grid.Col sm={12}>
                  <Title
                    mt={109}
                    color="white"
                    className="uppercase text-center text-[48px] leading-[56px] tracking-[-0.015em] font-[700] mb-0"
                  >
                    JOIN
                    <span className="text-[#50A1FF]"> PASA </span>
                    GAMING
                  </Title>
                  <Text
                    color="#FFFFFF"
                    className="uppercase text-center text-[20px] tracking-[0.0125em] leading-[21px] font-[500]"
                    mt={23}
                  >
                    CHECK OUT OUR SIX STAGE PROCESS
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col mt={318} sm={5}>
              <Group className="flex flex-col">
                <Grid mt={246} justify="flex-end" ml="auto" align="center">
                  <Title className="absolute text-right uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]">
                    STAGE 2
                  </Title>
                  <Text className="absolute text-right mt-[120px] text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80">
                    Visit your favorite gaming platform
                    <br /> in browser or download the app
                  </Text>
                </Grid>
                <Grid mt={610} justify="flex-end" ml="auto" align="center">
                  <Title className="absolute text-right uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]">
                    STAGE 4
                  </Title>
                  <Text className="absolute text-right mt-20 text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80">
                    Purchase first game credit
                  </Text>
                </Grid>
                <Grid mt={475} justify="flex-end" ml="auto" align="center">
                  <Title className="absolute text-right uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]">
                    STAGE 6
                  </Title>
                  <Text className="absolute text-right mt-[150px] text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80">
                    If you want a $10 bonus for your new
                    <br />
                    account and stay connected to pasa
                    <br />
                    gaming.
                  </Text>
                </Grid>
              </Group>
            </Grid.Col>
            <Grid.Col mt={318} sm={2}>
              <Group className="flex flex-col">
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    background: '#150B2E',
                    border: '11px solid #FFB800',
                    borderRadius: '50px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '205px',
                    height: '0px',
                    border: '4px solid #50A1FF',
                    boxShadow: '-1px 1px 6px #016BE6',
                    filter: 'blur(1px)',
                    transform: 'rotate(90deg)',
                    marginTop: '138.5px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    background: '#8FC3FF',
                    border: '11px solid #016BE6',
                    borderRadius: '50px',
                    marginTop: '246px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '205px',
                    height: '0px',
                    border: '4px solid #50A1FF',
                    boxShadow: '-1px 1px 6px #016BE6',
                    filter: 'blur(1px)',
                    transform: 'rotate(90deg)',
                    marginTop: '384.5px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    background: '#150B2E',
                    border: '11px solid #FFB800',
                    borderRadius: '50px',
                    marginTop: '492px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '342px',
                    height: '0px',
                    border: '4px solid #50A1FF',
                    boxShadow: '-1px 1px 6px #016BE6',
                    filter: 'blur(1px)',
                    transform: 'rotate(90deg)',
                    marginTop: '699px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    background: '#8FC3FF',
                    border: '11px solid #016BE6',
                    borderRadius: '50px',
                    marginTop: '870px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '205px',
                    height: '0px',
                    border: '4px solid #50A1FF',
                    boxShadow: '-1px 1px 6px #016BE6',
                    filter: 'blur(1px)',
                    transform: 'rotate(90deg)',
                    marginTop: '1007px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    background: '#150B2E',
                    border: '11px solid #FFB800',
                    borderRadius: '50px',
                    marginTop: '1108px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '205px',
                    height: '0px',
                    border: '4px solid #50A1FF',
                    boxShadow: '-1px 1px 6px #016BE6',
                    filter: 'blur(1px)',
                    transform: 'rotate(90deg)',
                    marginTop: '1246.5px',
                  }}
                />
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '36px',
                    height: '36px',
                    background: '#8FC3FF',
                    border: '11px solid #016BE6',
                    borderRadius: '50px',
                    marginTop: '1353.5px',
                  }}
                />
              </Group>
            </Grid.Col>
            {/* text-align-last-end */}
            <Grid.Col mt={318} sm={5}>
              <Group className="flex flex-col content-start">
                <Grid align="center">
                  <Title className="absolute uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]">
                    STAGE 1
                  </Title>
                  <Text className="absolute mt-20 text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80">
                    Complete the player registeration
                  </Text>
                </Grid>
                <Grid mt={482} align="center">
                  <Title className="absolute uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]">
                    STAGE 3
                  </Title>
                  <Text maw={354} className="absolute mt-[275px] text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80">
                    YOU'RE ALMOST DONE.{' '}
                    {/* <br /> */}
                    After you have filled out the registration{' '}
                    {/* <br /> */}
                    form and PASA browser app, You will{' '}
                    {/* <br /> */}
                    be contacted by one of the PA team{' '}
                    {/* <br /> */}
                    members with your credentials{' '}
                    {/* <br /> */}
                    (username and password){' '}
                  </Text>
                </Grid>
                <Grid mt={595} align="center">
                  <Title className="absolute uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]">
                    STAGE 5
                  </Title>
                  <Text className="absolute mt-20 text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80">
                    Get your gaming on and enjoy
                  </Text>
                </Grid>
              </Group>
            </Grid.Col>
          </Grid>

          {/* <Grid pb={100}>
            {stageData.map((item, key) => (
              <Grid.Col key={key + item.content} sm={4}>
                <SingleStage
                  content={item.content}
                  title={item.title}
                  image={item.image}
                  button={item.button}
                  link={item.link}
                  subTitle={item.subTitle}
                  modalOpen={bonusOpen}
                />
              </Grid.Col>
            ))}
          </Grid> */}
          {BonusModal}
        </Container>
      </BackgroundImage>
    </div>
  );
}
