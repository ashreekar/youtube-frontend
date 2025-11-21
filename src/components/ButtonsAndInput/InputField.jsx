import React, { useId, forwardRef } from 'react';

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
  const uid = useId();
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
        ref={ref}
        type={type}
        className={className}
        {...props}
      />
    </div>
  );
});

export default InputField;