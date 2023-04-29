import { Button, Container, Group, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';

export const BottomSubHeading2 = () => {
  return (
    <Container size={1300}>
      <Group position="apart" className="space-y-5">
        <div className="space-y-1">
          <Title order={2} className="font-bold uppercase">
            Where gaming
          </Title>
          <Title order={2} color="#C1AA84" className="font-bold uppercase">
            creators meet
          </Title>
          <Title order={2} className="font-bold uppercase">
            life long gamers
          </Title>
        </div>
        <div className="md:ml-[-80px]">
          <Text className="text-base font-normal md:mt-96" maw={350}>
            Designed by renowned software developers, and featuring incredible graphics and audio, as well as
            payout-packed symbols, no two gaming sessions will be the same, ensuring excitement at every spin.
          </Text>
        </div>
        <div>
          <Button mt={15} size="lg" className="text-sm font-bold" component={NextLink} href="/distributor-signup">
            FIND OUT MORE
          </Button>
        </div>
      </Group>
    </Container>
  );
};
