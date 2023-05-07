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
    background: 'conic-gradient(from 238.95deg at 66.86% 57.29%, rgba(63, 38, 128, 0.07) 0deg, rgba(167, 76, 154, 0.08) 360deg)',
    backdropFilter: 'blur(38px)',
    // borderStyle: 'solid',
    // borderWidth: '3px',
    border: '3px solid #A74C94',
    // borderImage: 'linear-gradient(180deg, #A74C9A 0%, rgba(167, 76, 154, 0.19) 100%)',
    // boxShadow: '3px 3px linear-gradient(180deg, #A74C9A 0%, rgba(167, 76, 154, 0.19) 100%)',
    // boxShadow: '5px 10px 18px red',
    // border: '2px solid',
    // backgroundColor: 'linear-gradient(to bottom, rgba(167, 76, 154, 1) 100%, rgba(167, 76, 154, 0.19) 19%)',
    textAlign: 'left',
    width: '390px',
    height: '449px',
  },
}));

export const Comment = ({ thumbnail, name, rating, description, message }: CommentProps) => {
  const { classes } = useStyles();
  return (
    // <div style={{ width: '400px' }}>
      <Paper shadow='xs' className={classes.paper} radius={30} p={'xl'} mr={5}>
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
    // </div>
  );
};
