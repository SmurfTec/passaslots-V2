import { Avatar, Group, Paper, Rating, Text } from '@mantine/core';

type CommentProps = {
  thumbnail: string;
  name: string;
  rating: number;
  description: string;
  message: string;
};

export const Comment = ({ thumbnail, name, rating, description, message }: CommentProps) => {
  return (
    <div>
      <Paper radius={10} p={'xl'} className='text-left'>
        <Group>
          {/* <Avatar src={thumbnail} alt="thumbnail" radius="xl" /> */}
          <div>
            <Text className="font-medium text-xl">{name}</Text>
            <Rating defaultValue={rating}  readOnly size={'xs'} />
            <Text fz="sm" c="dimmed">
              {description}
            </Text>
          </div>
        </Group>
        <Text mt={15} size={'md'}>
          {message}
        </Text>
      </Paper>
    </div>
  );
};
