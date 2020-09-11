import React from 'react';
import { connect } from 'react-redux';

import { increase, decrease } from '../../redux/actionCreators';

export function Counter(props) {
  const { value, increase, decrease } = props;

  const handleDecreaseWithCount = count => () => {
    decrease(count);
  };

  const handleIncreaseWithCount = count => () => {
    increase(count);
  };

  const handleIncrease = () => {
    increase();
  };
  const handleDecrease = () => {
    decrease();
  };

  return (
    <div className="flex flex-row flex-align-center counter-root">
      <button type="button" onClick={handleDecreaseWithCount(2)}>
        --
      </button>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
      <span className="flex-grow text-center">{value}</span>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
      <button type="button" onClick={handleIncreaseWithCount(2)}>
        ++
      </button>
    </div>
  );
}

// Select props for Counter from state of store
const mapStateToProps = state => {
  return { value: state };
};

// Embed store.dispatch to every single callback func of Counter
const mapDispatchToProps = dispatch => {
  return {
    increase: count => {
      console.log('Increase', count);
      const action = increase(count);
      dispatch(action);
    },
    decrease: count => {
      console.log('Decrease', count);
      const action = decrease(count);
      dispatch(action);
    },
  };
};

// Connect state, embeded dispatch callacks and assign props to Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// you can map state to props only
// export default connect(mapStateToProps)(Counter);

// you can map state to props only
// export default connect(mapStateToProps)(Counter);

// you can map dispatch to props only
// export default connect(null, mapDispatchToProps)(Counter);

// Only `dispatch` passed to Counter as props.dispatch
// export default connect()(Counter);
