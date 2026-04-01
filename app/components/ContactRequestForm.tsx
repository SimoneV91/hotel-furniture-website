'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export type ContactContext = {
  sourcePage?: string;
  cardTitle?: string;
  cardDescription?: string;
};

export default function ContactRequestForm({
  context,
  onSuccess,
}: {
  context?: ContactContext;
  onSuccess?: () => void;
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    nome: '',
    citta: '',
    email: '',
    motivo: 'richiesta_progetto',
    messaggio: '',
    consenso: false,
    website: '', // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) newErrors.nome = 'Il nome e cognome sono obbligatori';
    if (!formData.citta.trim()) newErrors.citta = 'La città è obbligatoria';

    if (!formData.email.trim()) newErrors.email = "L'email è obbligatoria";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Inserisci un'email valida";

    if (!formData.consenso)
      newErrors.consenso = 'È necessario accettare i termini e condizioni e la privacy policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      if (!executeRecaptcha) {
        setErrors({ submit: 'Errore di sicurezza. Ricarica la pagina e riprova.' });
        return;
      }

      const recaptchaToken = await executeRecaptcha('contact_form');
      if (!recaptchaToken || recaptchaToken.trim() === '') {
        setErrors({ submit: 'Errore di verifica sicurezza. Ricarica la pagina e riprova.' });
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.nome,
          email: formData.email,
          message: formData.messaggio,
          citta: formData.citta,
          motivo: formData.motivo,
          website: formData.website,
          recaptchaToken,
          context,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrors({ submit: data.error || "Errore durante l'invio. Riprova più tardi." });
        return;
      }

      setSubmitSuccess(true);
      setFormData({
        nome: '',
        citta: '',
        email: '',
        motivo: 'richiesta_progetto',
        messaggio: '',
        consenso: false,
        website: '',
      });

      onSuccess?.();
    } catch {
      setErrors({ submit: 'Errore di connessione. Riprova.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitSuccess && (
        <div className="p-3 bg-sage-200 border border-sage-300 rounded-lg text-sage-900">
          Messaggio inviato con successo!
        </div>
      )}

      {errors.submit && (
        <div className="p-3 bg-red-50 border border-red-300 rounded-lg text-red-900">
          {errors.submit}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-sage-900 mb-2">
            Nome e Cognome <span className="text-sage-600">*</span>
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent ${
              errors.nome ? 'border-red-500' : 'border-sage-300'
            }`}
            placeholder="Mario Rossi"
          />
          {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-sage-900 mb-2">
            Città <span className="text-sage-600">*</span>
          </label>
          <input
            type="text"
            name="citta"
            value={formData.citta}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent ${
              errors.citta ? 'border-red-500' : 'border-sage-300'
            }`}
            placeholder="Roma"
          />
          {errors.citta && <p className="mt-1 text-sm text-red-600">{errors.citta}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-sage-900 mb-2">
          Indirizzo Email <span className="text-sage-600">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent ${
            errors.email ? 'border-red-500' : 'border-sage-300'
          }`}
          placeholder="mario.rossi@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      

      <div>
        <label className="block text-sm font-medium text-sage-900 mb-2">Messaggio</label>
        <textarea
          name="messaggio"
          value={formData.messaggio}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent resize-vertical"
          placeholder="Scrivi qui il tuo messaggio..."
        />
      </div>

      {/* Honeypot */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <div className="flex items-start">
          <input
            type="checkbox"
            id="consenso"
            name="consenso"
            checked={formData.consenso}
            onChange={handleChange}
            className={`mt-1 h-4 w-4 text-sage-900 border-sage-300 rounded focus:ring-sage-500 ${
              errors.consenso ? 'border-red-500' : ''
            }`}
          />
          <label htmlFor="consenso" className="ml-3 text-sm text-sage-700">
            Ho letto e accetto i{' '}
            <Link
              href="/termini-e-condizioni"
              className="text-sage-900 font-semibold hover:text-sage-700 underline"
            >
              termini e condizioni
            </Link>{' '}
            e la{' '}
            <Link
              href="/privacy-policy"
              className="text-sage-900 font-semibold hover:text-sage-700 underline"
            >
              privacy policy
            </Link>
            . <span className="text-sage-600">*</span>
          </label>
        </div>
        {errors.consenso && <p className="mt-1 text-sm text-red-600">{errors.consenso}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || submitSuccess}
        className="w-full bg-sage-900 text-white px-6 py-3 rounded-lg hover:bg-sage-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitSuccess ? 'Inviato' : isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
      </button>
    </form>
  );
}

