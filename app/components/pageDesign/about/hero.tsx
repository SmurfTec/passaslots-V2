import { BackgroundImage, Group, Text, Title ,Image} from '@mantine/core';
import { ScrollButton } from '@pasa/customComponents';

export function Hero() {
  return (
    <BackgroundImage className="min-h-[85vh] sm:min-h-[92vh] relative" src="/images/pages/about/heroBackground.png">
      <div className="md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 absolute left-2 right-2 -translate-x-0 top-1/2 -translate-y-1/2">
        <div className="text-center">
          <Group position='center'>
            <Title className="font-[500]" order={4}>
              About Us
            </Title>
            <Image src="/images/vector/heroLine.png" width={60} height={1} alt="vector" />
          </Group>
          <Text color="black" className="font-[400]" my={28} size={28}>
            25+ full-time professionals, 1 goal:
          </Text>
          <Title color="black" mt={95} className="font-[700]" order={3}>
            To create the world's most entertaining and user-friendly online game room platform.
          </Title>
          <Title mb={20} size={32} color="#0F0F0F" mt={20} className="font-[400]" order={3}>
            How are we going to get there?
          </Title>
        </div>
      </div>
      <ScrollButton pointerPosition='DOWN' className='bottom-20 left-1/2 absolute' />
    </BackgroundImage>
  );
}
