import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, X, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { toast } from '@/hooks/use-toast';

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/skincare-chat`;

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTED_QUESTIONS = [
  "Como montar uma rotina de skincare?",
  "Qual a importância do protetor solar?",
  "Como hidratar a pele corretamente?",
  "Dicas de alimentação para pele saudável",
];

export function SkincareChatSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const streamChat = async (userMessages: Message[]) => {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: userMessages }),
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}));
      throw new Error(errorData.error || "Falha ao conectar com o assistente");
    }

    if (!resp.body) throw new Error("Sem resposta do servidor");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            assistantContent += content;
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) => 
                  i === prev.length - 1 ? { ...m, content: assistantContent } : m
                );
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    const userMsg: Message = { role: "user", content: messageText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      await streamChat([...messages, userMsg]);
    } catch (e) {
      console.error(e);
      toast({
        title: "Erro",
        description: e instanceof Error ? e.message : "Erro ao processar sua mensagem",
        variant: "destructive",
      });
      setMessages(prev => prev.filter(m => m !== userMsg));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="dicas-pele" className="section-padding bg-sand/30">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Assistente de Skincare
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Tire suas dúvidas sobre cuidados com a pele
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Pergunte sobre rotina de skincare, proteção solar, hidratação e muito mais. Para orientações personalizadas, fale diretamente com a Erika!
          </p>
        </div>

        {/* Chat Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl shadow-card border border-border overflow-hidden">
            {/* Chat Header */}
            <div className="bg-primary/5 px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-medium text-foreground">Assistente de Skincare</h3>
                  <p className="text-sm text-muted-foreground">Dicas básicas • Erika Akemi</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <Sparkles className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground mb-6">
                    Olá! Sou a assistente virtual da Erika Akemi. Posso te ajudar com dicas básicas de cuidados com a pele. 💚
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {SUGGESTED_QUESTIONS.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(question)}
                        className="px-4 py-2 bg-sand text-foreground text-sm rounded-full hover:bg-sand-dark transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-md'
                          : 'bg-sand text-foreground rounded-bl-md'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm">{msg.content}</p>
                      )}
                    </div>
                  </div>
                ))
              )}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex justify-start">
                  <div className="bg-sand px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-background">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua dúvida sobre skincare..."
                  className="flex-1 px-4 py-3 bg-card border border-border rounded-full font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  disabled={isLoading}
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  variant="hero"
                  size="icon"
                  className="w-12 h-12"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Para orientações personalizadas, agende uma consulta com a Erika Akemi pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
