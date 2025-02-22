import { forwardRef } from 'react';

const CustomInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { style?: React.CSSProperties }
>(({ style, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      style={{
        padding: '.25rem',
        borderBottom: '.2em solid black',
        borderTopRightRadius: '.25rem',
        borderTopLeftRadius: '.25rem',
        ...style,
      }}
    />
  );
});

// ✅ Set a display name to avoid potential issues with refs
CustomInput.displayName = 'CustomInput';

export default CustomInput;
