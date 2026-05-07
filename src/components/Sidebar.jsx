import { CheckCircle2, Clock } from 'lucide-react';

const items = [
  'Acceso completo a todos los módulos',
  'Chats grupales por módulo',
  'Prompts, plantillas y checklists',
  'Recursos descargables',
  'Certificado de finalización',
  'Infraestructura del agente incluida',
];

export default function Sidebar({ onOpenModal }) {
  return (
    <div style={{ position: 'sticky', top: 96 }}>
      <div style={{ background: '#17171c', borderRadius: 16, padding: 24, marginBottom: 16 }}>
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: 18, color: '#fff', margin: '0 0 8px' }}>Inscripción abierta</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#ef4444', marginBottom: 16 }}>
            <Clock size={14} />
            <span style={{ fontSize: 13, color: '#fca5a5' }}>Inicio: 25 de junio · Cupos limitados</span>
          </div>
          <div>
            <span style={{ textDecoration: 'line-through', fontSize: 13, color: '#616161', display: 'block' }}>$944.000 COP</span>
            <span style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 400, color: '#fff', letterSpacing: '-0.02em' }}>$697.000</span>
            <span style={{ fontSize: 12, color: '#616161', marginLeft: 4 }}>COP · pago único</span>
          </div>
        </div>

        <button onClick={onOpenModal} className="btn-brand"
          style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontSize: 15, marginBottom: 20, borderRadius: 10 }}>
          Inscribirme ahora
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <CheckCircle2 size={14} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 14, textAlign: 'center' }}>
          <span style={{ fontSize: 11, color: '#616161' }}>Infraestructura gestionada · $39.000 COP/mes post-curso</span>
        </div>
      </div>

      {/* Guarantee badge */}
      <div style={{ background: '#fafafa', border: '1px solid #f2f2f2', borderRadius: 12, padding: '14px 18px', textAlign: 'center' }}>
        <span style={{ fontSize: 20 }}>🛡️</span>
        <p style={{ fontSize: 13, color: '#212121', fontWeight: 500, margin: '6px 0 4px', fontFamily: 'Space Grotesk' }}>Garantía de 14 días</p>
        <p style={{ fontSize: 12, color: '#616161', margin: 0 }}>Si no estás satisfecho, te devolvemos el dinero.</p>
      </div>
    </div>
  );
}
