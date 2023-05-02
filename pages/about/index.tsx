import { AboutContact, Approach, BottomSubHeading, Content, Goal, Hero, Mission } from '@pasa/components';

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <Content />
      <Approach />
      <Goal />
      <AboutContact />
      <BottomSubHeading />
    </>
  );
}
