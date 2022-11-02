import { Chip, Stack } from '@mui/material';

export interface RelatedDataType {
  name: string;
  code: string;
}
const RelatedBar = () => {
  return (
    <section className='related-bar'>
      <Stack direction='row' spacing={1} alignItems='center'>
        <span style={{ fontSize: '0.875rem' }}>Related</span>
        {relatedList.map((item: RelatedDataType) => {
          const isActive = item.code === 'worldwide-shipping';
          return (
            <Chip
              key={item.name}
              style={{
                overflow: 'initial',
                cursor: 'pointer',
                color: isActive ? 'white' : '#4A4B57',
                backgroundColor: isActive ? '#9DC2FF' : '#EDEDF0',
                fontSize: '0.875rem',
              }}
              label={item.name}
            />
          );
        })}
      </Stack>
    </section>
  );
};

export const relatedList: RelatedDataType[] = [
  {
    name: 'worldwide shipping',
    code: 'worldwide-shipping',
  },
  { name: 'under $50', code: '' },
  { name: 'kitten', code: '' },
  {
    name: 'plastic plugs',
    code: '',
  },
  { name: 'pucker shoes', code: '' },
  {
    name: 'vintage typewriter',

    code: '',
  },
];

export default RelatedBar;
