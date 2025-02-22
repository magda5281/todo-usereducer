import { forwardRef, useImperativeHandle, useRef } from 'react';
import { ConfirmationModalHandle } from './ExampleImperativehandle';

const ConfirmationModal = forwardRef<
  ConfirmationModalHandle,
  { isOpen: boolean; onClose: () => void }
>(({ isOpen, onClose }, ref) => {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const confirmRef = useRef<HTMLButtonElement | null>(null);
  const denyRef = useRef<HTMLButtonElement | null>(null);

  console.log(ref);
  useImperativeHandle(ref, () => {
    return {
      ref,
      focusClose: () => closeRef.current?.focus(),
      focusConfirm: () => confirmRef.current?.focus(),
      focusDeny: () => denyRef.current?.focus(),
    };
  });

  if (!isOpen) return null;

  return (
    <div
      ref={ref} // ✅ Attach ref here
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        borderRadius: '.25rem',
        padding: '1rem',
        position: 'relative',
      }}
    >
      <h2>Title</h2>
      <button
        ref={closeRef}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          borderRadius: '100%',
        }}
        onClick={onClose}
      >
        &times;
      </button>

      <p>Do you confirm?</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button
          ref={confirmRef}
          onClick={onClose}
          style={{ backgroundColor: 'lightgreen' }}
        >
          Yes
        </button>
        <button
          ref={denyRef}
          onClick={onClose}
          style={{ backgroundColor: 'lightpink' }}
        >
          No
        </button>
      </div>
    </div>
  );
});

ConfirmationModal.displayName = 'ConfirmationModal'; // ✅ Fix for better debugging

export default ConfirmationModal;
