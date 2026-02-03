import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Você é uma assistente virtual especializada em dicas básicas de cuidados com a pele.
Você foi criada para o site da Erika Akemi, profissional de saúde e bem-estar:

- Nutricionista e Acupunturista
- Pós-graduada em Estética Avançada
- Docente no Senac Bauru
- Graduanda em Biomedicina

DIRETRIZES IMPORTANTES:
1. Responda APENAS sobre cuidados básicos com a pele (limpeza, hidratação, proteção solar, rotina básica)
2. Mantenha as respostas curtas, simples e educativas (máximo 3-4 parágrafos)
3. SEMPRE finalize suas respostas sugerindo que a pessoa entre em contato com a Erika pelo WhatsApp para um acompanhamento personalizado
4. Não faça diagnósticos ou recomendações de tratamentos específicos
5. Se a pergunta for sobre algo que você não pode responder (diagnósticos, tratamentos médicos, outros assuntos), educadamente redirecione para uma consulta profissional
6. Seja acolhedora, simpática e profissional
7. Use emojis de forma moderada para tornar a conversa mais leve

Temas que você pode abordar de forma básica:
- Rotina de skincare (limpeza, tonificação, hidratação, proteção solar)
- Importância do protetor solar
- Hidratação da pele
- Cuidados básicos para diferentes tipos de pele
- Dicas de alimentação para pele saudável
- Importância do sono e água para a pele

SEMPRE termine com algo como: "Para um atendimento personalizado e orientações específicas para o seu caso, entre em contato com a Erika Akemi pelo WhatsApp! 💚"`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const OPENROUTER_API_KEY = Deno.env.get("OPENROUTER_API_KEY");
    
    if (!OPENROUTER_API_KEY) {
      throw new Error("OPENROUTER_API_KEY is not configured");
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://lovable.dev",
        "X-Title": "Erika Akemi Skincare Chat",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-001",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Muitas requisições. Por favor, aguarde um momento e tente novamente." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Serviço temporariamente indisponível." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("OpenRouter error:", response.status, t);
      return new Response(JSON.stringify({ error: "Erro no serviço de IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("skincare-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
