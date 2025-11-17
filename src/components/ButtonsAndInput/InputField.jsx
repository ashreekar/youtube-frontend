import React, { useId } from 'react';

const InputField = (
    {
      type = "text",
      className = "",
      label,
      id,
      labelHidden = false,
      ...props
    },
    ref
  ) => {
    const uid = useId();
    const inputId=id || uid;

    return (
      <div>
        <label
          htmlFor={inputId}
          className={labelHidden ? "hidden" : "block"}
        >
          {label}
        </label>

        <input
          id={id}
          ref={ref}
          type={type}
          className={className}
          {...props}
        />
      </div>
    );
  }

export default InputField;