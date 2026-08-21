// Extraído de App.jsx sin cambios de lógica, para que Layout pueda montarlo
// una sola vez y esté disponible desde todas las rutas.
export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:200,display:'flex',alignItems:'center',justifyContent:'center',padding:24 }}>
      <div onClick={e=>e.stopPropagation()} style={{ background: 'var(--canvas-card)',borderRadius:16,maxWidth:560,width:'100%',maxHeight:'80vh',overflowY:'auto',padding:32 }}>
        <h2 style={{ fontFamily: 'var(--font-sans)',fontSize:22,color: 'var(--ink)',margin:'0 0 16px' }}>Privacidad &amp; Términos</h2>
        <p style={{ fontSize:14,lineHeight:1.7,color: 'var(--body)' }}>Angaritarad-AI recopila únicamente la información que tú proporcionas al inscribirte: nombre, correo electrónico y número de WhatsApp. Esta información se usa exclusivamente para gestionar tu acceso al programa. No vendemos ni compartimos tus datos con terceros. Los datos de pacientes nunca deben ser ingresados al sistema.</p>
        <button onClick={onClose} className="btn-primary" style={{ marginTop:24,width:'100%',justifyContent:'center',padding:'12px 24px' }}>Cerrar</button>
      </div>
    </div>
  );
}
