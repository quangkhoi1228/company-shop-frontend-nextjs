import { ReactNode, useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CLS } from 'utils/utils';
const Accordion = ({
  headerDefault,
  headerActive = headerDefault,
  children,
  active = false,
}: {
  headerDefault: ReactNode;
  headerActive?: ReactNode;
  children: ReactNode;
  active?: boolean;
}) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <section
      className={CLS('accordion', {
        'is-active': isActive,
      })}
    >
      <header
        className='accordion__header'
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? headerActive : headerDefault}
        <span className='accordion__icon'>
          <ExpandMoreIcon className='icon' />
        </span>
      </header>
      <section className='accordion__body'>{children}</section>
    </section>
  );
};
export default Accordion;
