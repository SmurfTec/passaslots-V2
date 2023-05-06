import { Avatar, Flex, Grid, Group, Paper, Rating, Text, createStyles } from '@mantine/core';

type CommentProps = {
  thumbnail: string;
  name: string;
  rating: number;
  description: string;
  message: string;
};

const useStyles = createStyles((theme) => ({
  paper: {
    border: '2px solid',
    backgroundColor: 'linear-gradient(to bottom, rgba(167, 76, 154, 1) 100%, rgba(167, 76, 154, 0.19) 19%)',
    textAlign: 'left',
  },
}));

export const Comment = ({ thumbnail, name, rating, description, message }: CommentProps) => {
  const { classes } = useStyles();
  return (
    <div style={{ width: '400px' }}>
      <Paper withBorder className={classes.paper} radius={30} p={'xl'} bg={'transparent'} mr={5}>
        <Text color={'white'} mt={15} size={'md'} mih={250} style={{ fontWeight: '500', fontSize: '17px' }}>
          {message}
        </Text>
        <Rating mb={20} mt={10} defaultValue={rating} readOnly size={'xs'} />
        <Flex>
          <Avatar src={thumbnail} alt="thumbnail" radius="xl" size={'lg'} />
          <Grid.Col>
            <Text mb={0} mt={-5} color={'white'} className="font-medium text-xl">
              {name}
            </Text>
            <Text color={'#808080'} fz="sm" c="dimmed">
              {description}
            </Text>
          </Grid.Col>
        </Flex>
      </Paper>
    </div>
  );
};
