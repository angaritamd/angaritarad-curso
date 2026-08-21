import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../nav';
import { BRAND, MUTED } from '../theme';

function Item({ to, label, Icon, end, onNavigate }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className="rail-item"
      style={({ isActive }) => ({
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '10px 14px', borderRadius: 10, textDecoration: 'none',
        fontSize: 14, lineHeight: 1.3,
        fontFamily: 'var(--font-sans)',
        fontWeight: isActive ? 500 : 400,
        color: isActive ? 'var(--ink)' : 'var(--body)',
        background: isActive ? 'rgba(245,78,0,0.07)' : 'transparent',
        boxShadow: isActive ? `inset 2px 0 0 ${BRAND}` : 'none',
      })}
    >
      {({ isActive }) => (
        <>
          <Icon size={18} color={isActive ? BRAND : MUTED} style={{ flexShrink: 0 }} />
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );
}

export default function Sidebar({ onNavigate }) {
  return (
    <nav aria-label="Secciones del curso" style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '24px 12px' }}>
      <span className="mono-label" style={{ padding: '0 14px', marginBottom: 12, display: 'block' }}>Curso</span>
      {NAV_ITEMS.map(item => (
        <Item key={item.to} {...item} onNavigate={onNavigate} />
      ))}

      <div style={{ marginTop: 'auto', padding: '24px 14px 8px' }}>
        <p style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
          Datos de pacientes simulados. Nunca ingreses información real de pacientes.
        </p>
      </div>
    </nav>
  );
}
