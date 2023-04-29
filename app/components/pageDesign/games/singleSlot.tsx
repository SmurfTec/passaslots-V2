import { Image, Title } from '@mantine/core';

export type SingleSlotProps = {
  image: string;
  text: string;
};

export function SingleSlot({ image, text }: SingleSlotProps) {
  return (
    <>
      <Image height="300px" src={image} alt={image} />
      <Title mt={10} order={4}>{text}</Title>
    </>
  );
}
