import { Container, Image, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ScrollButton } from '@pasa/customComponents';

export function DistributorHero() {
  const matches = useMediaQuery('(max-width:520px)')
  return (
    <Container size={1300} className="min-h-[65vh] sm:min-h-screen relative">
      <div className="absolute top-1/4 -translate-y-1/4">
        <div className="text-left">
          <Title mt={30} className="font-[700] uppercase" order={1}>
            THE LEADING <span className="text-[#CAC6CB]"> PARTNER GAMING PLATFORM</span>
          </Title>
          <Title ml={10} mt={20} className="font-[500]" order={5}>
            Pasa Slots
          </Title>
        </div>
      </div>
      <div className="absolute bottom-0 md:bottom-20 md:right-20">
        <Image src="/images/pages/distribution/graph.png" alt="graph" height={matches ? 250 :450} width={matches ? 350 :500} />
      </div>
      <ScrollButton pointerPosition="DOWN" className="absolute bottom-14 left-1/2" />
    </Container>
  );
}
