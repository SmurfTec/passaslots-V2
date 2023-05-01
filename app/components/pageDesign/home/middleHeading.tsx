import { Container, Flex, Text, Title, BackgroundImage, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  backdrop: {
    backgroundColor: '#150B2E',
    backgroundImage: "url('/images/pages/home/middleHeadingImga.png')",
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: '100vh', 
    position: 'relative',
    // width: '100%',
    // height: '100vh',
  },
}));

export const MiddleHeading = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.backdrop}>
      <Container size={1300}>
        <Flex ml={-150} py={100} mih={50} gap="md" justify="center" align="flex-start" direction="column" wrap="wrap">
          <Title mt={80} mb={100} color={'white'} order={2} className="font-bold uppercase">More ACCESS from the touch of a finger</Title>
          <Text color={'white'} size={'lg'} mt={50} maw={700}>
            This is where gaming creators meet life-long gamers. So we understand your daily frustrations when it comes to
            payments above all. We offer a variety of safe and secure payment methods to choose<span className="font-[700]"> from when it comes to
            deposits and withdrawals. View our full list of payment methods that can </span> be used in your region, and learn how
            to make deposits and withdrawals at Pasa Slots (as gamers ourselves being in the industry for 20+ years we
            built this on the forefront of customer satisfaction).
          </Text>
        </Flex>
      </Container>
    </div>
  );
};
