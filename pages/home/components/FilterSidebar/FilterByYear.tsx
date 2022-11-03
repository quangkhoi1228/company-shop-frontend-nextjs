import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Accordion from 'pages/template/components/Accordion';
import { useState } from 'react';

const FilterByYear = () => {
  const [value, setValue] = useState<string>();
  return (
    <Accordion active={false} headerDefault={'Year of manufacturing'}>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={value === option.value}
                onChange={() => setValue(option.value)}
                name={option.label}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </Accordion>
  );
};

const options: { label: string; value: string }[] = [...new Array(10)]
  .fill(2015, 0, 10)
  .map((item, index) => ({ label: (item + index).toString(), value: item + index }))
  .reverse();

export default FilterByYear;
