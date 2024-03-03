import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [queryStr, setQueryStr] = useState('');

  const handleChangeQuery = e => {
    setQueryStr(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(queryStr);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={queryStr}
        name="query"
        type="text"
        onChange={handleChangeQuery}
      />
      <button>Search</button>
    </form>
  );
};

export default Form;
