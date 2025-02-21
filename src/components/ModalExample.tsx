import { useLayoutEffect, useRef, useState } from 'react';

export default function ModalExample() {
  const [show, setShow] = useState(false);
  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);
  return (
    <div>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click here
      </button>
      {show && (
        <div style={{ position: 'absolute' }} ref={popup}>
          This is a popup
        </div>
      )}
    </div>
  );
}
