import { useState, useRef } from 'react';
import CustomInput from './CustomInput';

export type CustomInputHandle = HTMLInputElement & {
  alertHi: () => void;
};

export default function ImperativeHandleComponent() {
  const [value, setValue] = useState('red');
  const inputRef = useRef<CustomInputHandle | null>(null);

  return (
    <div>
      <h2>UseImperativeHandle example </h2>
      <p>
        useImperativeHandle hook if you want your ref to point to something else{' '}
      </p>
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
          inputRef.current?.alertHi();
        }}
      >
        Focus
      </button>
    </div>
  );
}
