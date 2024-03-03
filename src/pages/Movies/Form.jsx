import React, { useState } from 'react';

import s from './Form.module.css';

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
    <form onSubmit={handleSubmit} className={s.SearchForm}>
      <input
        value={queryStr}
        name="query"
        type="text"
        onChange={handleChangeQuery}
        className={s.SearchFormInput}
      />
      <button className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>
    </form>
  );
};

export default Form;
