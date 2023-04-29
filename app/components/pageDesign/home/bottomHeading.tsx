import { Button, Container, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';

export const BottomHeading = () => {
  return (
    // <Flex mih={350} bg="#181A24" gap="md" justify="flex-start" align="center" direction="row" wrap="nowrap">
    //   <Stack align="flex-start" className='md:ml-20 ml-5'>
    //     <Text color="white" className="text-5xl font-bold">
    //       Set Sail for Big
    //     </Text>
    //     <Text color="#C1AA84" className="text-5xl font-bold">
    //       Wins and Fun
    //     </Text>
    //     <Button mt={15} size='lg' className='text-black hover:text-white text-sm font-bold' bg='white'>FIND OUT MORE</Button>
    //   </Stack>
    // </Flex>
    <div className="bg-black">
      <Container size={1300} className="py-16 md:pb-28 md:pt-20">
        <Title my={40} color="white" order={2}>
          Set Sail for Big <br />
          <span className="text-[#C1AA84]">Wins and Fun</span>
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
          className="h-12 px-12 rounded-sm text-[14px] font-[700]"
          component={NextLink}
          href="/distributor-signup"
        >
          FIND OUT MORE
        </Button>
      </Container>
    </div>
  );
};
