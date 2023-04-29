import { Container, Flex, Text, Title } from '@mantine/core';

export const MiddleHeading = () => {
  return (
    <Container size={1300}>
      <Flex mih={50} gap="md" justify="center" align="flex-start" direction="column" wrap="wrap">
        <Title order={2} className="font-bold uppercase">More ACCESS from the  <span className='text-[#751F86]'>touch <br /> of a finger</span></Title>
        
        <Text size={'sm'} mt={10} maw={500}>
          This is where gaming creators meet life-long gamers. So we understand your daily frustrations when it comes to
          payments above all. We offer a variety of safe and secure payment methods to choose<span className="font-[700]"> from when it comes to
          deposits and withdrawals. View our full list of payment methods that can </span> be used in your region, and learn how
          to make deposits and withdrawals at Pasa Slots (as gamers ourselves being in the industry for 20+ years we
          built this on the forefront of customer satisfaction).
        </Text>
      </Flex>
    </Container>
  );
};
