import React, { ChangeEvent } from 'react';

interface FormRowProps {
  name: string;
  labelText?: string;
  type: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormRow: React.FC<FormRowProps> = ({
  name,
  labelText,
  type,
  value,
  handleChange,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;
