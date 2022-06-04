import React from 'react'
const useForm = (initialState = {}) => {

  const [values, setValue] = React.useState(initialState)

  const resetForm = () => {
    setValue(initialState);
  }

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  return [values, handleInputChange, resetForm]
}

export default useForm