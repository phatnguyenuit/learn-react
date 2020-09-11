import React from 'react';
import { connect } from 'react-redux';

import { increase, decrease } from '../../redux/actionCreators';

export function Fetcher() {
  return (
    <div className="flex flex-col fetcher-root">
      <button type="button">Fetch</button>
      <div>Result</div>
    </div>
  );
}

// Select props for Fetcher from state of store
const mapStateToProps = state => {
  return { value: state };
};

// Embed store.dispatch to every single callback func of Fetcher
// by providing a diction of callbacks
const mapDispatchToProps = {
  increase,
  decrease,
};

// Embed store.dispatch to every single callback func of Fetcher
// with custom function mapDispatchToprops
// const mapDispatchToProps = dispatch => {
//   return {
//     increase: count => {
//       console.log('Increase', count);
//       const action = increase(count);
//       dispatch(action);
//     },
//     decrease: count => {
//       console.log('Decrease', count);
//       const action = decrease(count);
//       dispatch(action);
//     },
//   };
// };

// Connect state, embeded dispatch callacks and assign props to Fetcher
export default connect(mapStateToProps, mapDispatchToProps)(Fetcher);

// you can map state to props only
// export default connect(mapStateToProps)(Fetcher);

// you can map state to props only
// export default connect(mapStateToProps)(Fetcher);

// you can map dispatch to props only
// export default connect(null, mapDispatchToProps)(Fetcher);

// Only `dispatch` passed to Fetcher as props.dispatch
// export default connect()(Fetcher);
