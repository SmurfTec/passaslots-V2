import { Container, Image, Space, Title } from '@mantine/core';
import {
  BottomHeading,
  BottomSubHeading,
  BottomSubHeading2,
  HighTideHome,
  HomeBottomCarousel,
  HomeCollection,
  HomeHero,
  HomeTopCarousel,
  MiddleHeading,
  TestimonialCarousel,
  WhyPasaHome,
  WinHome,
} from '@pasa/components';

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export function Index() {
  return (
    <div>
      <HomeHero />
      <WinHome />
      <div className="my-20">
        <HomeTopCarousel />
      </div>
      <WhyPasaHome />
      <HighTideHome />
      <HomeCollection />
      <MiddleHeading />
      <div className="my-20">
        <Image alt="" src="images/pages/home/middle.png" />
      </div>
      <Container size={1300} className="my-10">
        <Title order={2} className="font-bold uppercase">
          What our community
        </Title>
        <Title order={2} className="font-bold uppercase">
          says about us
        </Title>
      </Container>
      <TestimonialCarousel />
      <BottomSubHeading2 />
      <div className="my-24">
        <HomeBottomCarousel />
      </div>
      <BottomSubHeading />
      <Space h={100} />
      <BottomHeading />
    </div>
  );
}

export default Index;
