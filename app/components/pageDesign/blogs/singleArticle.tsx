import { Grid, Image, Text, Title } from '@mantine/core';

export type SingleArticleProps = {
  image: string;
  date: string;
  title: string;
  author: string;
};

export function SingleArticle({ author, date, image, title }: SingleArticleProps) {
  return (
    <Grid style={{ 
      border: '2px solid #016BE6',
      background: `rgba(217, 217, 217, 0.04)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      borderRadius: '18px',
      width: '558px',
      height: '163px'
      // margin: 'auto',
      // justifyContent: 'space-between'
    }} align="top">
      <Grid.Col xs={5} sm={3}>
        <Image height='auto' width='auto' src={image} alt={image} />
      </Grid.Col>
      <Grid.Col xs={7} sm={9} className="space-y-4 px-[19px]">
        <Title color='#EEEEEE' className="font-[700] leading-[30px] text-[22px] uppercase">
          {title}
        </Title>
        <div className='flex justify-between'>
          <Text color='white' className="font-[400] text-[14px] leading-[20px] opacity-70 mt-[45px]">
            By {author}
          </Text>
          <Text color='white' className="font-[400] text-[14px] leading-[20px] opacity-70 mt-[45px]">
            {date}
          </Text>
        </div>
      </Grid.Col>
    </Grid>
  );
}
