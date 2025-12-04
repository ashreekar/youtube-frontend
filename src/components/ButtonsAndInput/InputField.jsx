import React, { useId, forwardRef } from 'react';

// custom input compoent that helps in input field filling
// forward ref passes the ref to component from parent component
const InputField = forwardRef(function InputField(
  {
    type = "text",
    className = "",
    label,
    id,
    labelHidden = false,
    ...props
  },
  ref
) {
// ref will not be part of prop
  const uid = useId(); //assigning unique id taht helps to map label and input
  const inputId = id || uid;

  return (
    <div>
      <label
        htmlFor={inputId}
        className={labelHidden ? "hidden" : "block"}
      >
        {label}
      </label>

      <input
        id={inputId}
        // the ref will be in the parent compoent so it can controlle the component
        ref={ref}
        type={type}
        className={className}
        {...props}
      />
    </div>
  );
});

export default InputField;