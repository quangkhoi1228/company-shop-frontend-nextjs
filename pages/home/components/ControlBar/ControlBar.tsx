import RelatedBar from './RelatedBar';
import SortBy from './SortBy';
import SwitchViewMode from './SwitchViewMode';
import SortIcon from '@mui/icons-material/Sort';
const ControlBar = () => {
  return (
    <section className='control-bar'>
      <div className='level  is-hidden-mobile'>
        <div className='level-left'>
          <div className='level-item ' style={{ minWidth: '6rem' }}>
            <SortBy />
          </div>
        </div>
        <div className='level-right'>
          <SwitchViewMode />
        </div>
      </div>
      <div className='level is-mobile is-hidden-tablet is-hidden-desktop has-margin-bottom-1rem' >
        <div className='level-left'>
          <div className='level-item'>
            <span style={{ fontSize: '1.5rem' }}>🔥 Popularno</span>
          </div>
        </div>
        <div className='level-right'>
          <button className='button is-green is-light'>
            <span className='icon'>
              <SortIcon />
            </span>
            <span className='text'>Sort by</span>
          </button>
        </div>
      </div>
      <RelatedBar />
    </section>
  );
};

export default ControlBar;
