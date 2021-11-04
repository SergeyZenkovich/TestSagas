import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

type Props = {
    personIds: number[];
    setPersonsIds: React.Dispatch<React.SetStateAction<number[]>>;
}

type UserType = {
    id: number;
    name: string;
}


export const FilterComponent: React.FC<Props> = ({personIds, setPersonsIds}) => {
    const [allUsers, setAllUsers] = useState<UserType[]>([]);
    const [personName, setPersonName] = useState<string[]>([]);

    useEffect(() => {
        const getUsers = async() =>{
            const users = await(await fetch('https://jsonplaceholder.typicode.com/users')).json();
            setAllUsers(users);
        }
        getUsers();
    }, [])

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    const handleIds = (id: number)=> {
        const newArray = personIds.includes(id) ? [...personIds].filter((arrayId)=> id !== arrayId) : [...personIds, id];
        setPersonsIds(newArray);
        console.log(personIds);
    }

    return (
        <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {allUsers.map((el: UserType) => (
              <MenuItem
                key={el.id}
                value={el.name}
                onClick={()=> {handleIds(el.id)}}
              >
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
