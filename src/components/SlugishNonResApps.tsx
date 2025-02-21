// fixing slugish non responsive applications with either usetransition hook or useDeferredValue hook

import { useState } from 'react';
import List from './List';

export default function SlugishNonResApps() {
  const [input, setInput] = useState('');
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  return (
    <div>
      <input type='text' value={input} onChange={handleChange} />
      <List input={input} />
    </div>
  );
}
