// Toggle de idioma ES/EN client-side — misma convención que angaritarad.com:
// localStorage "site_lang", default "es", sin recarga. Aquí es un store mínimo
// (React), no el data-i18n del sitio estático: cada componente que traduce
// consume useLang() y resuelve sus propios strings.
import { useEffect, useState } from 'react';

const KEY = 'site_lang';

// TRM fija de referencia para mostrar precios en USD cuando el idioma es EN.
// No es una tasa en vivo a propósito: el pago real será en COP vía Wompi.
export const TRM_COP_USD = 3300;

export function getLang() {
  try { return localStorage.getItem(KEY) || 'es'; } catch { return 'es'; }
}

export function setLang(lang) {
  try { localStorage.setItem(KEY, lang); } catch { /* modo privado */ }
  document.documentElement.lang = lang;
  window.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

export function useLang() {
  const [lang, set] = useState(getLang);
  useEffect(() => {
    const onChange = (e) => set(e.detail);
    window.addEventListener('langchange', onChange);
    return () => window.removeEventListener('langchange', onChange);
  }, []);
  return lang;
}

export function fmtUSD(cop) {
  return `$${(cop / TRM_COP_USD).toFixed(2)} USD`;
}
