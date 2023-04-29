import { Container, Grid, Image, Text, Title } from '@mantine/core';
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
    <Container className="mt-24 sm:mt-0" size={1300} pt={50}>
      <Grid>
        <Grid.Col sm={5}>
          <Grid>
            <Grid.Col sm={7}>
              <Title order={3} className="font-[700]">
                JOIN
                <span className="text-[#751F86]"> PASA</span>
                <br />
                GAMING
              </Title>
              <Text color="#0F0F0F" className="leading-10" mt={30} size="lg">
                JOIN THE PASA CLUB <br /> <span className="font-[500] text-[22px]">IT’S EASY AS 1… 2… 3</span>
              </Text>
              <Text color="#757575" className="leading-10 font-[500]" mt={30} size="md">
                CHECK OUT OUR SIX STAGE PROCESS
              </Text>
            </Grid.Col>
            <Grid.Col sm={5}>
              <Image src="/images/pages/hiw/pirate.png" alt="pirate" />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>

      <Grid pb={100}>
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
      </Grid>
      {BonusModal}
    </Container>
  );
}
