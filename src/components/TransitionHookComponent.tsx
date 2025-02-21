import { useState, useTransition } from 'react';
//list with a lot of data inside of it
export default function TransitionHookComponent() {
  //useTransition sets low/high priority
  //use it only when you really need it, when you have code that slows your application
  // otherwise app renders more times
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');

  const [list, setList] = useState<string[]>([]);

  const LIST_SIZE = 20000;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);

    startTransition(() => {
      //it is low priority
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div>
      <input type='text' value={input} onChange={handleChange} />
      <ul>
        {isPending
          ? 'Loading...'
          : list.map((item, index) => {
              return <li key={index}> {item}</li>;
            })}
      </ul>
    </div>
  );
}
