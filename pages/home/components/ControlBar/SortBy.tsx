import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

const SortBy = () => {
  const [sortBy, setSortBy] = useState('use');

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };

  return (
    <FormControl fullWidth size='small'>
      <InputLabel id='sort'>SORT BY</InputLabel>
      <Select
        labelId='sort'
        id='sort-select'
        value={sortBy}
        label='SORT BY'
        onChange={handleChange}
      >
        <MenuItem value={'use'}>Useless first</MenuItem>
        <MenuItem value={'high'}>High first</MenuItem>
        <MenuItem value={'low'}>Low first</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBy;
