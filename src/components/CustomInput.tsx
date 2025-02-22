import { forwardRef, useImperativeHandle } from 'react';

const CustomInput = forwardRef((props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return {
        alertHi: () => {
          alert('Hi');
        },
      };
    },
    []
  );
  return (
    <input
      ref={ref}
      {...props}
      style={{
        padding: '.25rem',
        borderBottom: '.2em solid black',
        borderTopRightRadius: '.25rem',
        borderTopLeftRadius: '.25rem',
      }}
    />
  );
});

// ✅ Set a display name to avoid potential issues with refs
CustomInput.displayName = 'CustomInput';

export default CustomInput;
