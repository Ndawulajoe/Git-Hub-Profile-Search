import { createStyles, Card, Avatar, Text, Group, Button, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

export default function UserCardImage({ image, name, stats,location,login,joined }) {
  if(!location){
    return null;
  }
  const { classes, theme } = useStyles();
  const joinedDate = new Date(joined);
      const formattedJoinedDate = joinedDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
  const items = stats.map((stat) => (
    <div  key={stat.label} >
      <Text  ta="center" fz="lg" fw={500} style={{backgroundColor:"black",color:'white',borderRadius:'5px'}}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" >
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <div className='m-8 ... w-100 ... flex justify-center ... h-96 ...'>
       <Card withBorder padding="xl" radius="md" className={classes.card} >
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140, backgroundRepeat: 'no' }} />
      
      <Avatar src={image} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
      <Text ta="center" fz="lg" fw={500} mt="sm" >
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        @{login}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
     
       <h2 className='text-base ..' >{`Lives At ${location}   .   Joined ${formattedJoinedDate}`}</h2>
      </Text>
  
      <Group mt="md" position="center" spacing={30} >
        {items}
      </Group>
      <Button
        fullWidth
        // radius="md"
        // mt="xl"
        // size="md"
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        Follow
      </Button>
    </Card>
    </div>
   
  );
}
