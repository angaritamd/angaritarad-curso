// Pill ES|EN — réplica en React del selector de angaritarad.com (assets/i18n.js):
// misma lógica (localStorage site_lang, default es, sin recarga) y mismo lenguaje
// visual (pill mono con hairline), adaptado a los tokens de este sitio.
import { useLang, setLang } from '../i18n';

export default function LangToggle() {
  const lang = useLang();
  const btn = (l) => ({
    appearance: 'none', background: lang === l ? 'var(--canvas-card)' : 'transparent',
    border: 'none', cursor: 'pointer', padding: '5px 10px', lineHeight: 1,
    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em',
    color: lang === l ? 'var(--ink)' : 'var(--muted)',
    transition: 'color 150ms ease-out, background 150ms ease-out',
  });
  return (
    <div role="group" aria-label="Idioma / Language" style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--hairline-strong)', borderRadius: 'var(--r-pill)', overflow: 'hidden', flexShrink: 0 }}>
      <button type="button" aria-pressed={lang === 'es'} onClick={() => setLang('es')} style={btn('es')}>ES</button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')} style={{ ...btn('en'), borderLeft: '1px solid var(--hairline-strong)' }}>EN</button>
    </div>
  );
}
