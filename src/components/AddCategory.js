import React, { useState } from 'react';

import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <h1>{inputValue}</h1> */}
      <input type="text" value={inputValue} onChange={handleAddInputChange} />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
