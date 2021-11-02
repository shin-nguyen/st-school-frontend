import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const FileField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
       
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}