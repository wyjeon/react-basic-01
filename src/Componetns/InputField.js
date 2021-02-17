import React from 'react';

const InputField = ({ type, value, placeholder, onChange, errorMessage }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div style={{ color: 'red' }}>{errorMessage}</div>
      <br />
    </>
  );
};

export default InputField;
