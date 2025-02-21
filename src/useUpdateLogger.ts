import { useEffect } from 'react';

export default function useUpdateLogger(value: string) {
  useEffect(() => {
    console.log(value);
  });
}
