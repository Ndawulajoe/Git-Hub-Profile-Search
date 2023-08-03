import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

export default function SearchBar({getData,handleOnChenges}) {
  const theme = useMantineTheme();
const handleClick=()=>{
    getData()
}

  return (
    <div className='m-8 ...'>
      <TextInput onChange={handleOnChenges}
      style={{width:'70%',display:'flex',justifyContent:'center',fontSize:'10px'}}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
    //   radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32}  color={theme.primaryColor} >
          
            <IconArrowRight size="2.1rem" color={theme.primaryColor} stroke={1.5} onClick={handleClick} />
          
            {/* <IconArrowLeft size="1.1rem" stroke={1.5} /> */}
         
        </ActionIcon>
      }
      placeholder="Search For User "
      rightSectionWidth={42}
      // styles={{}}
    //   {...props}
    />
    </div>
    
  );
}