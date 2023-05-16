import { Grid, Image, Text, Title } from '@mantine/core';

export type SingleArticleProps = {
  image: string;
  date: string;
  title: string;
  author: string;
};

export function SingleArticle({ author, date, image, title }: SingleArticleProps) {
  return (
    <Grid justify='center' style={{ 
      border: '2px solid #016BE6',
      background: `rgba(217, 217, 217, 0.04)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      borderRadius: '18px',
      maxWidth: '558px',
      minHeight: '163px'
      // margin: 'auto',
      // justifyContent: 'space-between'
    }} align="center">
      <Grid.Col span={3}>
        <Image className='md:!h-[auto] md:!w-[auto] sm:!h-[93px] xs:!w-[93px] xs:!h-[93px] sm:!w-[93px]' src={image} alt={image} />
      </Grid.Col>
      <Grid.Col span={9} className="space-y-4 px-[19px]">
        <Title color='#EEEEEE' className="font-[700] md:!leading-[30px] sm:!leading-[20px] xs:!leading-[20px] md:!text-[22px] sm:!text-[16px] xs:!text-[16px] uppercase">
          {title}
        </Title>
        <div className='flex justify-between'>
          <Text color='white' className="font-[400] md:!text-[14px] sm:!text-[10px] xs:!text-[10px] leading-[20px] opacity-70 mt-[45px]">
            By {author}
          </Text>
          <Text color='white' className="font-[400] md:!text-[14px] sm:!text-[10px] xs:!text-[10px] leading-[20px] opacity-70 mt-[45px]">
            {date}
          </Text>
        </div>
      </Grid.Col>
    </Grid>
  );
}
