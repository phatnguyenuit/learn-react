import React from 'react';
import { connect } from 'react-redux';

import { fetchURL } from '../../redux/actionCreators';

export function Fetcher(props) {
  const { loading, data, error, fetchURL } = props;
  return (
    <div className="flex flex-col fetcher-root">
      <button type="button" onClick={fetchURL}>
        Fetch
      </button>
      {loading && <p>Loading.....</p>}
      {!loading && data && (
        <ol>
          {data.map(user => (
            <li key={user.id}>
              <span>{user.name}</span> [<span>{user.email}</span>]
            </li>
          ))}
        </ol>
      )}
      {!loading && error && <div>{error}</div>}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  fetchURL,
};

export default connect(mapStateToProps, mapDispatchToProps)(Fetcher);
