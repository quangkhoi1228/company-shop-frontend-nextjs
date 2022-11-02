import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Accordion from 'pages/template/components/Accordion';
import { useState } from 'react';

const FilterByOption = () => {
  const [value, setValue] = useState<string>();
  return (
    <Accordion
      active={false}
      headerDefault={'Collapsed filters'}
      headerActive={'Expanded Filters'}
    >
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

const options: { label: string; value: string }[] = [
  {
    label: 'Recommended',
    value: 'recommended',
  },
  {
    label: 'Recently Added',
    value: 'recent',
  },
  {
    value: 'price-low',
    label: 'Price: Low → High',
  },
  {
    value: 'price-high',
    label: 'Price: High → Low',
  },
];

export default FilterByOption;
