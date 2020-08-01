import React from 'react';

export default function FunctionalComponent(props) {
  return (
    <div>
      I'm a functional component with props:
      <br />
      {JSON.stringify(props)}
    </div>
  );
}
