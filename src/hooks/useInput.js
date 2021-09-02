import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      onChange: event => {
        event.target.type === 'file' ? 
        setValue(event.target.files[0])
        :
        setValue(event.target.value)
      }
    }
  };
};