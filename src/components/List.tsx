import { useMemo, useDeferredValue } from 'react';

//useDeferredValue will update the list when there was no chnages in input
// similar to debounce
export default function List({ input }: { input: string }) {
  const deferredInput = useDeferredValue(input);
  const LIST_SIZE = 20000;
  const list = useMemo(() => {
    const l = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
  }, [deferredInput]);
  return <>{list}</>;
}
