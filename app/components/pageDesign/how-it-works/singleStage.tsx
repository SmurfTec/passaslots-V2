import { Button, Card, Group, Image, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useBonusModal } from '@pasa/hooks';

export type SingleStageProps = {
  image: string;
  title: string;
  content: string;
  subTitle?: string;
  button?: string;
  link?: string;
  modalOpen: ()=> void;
};


export function SingleStage({ content, image, title, button, link, subTitle, modalOpen }: SingleStageProps) {
  
  return (
    <>
    <Card className="min-h-[370px]" padding={40} radius={20} withBorder style={{backgroundColor:'#F2F2F2',borderColor:'#21C3C3',border:'3px solid #21C3C3'}}>
      <Image src={image} height={80} width={80} alt="Norway" />
      <Text my={20} weight={700} className="uppercase">
        {title}
      </Text>
      {!!subTitle ? (
        <>
          <Title className="font-[400]" order={6} opacity={0.8}>
            {subTitle}
          </Title>
          <Text size={12} mt={20} opacity={0.6}>
            {content}
          </Text>
        </>
      ) : (
        <Text mt={20} color="#0F0F0F" className="font-[400] tracking-[0.005em] leading-6" size="sm">
          {content}
        </Text>
      )}

      {!!button && !!link ? (
        <Group>
          <Button mt={'20px'} onClick={modalOpen} >
            {button}
          </Button>
          <Text style={{marginBottom: "-20px"}} size={10} className='cursor-pointer' onClick={modalOpen} underline>
            {link}
          </Text>
        </Group>
      ): undefined} 
    </Card>
    
    </>
  );
}
