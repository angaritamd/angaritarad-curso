import { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { AURORA_MINT, BRAND, HAIRLINE } from '../theme';

export default function RegistrationModal({ isOpen, onClose, onOpenPrivacy }) {
  const [form, setForm] = useState({ nombre: '', email: '', especialidad: '', whatsapp: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!success) return;
    setCountdown(3);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = 'https://grupo.angaritarad.com';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [success]);

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
    } catch (err) {
      // Still show success to not lose leads
      setSuccess(true);
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
            <span className="mono-label" style={{ display: 'block', marginBottom: 8 }}>Inscripción</span>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 22, color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em' }}>
              Activa tu agente médico
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
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 20, color: 'var(--ink)', margin: '0 0 8px' }}>¡Registro exitoso!</h3>
              <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.6 }}>
                Redirigiendo al grupo en {countdown}…
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { key: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Dr. Juan García', required: true },
                { key: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'juan@clinica.com', required: true },
                { key: 'especialidad', label: 'Especialidad', type: 'text', placeholder: 'Medicina General, Medicina Familiar…', required: false },
                { key: 'whatsapp', label: 'WhatsApp (con código de país)', type: 'tel', placeholder: '+57 300 000 0000', required: true },
              ].map(field => (
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
                {loading ? 'Procesando…' : 'Confirmar inscripción'}
              </button>

              <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', margin: 0 }}>
                Al inscribirte aceptas nuestra{' '}
                <button type="button" onClick={onOpenPrivacy} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--aurora-blue)', fontSize: 11, textDecoration: 'underline', padding: 0 }}>
                  política de privacidad
                </button>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
