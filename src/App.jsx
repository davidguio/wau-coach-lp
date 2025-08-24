import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle, Brain, Sparkles, Shield, Download, Activity, MessageSquare, Users2, Star, CheckCircle2, Smartphone, ChevronDown, Quote, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- Wau Coach Animated Logo Component ---
const WauCoachLogo = ({ size = 40 }) => (
  <svg className="glow" width={size} height={size} viewBox="0 0 64 64" role="img" aria-labelledby="logoTitle logoDesc">
    <title id="logoTitle">Isotipo Wau Coach</title>
    <desc id="logoDesc">W futurista formada por dos trazos fluidos con gradiente animado</desc>
    <defs>
      <linearGradient id="wauGradient" x1="0" y1="0" x2="1" y2="1">
        <stop className="gradStroke" offset="0%" stopColor="#7dd3fc">
          <animate attributeName="stop-color" values="#7dd3fc;#34d399;#a78bfa;#fb7185;#7dd3fc" dur="12s" repeatCount="indefinite" />
        </stop>
        <stop className="gradStroke" offset="50%" stopColor="#34d399">
          <animate attributeName="stop-color" values="#34d399;#a78bfa;#fb7185;#7dd3fc;#34d399" dur="12s" repeatCount="indefinite" />
        </stop>
        <stop className="gradStroke" offset="100%" stopColor="#a78bfa">
          <animate attributeName="stop-color" values="#a78bfa;#fb7185;#7dd3fc;#34d399;#a78bfa" dur="12s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <path d="M6 18 C12 44, 18 46, 24 28 C26 22, 30 22, 32 28 C36 40, 40 40, 44 28 C46 22, 50 22, 52 28 C56 40, 58 44, 62 18"
          fill="none" stroke="url(#wauGradient)" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

// --- iOS Chat Simulator Component ---
const IOSChatSimulator = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const chatRef = useRef(null);
  const messageIndex = useRef(0);

  const demoMessages = [
    { who: 'bot', text: 'Hola, ¿cómo amaneciste hoy? Hagamos un respiro de 30 segundos.' },
    { who: 'me', text: 'Listo. Quiero enfocarme para mi reunión importante.' },
    { who: 'bot', text: 'Perfecto. Te dejo una micro‑acción: escribe 1 objetivo y 2 riesgos. Luego visualiza el primer minuto de tu intervención.' },
    { who: 'me', text: 'Objetivo: concretar próximos pasos. Riesgos: desviarnos y falta de tiempos.' },
    { who: 'bot', text: 'Genial. ¿Quieres un video de 2 min con tips de presencia y respiración?' }
  ];

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  const addMessage = (message) => {
    setMessages(prev => [...prev, { ...message, id: Date.now() + Math.random() }]);
    setTimeout(scrollToBottom, 100);
  };

  const playDemo = () => {
    if (messageIndex.current >= demoMessages.length) return;
    
    const msg = demoMessages[messageIndex.current++];
    
    if (msg.who === 'bot') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage(msg);
        setTimeout(playDemo, 600);
      }, 1100 + Math.random() * 800);
    } else {
      setTimeout(() => {
        addMessage(msg);
        setTimeout(playDemo, 600);
      }, 500);
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    addMessage({ who: 'me', text: inputValue });
    setInputValue('');
    
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage({ who: 'bot', text: 'Anotado. ¿Quieres que lo agende como una micro‑acción de 5 minutos?' });
      }, 1200);
    }, 400);
  };

  useEffect(() => {
    const timer = setTimeout(playDemo, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-[340px] h-[700px] mx-auto relative rounded-[48px] p-3.5 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_30px_80px_-20px_rgba(127,190,255,0.25)] border border-white/8">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-[18px] shadow-inner"></div>
      
      {/* Screen */}
      <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 border border-white/5">
        
        {/* Header */}
        <div className="flex items-center gap-2.5 h-14 px-3 bg-gradient-to-b from-white/2 to-transparent border-b border-white/6 backdrop-blur">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/8 shadow-lg">
            <div className="w-full h-full bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400"></div>
          </div>
          <div>
            <div className="font-bold text-white text-sm tracking-tight">Maya · Coach IA</div>
            <div className="text-xs text-emerald-300">en línea • responde en segundos</div>
          </div>
        </div>

        {/* Chat Area */}
        <div ref={chatRef} className="absolute inset-x-0 top-14 bottom-20 overflow-y-auto p-3 scroll-smooth">
          <div className="text-center text-xs text-slate-400 mb-2">Hoy • 9:41 AM</div>
          
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className={`flex gap-2 mb-2 ${msg.who === 'me' ? 'justify-end' : 'justify-start items-end'}`}
            >
              {msg.who === 'bot' && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400 flex-shrink-0"></div>
              )}
              <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm shadow-lg ${
                msg.who === 'bot' 
                  ? 'bg-gradient-to-b from-emerald-400/25 to-emerald-400/18 border border-emerald-400/35 text-emerald-50' 
                  : 'bg-gradient-to-b from-sky-400/28 to-sky-400/18 border border-sky-400/38 text-sky-50'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <div className="flex gap-2 mb-2 items-end">
              <div className="w-7 h-7 rounded-full bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400"></div>
              <div className="px-2.5 py-2 rounded-2xl bg-white/6 border border-white/12 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0ms]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:150ms]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:300ms]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="absolute left-0 right-0 bottom-0 h-20 p-2.5 flex items-center gap-2 bg-gradient-to-t from-slate-900/65 to-transparent border-t border-white/6 backdrop-blur">
          <div className="flex-1 flex items-center gap-2.5 border border-white/12 bg-white/6 rounded-[18px] px-3 py-2.5">
            <Circle className="w-4 h-4 text-white/70" />
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe un mensaje…"
              className="flex-1 bg-transparent border-0 outline-0 text-white text-sm placeholder-white/50"
            />
          </div>
          <button
            onClick={handleSend}
            className="px-3.5 py-2.5 rounded-2xl bg-white text-slate-900 text-sm font-medium shadow-lg hover:bg-white/90 transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * WAU COACH — Landing (Single File)
 * - 2025 aesthetic: vivid glow, glass, micro‑interactions, soft neon, tasteful motion
 * - Built to promote app downloads (Android + iOS)
 * - Includes: hero with morphing blob, magnetic CTA, persona selector, feature highlights,
 *   interactive testimonials, trust signals, FAQ, footer. Fully responsive.
 * - Tailwind + shadcn/ui + framer-motion + lucide-react
 */

// --- Utility: App Store Badges (SVG, inline so no external assets) ---
const GooglePlayBadge = () => (
  <svg role="img" aria-label="Get it on Google Play" width="180" height="54" viewBox="0 0 646 200">
    <title>Get it on Google Play</title>
    <rect width="646" height="200" rx="28" fill="#000"/>
    <g transform="translate(24,24)">
      <path fill="#34A853" d="M64 12l46 46-20 20-46-46z"/>
      <path fill="#FBBC05" d="M90 62l24 24-50 28z"/>
      <path fill="#EA4335" d="M64 136l46-26-20-20z"/>
      <path fill="#4285F4" d="M64 12v124l66-66z"/>
    </g>
    <text x="210" y="85" fill="#fff" fontSize="34" fontFamily="Inter, ui-sans-serif" fontWeight="600">GET IT ON</text>
    <text x="210" y="140" fill="#fff" fontSize="60" fontFamily="Inter, ui-sans-serif" fontWeight="800">Google Play</text>
  </svg>
);

const AppStoreBadge = () => (
  <svg role="img" aria-label="Download on the App Store" width="180" height="54" viewBox="0 0 646 200">
    <title>Download on the App Store</title>
    <rect width="646" height="200" rx="28" fill="#000"/>
    <g transform="translate(30,24)" fill="#fff">
      <path d="M54 14c6 0 12 3 15 8-7 5-12 12-12 21-6 0-12-3-16-8 3-13 7-21 13-21z"/>
      <circle cx="85" cy="28" r="14"/>
    </g>
    <text x="210" y="85" fill="#fff" fontSize="34" fontFamily="Inter, ui-sans-serif" fontWeight="600">Download on the</text>
    <text x="210" y="140" fill="#fff" fontSize="60" fontFamily="Inter, ui-sans-serif" fontWeight="800">App Store</text>
  </svg>
);

// --- Small helpers ---
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`relative w-full ${className}`}>{children}</section>
);

const Glow = ({ className = "" }) => (
  <div className={`pointer-events-none absolute inset-0 blur-3xl opacity-30 ${className}`} />
);

// Magnetic Button effect
function useMagnetic() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const transformX = useTransform(x, (v) => `${v}px`);
  const transformY = useTransform(y, (v) => `${v}px`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const strength = 20;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      x.set((dx / rect.width) * strength);
      y.set((dy / rect.height) * strength);
    };
    const onLeave = () => { x.set(0); y.set(0); };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [x, y]);

  return { ref, transformX, transformY };
}

// Content variants per goal/persona (simple personalization demo)
const goalPresets = {
  "estres": {
    title: "Calma tu mente. Potencia tu día.",
    sub: "Un avatar coach que te guía con micro‑acciones para gestionar el estrés en minutos.",
    accent: "from-emerald-400 via-cyan-400 to-blue-500"
  },
  "carrera": {
    title: "Impulsa tu carrera con foco.",
    sub: "Sesiones y cápsulas en video para decisiones más claras y hábitos pro.",
    accent: "from-violet-400 via-fuchsia-400 to-pink-500"
  },
  "relaciones": {
    title: "Mejores conversaciones, mejores vínculos.",
    sub: "Tu avatar te entrena en comunicación empática y límites sanos.",
    accent: "from-rose-400 via-orange-400 to-amber-400"
  }
};

const features = [
  { icon: <Sparkles className="h-5 w-5"/>, title: "Avatar Personalizado", desc: "Voz y estilo que se ajustan a ti (texto, voz o video)." },
  { icon: <Brain className="h-5 w-5"/>, title: "IA con Memoria", desc: "Recuerda tus metas y adapta el plan día a día." },
  { icon: <MessageSquare className="h-5 w-5"/>, title: "Chat Multimodal", desc: "Habla, escribe o envía audios; recibe video‑respuestas." },
  { icon: <Activity className="h-5 w-5"/>, title: "Micro‑acciones", desc: "Pasos de 5–10 min con seguimiento y streaks." },
  { icon: <Shield className="h-5 w-5"/>, title: "Privacidad Primero", desc: "Cifrado, control de datos y modo sensible." },
  { icon: <Users2 className="h-5 w-5"/>, title: "Coach Humano + IA", desc: "Escala tu crecimiento con un enfoque híbrido." },
];

const testimonials = [
  { name: "María", role: "Product Manager", quote: "En 2 semanas bajó mi ansiedad. Las micro‑acciones son oro.", stars: 5 },
  { name: "Carlos", role: "Coach Ejecutivo", quote: "Puedo atender 2× más clientes sin perder cercanía.", stars: 5 },
  { name: "Ana", role: "Emprendedora", quote: "El avatar me acompaña a cualquier hora. Me mantiene enfocada.", stars: 5 },
];

export default function WauCoachLanding() {
  const [goal, setGoal] = useState("carrera");
  const { ref: ctaRef, transformX, transformY } = useMagnetic();
  const preset = goalPresets[goal];

  // Respect reduced motion
  const prefersReducedMotion = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);

  return (
    <main className="min-h-screen text-white bg-slate-950 selection:bg-white/20">
      {/* Top Glow / Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"/>
        <motion.div aria-hidden className={`absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-30 bg-gradient-to-br ${`from-emerald-400/60 via-cyan-400/50 to-blue-500/50`}`} animate={prefersReducedMotion ? undefined : { scale: [1, 1.1, 1], rotate: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity }}/>
        <motion.div aria-hidden className={`absolute top-1/2 -right-40 h-[560px] w-[560px] rounded-full opacity-25 bg-gradient-to-br ${`from-fuchsia-500/50 via-pink-500/40 to-rose-500/40`}`} animate={prefersReducedMotion ? undefined : { scale: [1, 1.05, 1], rotate: [0, -25, 0] }} transition={{ duration: 14, repeat: Infinity }}/>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <WauCoachLogo size={96} />
            <span className="text-3xl font-semibold tracking-tight">Wau Coach</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Características</a>
            <a href="#how" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Opiniones</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#download" className="hidden sm:inline-flex"><Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border border-white/10">Encuentra un coach</Button></a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <Section id="hero" className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 md:pt-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Copy */}
            <div className="md:col-span-7">
              <motion.h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                  {preset.title}
                </span>
              </motion.h1>
              <p className="mt-4 text-slate-300 text-lg md:text-xl max-w-2xl">{preset.sub}</p>

              {/* Persona selector */}
              <div className="mt-6 flex flex-wrap gap-2">
                {Object.entries(goalPresets).map(([key, p]) => (
                  <Button key={key} variant={goal === key ? "default" : "secondary"} onClick={() => setGoal(key)} className={`${goal === key ? "bg-white text-slate-900" : "bg-white/10 text-white hover:bg-white/20"} rounded-full h-10 px-5`}>{p.title.split(".")[0]}</Button>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <motion.a ref={ctaRef} style={{ translateX: transformX, translateY: transformY }} href="#download" className="group inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-slate-900 font-semibold bg-gradient-to-r from-white to-white/90 shadow-[0_10px_40px_-10px_rgba(255,255,255,.6)]">
                  Empieza gratis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/>
                </motion.a>
                <a href="#cldFrame" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-white/15 bg-white/5 hover:bg-white/10">
                  <PlayCircle className="h-5 w-5"/> Ver demo
                </a>
<div id="videoModal" class="modal" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="overlay" data-close></div>
  <div class="dialog" role="document" aria-label="Video">
    <button class="close" type="button" aria-label="Cerrar" data-close>&times;</button>
    <div class="frame">
      <iframe
        id="cldFrame"
        src="https://player.cloudinary.com/embed/?cloud_name=dadp1865s&public_id=InitialVideo_cjq8fe&profile=cld-default"
        width="640"
        height="360"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowfullscreen
        frameborder="0"
      ></iframe>
    </div>
  </div>
</div>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-400"/><Star className="h-4 w-4 text-amber-400"/><Star className="h-4 w-4 text-amber-400"/><Star className="h-4 w-4 text-amber-400"/><Star className="h-4 w-4 text-amber-400"/> <span className="ml-2">4.9/5</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> Privacidad & seguridad de nivel profesional</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> 7‑día trial • Cancela cualquier momento</div>
              </div>
            </div>

            {/* Visual - iOS Chat Simulator */}
            <div className="md:col-span-5 relative">
              <motion.div className={`absolute -inset-6 rounded-[2.5rem] opacity-40 bg-gradient-to-br from-white/10 via-sky-400/20 to-emerald-400/10 blur-2xl`} />
              <div className="relative flex items-center justify-center">
                <IOSChatSimulator />
              </div>
            </div>
          </div>
        </div>

        {/* subtle divider */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"/>
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-2xl md:text-4xl font-bold">Todo lo que necesitas para crecer con foco</h2>
            <p className="text-slate-400 max-w-xl">Wau Coach combina IA con coaching humano: personalización profunda, contenido en video y micro‑acciones que convierten ideas en hábitos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-10">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Card className="group h-full bg-white/5 border-white/10 hover:bg-white/10 transition-colors rounded-2xl">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">{f.icon}</div>
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-300 -mt-3 pb-6">{f.desc}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" className="py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((step) => (
              <Card key={step} className="bg-white/5 border-white/10 rounded-2xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-900 font-bold">{step}</span>
                    {step === 1 && "Onboarding en 7 minutos"}
                    {step === 2 && "Chat + video con micro‑acciones"}
                    {step === 3 && "Coach humano cuando lo necesitas"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  {step === 1 && "Responde preguntas dinámicas y genera tu perfil. Sin fricción, sin formularios eternos."}
                  {step === 2 && "Habla por voz o texto y recibe cápsulas en video personalizadas con acciones concretas."}
                  {step === 3 && "Agenda sesiones por videollamada y lleva un seguimiento real con tu coach."}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS — drag/scroll carousel */}
      <Section id="testimonials" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-2xl md:text-4xl font-bold">Historias reales, cambios reales</h2>
            <p className="text-slate-400">Opiniones de usuarios y coaches que ya usan Wau Coach.</p>
          </div>
          <motion.div className="mt-8 flex gap-4 overflow-x-auto pb-3" drag="x" dragConstraints={{ left: -200, right: 0 }}>
            {testimonials.map((t, i) => (
              <Card key={i} className="min-w-[320px] bg-white/5 border-white/10 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center"><Users2 className="h-5 w-5"/></div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-200">
                  <div className="flex items-center gap-1 mb-2 text-amber-400">{Array.from({ length: t.stars }).map((_, j) => <Star key={j} className="h-4 w-4"/>)}</div>
                  <blockquote className="text-sm leading-relaxed">“{t.quote}”</blockquote>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* DOWNLOAD */}
      <Section id="download" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Descarga la app y empieza hoy</h2>
            <p className="mt-3 text-slate-300 max-w-xl">Disponible para iOS y Android. Prueba gratis por 7 días. Tu progreso se queda contigo.</p>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <a href="/download/android" aria-label="Descargar en Google Play" className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-xl">
                <GooglePlayBadge />
              </a>
              <a href="/download/ios" aria-label="Descargar en App Store" className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-xl">
                <AppStoreBadge />
              </a>
            </div>
            <div className="mt-4 text-xs text-slate-400">* En beta cerrada. Algunas funciones pueden variar por región.</div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] opacity-30 bg-gradient-to-br from-indigo-400/40 via-sky-400/30 to-emerald-400/40 blur-2xl"/>
            <Card className="relative bg-white/5 border-white/10 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5"/> Onboarding gamificado <span className="ml-auto text-slate-400">&lt;7 min</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5"/> Chat de texto/voz + videos personalizados</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5"/> Micro‑acciones con seguimiento y streaks</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5"/> Videollamadas con coaches certificados</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5"/> Privacidad y control de datos</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="bg-white/5 border border-white/10 rounded-2xl p-2">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿La IA reemplaza al coach humano?</AccordionTrigger>
              <AccordionContent>
                No. Wau Coach combina un avatar IA para seguimiento diario con sesiones humanas cuando buscas mayor profundidad. Lo mejor de ambos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cómo cuidan mi privacidad?</AccordionTrigger>
              <AccordionContent>
                Usamos cifrado en tránsito y controles claros de datos. Puedes borrar tu historial y ajustar memoria sensible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Qué incluye el período de prueba?</AccordionTrigger>
              <AccordionContent>
                Acceso completo por 7 días, incluidas cápsulas de video y una videollamada de prueba con un coach.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <WauCoachLogo size={96} />
            <div>
              <div className="font-semibold text-2xl">Wau Coach</div>
              <div className="text-lg text-slate-400">IA + humanos para tu crecimiento</div>
            </div>
          </div>
          <div className="text-sm text-slate-400 flex flex-wrap gap-6">
            <a className="hover:text-white" href="#features">Características</a>
            <a className="hover:text-white" href="#how">Cómo funciona</a>
            <a className="hover:text-white" href="#download">Encuentra un coach</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
          </div>
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Wau Coach. Todos los derechos reservados.</div>
        </div>
      </footer>
    </main>
  );
}
