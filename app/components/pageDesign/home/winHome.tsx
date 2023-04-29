import { Button, Container, Grid, Text, Title } from '@mantine/core';
import { useBonusModal } from '@pasa/hooks';
export function WinHome() {
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <Container size={1300} pt={100}>
      <Grid align="center ">
        <Grid.Col sm={6}>
          <Title mb={20} order={3} className="font-[700] uppercase">
            Your Wins <br /> Your <span className="text-[#697286]">Gaming</span>
            <br /> Your way
          </Title>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Text mt={20} color="#0F0F0F" className="font-[400] tracking-[0.005em] leading-6" size="sm">
            Every kind of game imaginable, a safe and secure environment <br /> to play in, and quick top-up{' '}
            <span className="font-[700]">solutions to fund your account</span> <br /> with.
          </Text>
          <div className="text-right mt-8">
            <Button onClick={bonusOpen} className="h-12 px-12 rounded-md text-[14px] font-[300]">
              SIGN UP
            </Button>
          </div>
        </Grid.Col>
      </Grid>
      {BonusModal}
    </Container>
  );
}
