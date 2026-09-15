import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { AURORA_MINT, BRAND, HAIRLINE } from '../theme';
import { useLang } from '../i18n';

// Metadatos estructurales de los campos (no traducibles): orden, tipo, key,
// required. Los textos (label/placeholder) viven en STR para que sean bilingües.
const FIELDS_META = [
  { key: 'nombre', type: 'text', required: true },
  { key: 'email', type: 'email', required: true },
  { key: 'especialidad', type: 'text', required: false },
  { key: 'whatsapp', type: 'tel', required: true },
];

const linkStyle = { color: 'var(--aurora-mint)', fontWeight: 600 };

// ES es byte-por-byte el texto original (tests e2e de Playwright lo aseveran).
const STR = {
  es: {
    preRegistro: 'Pre-registro gratuito',
    titulo: 'Reserva tu cupo',
    fields: {
      nombre: { label: 'Nombre completo', placeholder: 'Dr. Juan García' },
      email: { label: 'Correo electrónico', placeholder: 'juan@clinica.com' },
      especialidad: { label: 'Especialidad', placeholder: 'Medicina General, Medicina Familiar…' },
      whatsapp: { label: 'WhatsApp (con código de país)', placeholder: '+57 300 000 0000' },
    },
    guardando: 'Guardando…',
    submitBtn: 'Quiero pre-registrarme',
    privacyIntro: 'Al pre-registrarte aceptas nuestra',
    privacyLink: 'política de privacidad',
    successTitle: '¡Listo, quedaste pre-registrado!',
    successBody: (
      <>
        Tu lugar está reservado. El curso inicia el 1 de octubre —{' '}
        <a
          href="https://chat.whatsapp.com/DwWQ2Z2HERfEpVNQI8B38g"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          únete al grupo del curso
        </a>
        {' '}para recibir todos los detalles de acceso.
      </>
    ),
    errorMsg: 'Hubo un problema al guardar tu registro. Por favor intenta de nuevo.',
  },
  en: {
    preRegistro: 'Free pre-registration',
    titulo: 'Reserve your spot',
    fields: {
      nombre: { label: 'Full name', placeholder: 'Dr. Juan García' },
      email: { label: 'Email address', placeholder: 'juan@clinica.com' },
      especialidad: { label: 'Specialty', placeholder: 'General Medicine, Family Medicine…' },
      whatsapp: { label: 'WhatsApp (with country code)', placeholder: '+57 300 000 0000' },
    },
    guardando: 'Saving…',
    submitBtn: 'I want to pre-register',
    privacyIntro: 'By pre-registering you accept our',
    privacyLink: 'privacy policy',
    successTitle: "You're pre-registered!",
    successBody: (
      <>
        Your spot is reserved. The course starts October 1st —{' '}
        <a
          href="https://chat.whatsapp.com/DwWQ2Z2HERfEpVNQI8B38g"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          join the course group
        </a>
        {' '}to get all the access details.
      </>
    ),
    errorMsg: 'There was a problem saving your registration. Please try again.',
  },
};

export default function RegistrationModal({ isOpen, onClose, onOpenPrivacy }) {
  const lang = useLang();
  const t = STR[lang] || STR.es;
  const [form, setForm] = useState({ nombre: '', email: '', especialidad: '', whatsapp: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Supabase integration - will use env vars when deployed
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseKey && !supabaseUrl.includes('your-project')) {
        const res = await fetch(`${supabaseUrl}/rest/v1/registrations`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({
            nombre: form.nombre,
            email: form.email,
            especialidad: form.especialidad,
            whatsapp: form.whatsapp,
            source: 'landing_curso_medicos',
            created_at: new Date().toISOString(),
          }),
        });
        if (!res.ok) throw new Error('Error al guardar');
      }

      // Always show success (graceful degradation without Supabase)
      setSuccess(true);
    } catch {
      // El guardado falló: mostrar error real, no un falso éxito.
      setError(t.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: 'var(--canvas-card)', borderRadius: 20, maxWidth: 480, width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ padding: '24px 28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: 8 }}>{t.preRegistro}</span>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 22, color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em' }}>
              {t.titulo}
            </h2>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--muted)' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '20px 28px 28px' }}>
          {success ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <CheckCircle2 size={48} color={AURORA_MINT} style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 20, color: 'var(--ink)', margin: '0 0 8px' }}>{t.successTitle}</h3>
              <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.6 }}>
                {t.successBody}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {FIELDS_META.map(meta => ({ ...meta, ...t.fields[meta.key] })).map(field => (
                <div key={field.key}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>{field.label}{field.required && <span style={{ color: 'var(--primary)' }}> *</span>}</label>
                  <input type={field.type} placeholder={field.placeholder} required={field.required} value={form[field.key]}
                    onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', background: 'var(--canvas-soft)', border: '1px solid var(--hairline)', borderRadius: 8, fontSize: 14, color: 'var(--ink)', outline: 'none', fontFamily: 'var(--font-sans)', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                    onFocus={e => e.target.style.borderColor = BRAND}
                    onBlur={e => e.target.style.borderColor = HAIRLINE}
                  />
                </div>
              ))}

              {error && <p style={{ color: 'var(--error)', fontSize: 13 }}>{error}</p>}

              <button type="submit" disabled={loading} className="btn-brand" style={{ width: '100%', justifyContent: 'center', padding: '13px 24px', fontSize: 15, opacity: loading ? 0.7 : 1 }}>
                {loading ? t.guardando : t.submitBtn}
              </button>

              <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', margin: 0 }}>
                {t.privacyIntro}{' '}
                <button type="button" onClick={onOpenPrivacy} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--aurora-blue)', fontSize: 11, textDecoration: 'underline', padding: 0 }}>
                  {t.privacyLink}
                </button>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
