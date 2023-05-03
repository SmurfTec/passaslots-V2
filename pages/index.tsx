import { Container, Image, Space, Title } from '@mantine/core';
import {
  // BottomHeading,
  BottomSubHeading,
  BottomSubHeading2,
  HighTideHome,
  HomeCollection,
  HomeHero,
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
      {/* <HomeHero />
      <WinHome />
      <WhyPasaHome />
      <HighTideHome /> */}
      <HomeCollection />
      <MiddleHeading />
      <TestimonialCarousel />
      <BottomSubHeading2 />
      <BottomSubHeading />
      {/* <Space h={100} /> */}
      {/* <BottomHeading /> */}
    </div>
  );
}

export default Index;
