import { PDAwaken, PDBusiness, PDExperience, PDHero, PDProfit } from '@pasa/components';

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function PasaForDistributor() {
  return (
    <>
      <div style={{ marginTop: '120px' }}>
        <PDHero />
        <PDProfit />
        <PDExperience />
        <PDAwaken />
        <PDBusiness />
      </div>
    </>
  );
}
