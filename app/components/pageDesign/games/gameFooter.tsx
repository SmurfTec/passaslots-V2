import { Button, Container, Text, Title } from '@mantine/core';
import { useBonusModal } from '@pasa/hooks';

export function GameFooter() {
  const [BonusModal, bonusOpen] = useBonusModal();
  return (
    <div className="bg-black">
      <Container  size={1300} className='py-24 md:py-48'>
        <Text className="font-[300]" color="white" size="sm">
          Pasa Slots
        </Text>
        <Title my={40} color="white" order={2}>
          COME ON IN AND DISCOVER THE  EXCITING WINNINGS WAITING FOR YOU TODAY
        </Title>
        <Button
          styles={{
            root: {
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
            },
          }}
          bg="white"
          color="#303347"
          onClick={bonusOpen}
          className="h-12 px-12 rounded-sm text-[14px] font-[700]"
        >
          CLAIM YOUR BONUS!
        </Button>
        {BonusModal}
      </Container>
    </div>
  );
}
