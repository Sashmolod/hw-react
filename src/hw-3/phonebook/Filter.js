import React from 'react';

const Filter = ({ value, filterContact }) => (
  <label>
    Search<br />
    <input type="text" value={value} onChange={filterContact} />
  </label>
);

export default Filter;