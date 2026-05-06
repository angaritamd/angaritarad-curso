import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { full_name, email, phone, especialidad } = await req.json();

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!;
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    // Send admin notification email via Resend
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AngaritaRad <no-reply@angaritarad.com>',
        to: ['miguel@angaritarad.com'],
        subject: `🩺 Nuevo lead: ${full_name || email} — curso.angaritarad.com`,
        html: `
          <h2>Nuevo registro en curso.angaritarad.com</h2>
          <table cellpadding="8" style="border-collapse:collapse;">
            <tr><td><strong>Nombre</strong></td><td>${full_name || '—'}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>WhatsApp</strong></td><td>${phone || '—'}</td></tr>
            <tr><td><strong>Especialidad</strong></td><td>${especialidad || '—'}</td></tr>
          </table>
        `,
      }),
    });

    if (!emailRes.ok) {
      const emailError = await emailRes.text();
      console.error('Resend error:', emailError);
    }

    // Insert into shared leads table
    const leadRes = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        full_name: full_name || null,
        email: email,
        phone: phone || null,
        source: 'landing_curso_medicos',
        created_at: new Date().toISOString(),
      }),
    });

    if (!leadRes.ok) {
      const leadError = await leadRes.text();
      console.error('Leads insert error:', leadError);
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (err) {
    console.error('Edge function error:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
