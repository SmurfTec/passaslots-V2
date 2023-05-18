import { BackgroundImage, Container, Grid, Group, Image, Text, Title, Timeline } from '@mantine/core';
import { SingleStage, SingleStageProps } from './singleStage';
import { useBonusModal } from '@pasa/hooks';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';

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
  const matches = useMediaQuery('(max-width: 810px)', true);
  const matches2 = useMediaQuery('(max-width: 767px)', true);
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
      {!matches && (
        <BackgroundImage
          style={{
            backgroundPosition: 'center center',
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            // minHeight: '180vh',
          }}
          className=""
          src="/images/pages/hiw/pasagamming.jpg"
          // bgsz="auto"
        >
          <Container className="mt-24 sm:mt-0" fluid ml={matches ? 5 : 90} mr={matches ? 5 : 69} pb={matches ? 0 : 300}>
            <Grid justify="center" align="center">
              <Grid.Col sm={12}>
                <Grid justify="center" align="center">
                  <Grid.Col sm={12}>
                    <Title
                      mt={50}
                      color="white"
                      className="uppercase text-center !text-[48px] leading-[56px] tracking-[-0.015em] font-[700] mb-0"
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
              <Grid.Col mt={50} xs={5}>
                <Group className="flex flex-col">
                  <Grid mt={196} justify="flex-end" ml="auto" align="center">
                    <Title
                      style={{ fontSize: matches2 ? '20px' : '32px' }}
                      className="absolute text-right uppercase text-[#FFFFFF] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]"
                    >
                      STAGE 2
                    </Title>
                    <Text
                      style={{ fontSize: matches2 ? '12px' : '20px' }}
                      maw={325}
                      className="absolute text-right mt-[120px] text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80"
                    >
                      Visit your favorite gaming platform {/* <br />  */}
                      in browser or download the app{' '}
                    </Text>
                  </Grid>
                  <Grid mt={524} justify="flex-end" ml="auto" align="center">
                    <Title
                      style={{ fontSize: matches2 ? '20px' : '32px' }}
                      className="absolute text-right uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]"
                    >
                      STAGE 4
                    </Title>
                    <Text
                      style={{ fontSize: matches2 ? '12px' : '20px' }}
                      className="absolute text-right mt-20 text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80"
                    >
                      Purchase first game credit
                    </Text>
                  </Grid>
                  <Grid mt={388} justify="flex-end" ml="auto" align="center">
                    <Title
                      style={{ fontSize: matches2 ? '20px' : '32px' }}
                      className="absolute text-right uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]"
                    >
                      STAGE 6
                    </Title>
                    <Text
                      style={{ fontSize: matches2 ? '12px' : '20px' }}
                      maw={331}
                      className="absolute text-right mt-[150px] text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80"
                    >
                      If you want a $10 bonus for your new {/* <br /> */}
                      account and stay connected to pasa {/* <br /> */}
                      gaming.{' '}
                    </Text>
                  </Grid>
                </Group>
              </Grid.Col>
              <Grid.Col mt={50} xs={2}>
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
                      width: '160px',
                      height: '0px',
                      border: '4px solid #50A1FF',
                      boxShadow: '-1px 1px 6px #016BE6',
                      filter: 'blur(1px)',
                      transform: 'rotate(90deg)',
                      marginTop: '115.5px',
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
                      marginTop: '201px',
                    }}
                  />
                  <div
                    style={{
                      boxSizing: 'border-box',
                      position: 'absolute',
                      width: '160px',
                      height: '0px',
                      border: '4px solid #50A1FF',
                      boxShadow: '-1px 1px 6px #016BE6',
                      filter: 'blur(1px)',
                      transform: 'rotate(90deg)',
                      marginTop: '318.5px',
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
                      marginTop: '405px',
                    }}
                  />
                  <div
                    style={{
                      boxSizing: 'border-box',
                      position: 'absolute',
                      width: '280px',
                      height: '0px',
                      border: '4px solid #50A1FF',
                      boxShadow: '-1px 1px 6px #016BE6',
                      filter: 'blur(1px)',
                      transform: 'rotate(90deg)',
                      marginTop: '580px',
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
                      marginTop: '725px',
                    }}
                  />
                  <div
                    style={{
                      boxSizing: 'border-box',
                      position: 'absolute',
                      width: '160px',
                      height: '0px',
                      border: '4px solid #50A1FF',
                      boxShadow: '-1px 1px 6px #016BE6',
                      filter: 'blur(1px)',
                      transform: 'rotate(90deg)',
                      marginTop: '842px',
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
                      marginTop: '930px',
                    }}
                  />
                  <div
                    style={{
                      boxSizing: 'border-box',
                      position: 'absolute',
                      width: '160px',
                      height: '0px',
                      border: '4px solid #50A1FF',
                      boxShadow: '-1px 1px 6px #016BE6',
                      filter: 'blur(1px)',
                      transform: 'rotate(90deg)',
                      marginTop: '1045.5px',
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
                      marginTop: '1131.5px',
                    }}
                  />
                </Group>
              </Grid.Col>
              {/* text-align-last-end */}
              <Grid.Col mt={50} xs={5}>
                <Group className="flex flex-col content-start">
                  <Grid align="center">
                    <Title
                      style={{ fontSize: matches2 ? '20px' : '32px' }}
                      className="absolute uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]"
                    >
                      STAGE 1
                    </Title>
                    <Text
                      style={{ fontSize: matches2 ? '12px' : '20px' }}
                      className="absolute mt-20 text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80"
                    >
                      Complete the player registeration
                    </Text>
                  </Grid>
                  <Grid mt={388} align="center">
                    <Title
                      style={{ fontSize: matches2 ? '20px' : '32px' }}
                      className="absolute uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]"
                    >
                      STAGE 3
                    </Title>
                    <Text
                      style={{ fontSize: matches2 ? '12px' : '20px' }}
                      maw={354}
                      className="absolute mt-[275px] text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80"
                    >
                      YOU'RE ALMOST DONE. {/* <br /> */}
                      After you have filled out the registration {/* <br /> */}
                      form and PASA browser app, You will {/* <br /> */}
                      be contacted by one of the PA team {/* <br /> */}
                      members with your credentials {/* <br /> */}
                      (username and password){' '}
                    </Text>
                  </Grid>
                  <Grid mt={510} align="center">
                    <Title
                      style={{ fontSize: matches2 ? '20px' : '32px' }}
                      className="absolute uppercase text-[#ffffff] font-[700] text-[32px] leading-[38px] tracking-[-0.015em]"
                    >
                      STAGE 5
                    </Title>
                    <Text
                      style={{ fontSize: matches2 ? '12px' : '20px' }}
                      className="absolute mt-20 text-[#ffffff] font-[400] text-[20px] leading-[38px] tracking-[0.005em] opacity-80"
                    >
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
      )}
      {matches && (
        <BackgroundImage
          style={{
            backgroundPosition: 'center center',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            // minHeight: '130vh',
          }}
          className=""
          src="/images/pages/hiw/pasagamming.png"
          // bgsz="auto"
        >
          <div>
            <Title mt={70} color="white" className="uppercase text-center font-[700] text-[28px] leading-[30px]">
              JOIN
              <span className="text-[#50A1FF]"> PASA </span>
              GAMING
            </Title>
            <Text
              color="#FFFFFF"
              className="uppercase text-center text-[15px] tracking-[0.0125em] leading-[21px] font-[500]"
              mt={10}
              mb={50}
            >
              CHECK OUT OUR SIX STAGE PROCESS
            </Text>
          </div>

          <div style={{ width: '90%', margin: 'auto' }}>
            <Timeline
              active={6}
              bulletSize={24}
              lineWidth={5}
              color="blue"
              styles={{ itemTitle: { fontSize: '20px' } }}
            >
              <Timeline.Item
                bullet={<Image src={'images/pages/hiw/timeline-yellow.png'} alt={'timeLine-yellow'} />}
                title="STAGE 1"
                align="right"
                style={{ color: 'white' }}
                tabIndex={0}
                pb={20}
              >
                <Text style={{ fontSize: '12px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  Complete the player registration
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<Image src={'images/pages/hiw/timeline-blue.png'} alt={'timeLine-yellow'} />}
                title="STAGE 2"
                align="left"
                style={{ color: 'white' }}
                pb={20}
              >
                <Text style={{ fontSize: '12px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  Visit your favorite gaming platform in browser or download the app
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<Image src={'images/pages/hiw/timeline-yellow.png'} alt={'timeLine-yellow'} />}
                title="STAGE 3"
                align="right"
                style={{ color: 'white' }}
                pb={20}
              >
                <Text style={{ fontSize: '12px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  YOU'RE ALMOST DONE. After you have filled out the registration form and PASA browser app, You will be
                  contacted by one of the PA team members with your credentials (username and password)
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<Image src={'images/pages/hiw/timeline-blue.png'} alt={'timeLine-yellow'} />}
                title="STAGE 4"
                align="left"
                style={{ color: 'white' }}
                pb={20}
              >
                <Text style={{ fontSize: '12px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  Purchase first game credit
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<Image src={'images/pages/hiw/timeline-yellow.png'} alt={'timeLine-yellow'} />}
                title="STAGE 5"
                align="right"
                style={{ color: 'white' }}
                pb={20}
              >
                <Text style={{ fontSize: '12px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  Get your gaming on and enjoy
                </Text>
              </Timeline.Item>
              <Timeline.Item
                bullet={<Image src={'images/pages/hiw/timeline-blue.png'} alt={'timeLine-yellow'} />}
                title="STAGE 6"
                align="left"
                style={{ color: 'white' }}
                pb={180}
              >
                <Text style={{ fontSize: '12px', marginTop: '10px' }} className=" text-[#ffffff] font-[400] ">
                  If you want a $10 bonus for your new account and stay connected to pasa gaming.
                </Text>
              </Timeline.Item>
            </Timeline>
          </div>

          {BonusModal}
        </BackgroundImage>
      )}
    </div>
  );
}
