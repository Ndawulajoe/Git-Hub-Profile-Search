import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

export default function SearchBar({getData,handleOnChenges}) {
  const theme = useMantineTheme();
const handleClick=()=>{
    getData()
}

  return (
    <TextInput onChange={handleOnChenges}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
    //   radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === 'ltr' ? (
            <IconArrowRight size="1.1rem" stroke={1.5} onClick={handleClick} />
          ) : (
            <IconArrowLeft size="1.1rem" stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Search questions"
      rightSectionWidth={42}
    //   {...props}
    />
  );
}