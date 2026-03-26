'use client';

import { useEffect } from 'react';
import ContactRequestForm, { ContactContext } from './ContactRequestForm';

export default function ContactRequestModal({
  isOpen,
  onClose,
  context,
}: {
  isOpen: boolean;
  onClose: () => void;
  context?: ContactContext;
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-lg bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Richiesta informazioni"
      >
        <div className="flex items-center justify-between border-b border-sage-200 p-4">
          <h3 className="text-lg font-semibold text-sage-900">Richiedi informazioni</h3>
          <button
            onClick={onClose}
            className="text-sage-700 hover:text-sage-900 transition-colors"
            aria-label="Chiudi"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          <ContactRequestForm
            context={context}
            onSuccess={() => {
              // Mostra la conferma e chiudi automaticamente il popup
              setTimeout(onClose, 1200);
            }}
          />
        </div>
      </div>
    </div>
  );
}

