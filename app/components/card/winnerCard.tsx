import { Avatar, Card, Center, Divider, Group, Space, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@pasa/customComponents';
export type CardData = Array<{
  Username: string;
  Game: string;
  Amount: string;
}>;
type WinnerCardProps = {
  title: string;
  data: CardData;
};
export const WinnerCard = ({ title, data }: WinnerCardProps) => {
  const mediumdScreen = useMediaQuery('(min-width: 1150px)', true);
  return (
    <Card shadow="lg" py={mediumdScreen ? 30 : 20} px={mediumdScreen ? 50 : 10} radius={20} withBorder>
      <Title mb={30} order={4} color={title === 'Top Winners' ? '#F65151' : '#21C3C3'}>
        {title}
      </Title>
      <Carousel
        delay={2000}
        align="start"
        height={280}
        slideSize={50}
        // draggable={false}
        dragFree={false}
        loop
       
        slideGap={0}
        orientation="vertical"
        slides={data.map((item, index) => (
          <div key={index}>
            <Group mt="lg" position="apart">
              <Center>
                <Avatar src={'/images/winer/car.png'} radius="sm" size={mediumdScreen ? 'lg' : 'md'} />
                <Space w={mediumdScreen ? 'xl' : 'md'} />
                <div className="space-y-1">
                  <Text className="font-semibold" size={mediumdScreen ? 'lg' : 'md'}>
                    {item.Username}
                  </Text>
                  <Text size={mediumdScreen ? 'sm' : 'xs'} className="font-normal">
                    {item.Game}
                  </Text>
                </div>
              </Center>
              <Center className="space-x-3">
                <Text size={mediumdScreen ? 16 : 12} className="font-semibold">
                  won
                </Text>
                <Text size={mediumdScreen ? 25 : 20} className="font-semibold">
                  {item.Amount}
                </Text>
              </Center>
            </Group>
            {index < data.length - 1 && <Divider mt={20} size={2} />}
          </div>
        ))}
      />
    </Card>
  );
};
