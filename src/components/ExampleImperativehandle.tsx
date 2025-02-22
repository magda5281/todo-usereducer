import { useState, useRef } from 'react';
import ConfirmationModal from './ConfirmationModal';

export type ConfirmationModalHandle = {
  focusClose: () => void;
  focusConfirm: () => void;
  focusDeny: () => void;
} & HTMLDivElement;
export default function ExampleImperativehandle() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<ConfirmationModalHandle | null>(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Imperative handle usage example </h2>
      <p>
        If you need to access multiple elements in custom component use
        useImperativeHandle hook. One ref in custom componnet refrences all
        elemnts you need
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={() => setOpen(true)}>Open</button>
        <button onClick={modalRef.current?.focusClose}>Focus close</button>
        <button onClick={modalRef.current?.focusConfirm}>Focus confirm </button>
        <button onClick={modalRef.current?.focusDeny}>Focus deny </button>
      </div>

      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
