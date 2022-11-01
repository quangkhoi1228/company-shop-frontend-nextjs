import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { styled } from '@mui/material/styles';

const SwitchViewMode = () => {
  const [viewMode, setViewMode] = useState('grid');

  const hangeSwitch = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string
  ) => {
    console.log(event, newFormats);
    setViewMode(newFormats);
  };

  return (
    <StyledToggleButtonGroup
      value={viewMode}
      color='primary'
      style={{}}
      exclusive
      size='small'
      onChange={hangeSwitch}
      aria-label='VIEW MODE'
    >
      <ToggleButton value='list' aria-label='list'>
        <ViewListRoundedIcon />
      </ToggleButton>
      <ToggleButton value='grid' aria-label='grid'>
        <GridViewRoundedIcon />
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: 0,
    border: 0,
    background: '#EBF2FF',
    width: '4rem',
    height: '2rem',
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderTopRightRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    },
    '&.Mui-selected': {
      background: 'white !important',
      boxShadow:
        '0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)',
      borderRadius: '4px',
    },
  },
}));

export default SwitchViewMode;
