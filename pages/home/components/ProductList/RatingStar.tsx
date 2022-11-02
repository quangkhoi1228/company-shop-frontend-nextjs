import { spawn } from 'child_process';
import { start } from 'repl';

const RatingStar = ({ point }: { point: number }) => {
  const arrayLength = point / 1;
  return (
    <div className='rating-star'>
      <div className='stars'>
        {[...new Array(Number(10))]
          .fill(1, 0, point / 1)
          .map(
            (value, index) =>
              value && <span key={index} className='full-star' />
          )}
        {point % 1 > 0 && <span className='half-star' />}
      </div>
      <div className='point'>{point}</div>
    </div>
  );
};

export default RatingStar;
