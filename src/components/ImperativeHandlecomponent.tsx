import { useState, useRef, useEffect } from 'react';
import CustomInput from './CustomInput';

export default function ImperativeHandleComponent() {
  const [value, setValue] = useState('red');
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    console.log('Setting focus');
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <h2>UseImperativeHandle example</h2>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        style={{ fontSize: '1rem' }}
      />
      <br />
      <button
        onClick={() => {
          console.log('Ref:', inputRef.current); // Check if ref is correctly set
          inputRef.current?.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
}
