import { Carousel } from '@mantine/carousel';
import { Button, Image, Title, Grid } from '@mantine/core';

export type SingleSlotProps = {
  image: string;
  text: string;
};

export function SingleSlot({ image, text }: SingleSlotProps) {
  return (
    <>
      <Image height={243} width={288} src={image} alt={image} />
      <div className='flex justify-between items-center w-[288px]'>
        <Title mt={10} className='font-[600] text-[24px] leading-[28px] tracking-[0.0125em]'>{text}</Title>
        <Button mt={10} styles={{
          root: {
            border: 'none',
            background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
            padding: '7px 25px',
            letterSpacing: '0.0125em',
            // boxShadow: 'inset 0 0 2px 2px #F6CAA7',
            '&:hover': {
              background: 'linear-gradient(182.04deg, #2072D2 1.72%, #A74C9A 86.43%)',
            },
            fontSize: '14px',
            lineHeight: '17px',
            // textTransform: 'uppercase',
            height: '31px',
            width: '78px',
          },
          label: {
            // marginBottom: '-2px',
            fontSize: '14px',
            lineHeight: '17px'
          },
        }}
        radius={41}
        className='font-[500]'>
          Play
        </Button>
      </div>
    </>
  );
}
