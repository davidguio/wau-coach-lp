"use client";

import { Linkedin } from "lucide-react";

export default function ClaudiaPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-emerald-900/40 to-black">
        <img
          src="https://res.cloudinary.com/dadp1865s/image/upload/v1755841682/1736639158428_fa9yay.jpg" // reemplaza con la foto real de Claudia cuando esté disponible
          alt="Claudia Mateus"
          className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-emerald-400 shadow-lg"
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Claudia Mateus
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Coach Holística | IA & Bienestar Mental | Ventas B2B
        </p>
      </section>

      {/* About */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Sobre mí</h2>
        <p className="text-gray-300 leading-relaxed">
          Soy coach holística enfocada en el bienestar integral de las personas y equipos. 
          Combino técnicas ancestrales de mindfulness, respiración y coaching de vida con herramientas modernas de Inteligencia Artificial.
          Mi propósito es guiar a líderes y organizaciones hacia un equilibrio entre la mente, la tecnología y los negocios.
        </p>
      </section>

      {/* Experience */}
      <section className="bg-emerald-950/40 px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-emerald-300">Experiencia</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-black/40 rounded-2xl border border-emerald-800">
            <h3 className="text-xl font-semibold mb-2">Coaching Holístico</h3>
            <p className="text-gray-300 text-sm">
              +10 años guiando procesos de transformación personal y espiritual. Sesiones de meditación, gestión emocional, y programas de resiliencia.
            </p>
          </div>
          <div className="p-6 bg-black/40 rounded-2xl border border-emerald-800">
            <h3 className="text-xl font-semibold mb-2">AI & Well-being</h3>
            <p className="text-gray-300 text-sm">
              Integración de IA para potenciar el autoconocimiento: chatbots terapéuticos, análisis de bienestar mental y programas digitales de apoyo.
            </p>
          </div>
          <div className="p-6 bg-black/40 rounded-2xl border border-emerald-800">
            <h3 className="text-xl font-semibold mb-2">Ventas B2B</h3>
            <p className="text-gray-300 text-sm">
              Experiencia en procesos de ventas consultivas, construcción de relaciones con empresas y desarrollo de propuestas de valor innovadoras.
            </p>
          </div>
          <div className="p-6 bg-black/40 rounded-2xl border border-emerald-800">
            <h3 className="text-xl font-semibold mb-2">Programas de Liderazgo</h3>
            <p className="text-gray-300 text-sm">
              Diseño de entrenamientos para equipos corporativos: liderazgo consciente, comunicación efectiva y gestión de la energía.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Conecta conmigo</h2>
        <p className="text-gray-400 mb-6">
          Si buscas transformar tu vida o potenciar el bienestar en tu organización, contáctame:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:claumateus@wau.ai"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transition"
          >
            Escríbeme
          </a>
          <a
            href="https://www.linkedin.com/in/claudia-mateus-fandi%C3%B1o-9322a438/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-black transition"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
