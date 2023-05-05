import { Avatar, Card, Center, Divider, Group, Space, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@pasa/customComponents';
import { useState } from 'react';
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
  const [view, setView] = useState(10);
  const setViewData = () => {
    if(view === 10) {
      setView(data.length);
    } else {
      setView(10);
    }
  };
  return (
    <Card className='px-0' py={mediumdScreen ? 30 : 20} px={mediumdScreen ? 50 : 10} radius={20} bg='transparent'>
      {/* <Title mb={30} order={4} color={title === 'Top Winners' ? '#F65151' : '#21C3C3'}>
        {title}
      </Title> */}
      {/* <Carousel
        delay={2000}
        align="start"
        height={280}
        slideSize={50}
        // draggable={false}
        dragFree={false}
        loop
       
        slideGap={0}
        orientation="vertical"
        slides={ */}
          {data.slice(0, view).map((item, index) => (
          <div key={index}>
            <Group 
            className={(view === 10 && index === 9) ? ' bg-[linear-gradient(0deg, #1A0E37 -61.35%, rgba(26, 14, 55, 0.49) 185.81%)] opacity-25' : ''} mt="lg" position="apart">
              <Center className='items-start'>
                <Avatar src={'/images/winer/car.png'} radius="sm" size={mediumdScreen ? 'lg' : 'md'} />
                <Space w={mediumdScreen ? 'xl' : 'md'} />
                <div className="space-y-1">
                  <Text color='white' className="font-[600] leading-[18px] tracking-[0.0125em] text-[16px]" size={mediumdScreen ? 'lg' : 'md'}>
                    {item.Username}
                  </Text>
                  <Text color='white' size={mediumdScreen ? 'sm' : 'xs'} className="font-400 leading-[12px] tracking-[0.0125em] text-[11px]">
                    {item.Game}
                  </Text>
                </div>
              </Center>
              <Center className="space-x-3">
                <Text color='white' size={mediumdScreen ? 16 : 12} className="text-[14px] leading-[15px] tracking-[0.0125em] font-[600]">
                  won
                </Text>
                <Text color='#50A1FF' size={mediumdScreen ? 25 : 20} className="text-[25px] leading-[27px] tracking-[0.0125em] font-[600]">
                  {item.Amount}
                </Text>
              </Center>
            </Group>
            {index < data.length - 1 && <Divider color='#21C3C3' opacity={0.5} mt={20} size={2} />}
          </div>
        ))}
      {/* /> */}
      <div className='text-center'>
        <Text onClick={setViewData} color='white' pt={60} pb={20} className='cursor-pointer font-[600] leading-[27px] tracking-[0.0125em] text-[25px] uppercase'>
          {view === 10 ? 'View More' : 'View Less'}
        </Text>
      </div>
    </Card>
  );
};
