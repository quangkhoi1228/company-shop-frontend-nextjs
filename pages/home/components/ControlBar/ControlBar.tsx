import RelatedBar from './RelatedBar';
import SortBy from './SortBy';
import SwitchViewMode from './SwitchViewMode';
const ControlBar = () => {
  return (
    <section className='control-bar'>
      <div className='level'>
        <div className='level-left'>
          <div className='level-item' style={{ minWidth: '6rem' }}>
            <SortBy />
          </div>
        </div>
        <div className='level-right'>
          <SwitchViewMode />
        </div>
      </div>
      <RelatedBar />
    </section>
  );
};

export default ControlBar;
