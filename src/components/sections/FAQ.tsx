"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: "¿Qué tipo de proyectos de construcción realizan?",
    a: "Nos especializamos en construcción menor, ampliaciones residenciales, estructuras exteriores (terrazas, cierres), y terminaciones de alta calidad. No somos una constructora industrial gigante, lo que nos permite un trato mucho más cercano y personalizado."
  },
  {
    q: "¿Venden productos de madera además de servicios?",
    a: "Sí. Fabricamos y vendemos jardineras de diversos tamaños y polines cilindrados impregnados para cierres o estructuras. Ofrecemos tanto venta minorista como mayorista según disponibilidad."
  },
  {
    q: "¿Cómo es el proceso de cotización?",
    a: "El proceso es ágil: nos contactas por WhatsApp, nos explicas tu requerimiento (idealmente con fotos o dimensiones), evaluamos la factibilidad técnica y te entregamos un presupuesto detallado."
  },
  {
    q: "¿En qué zonas geográficas trabajan?",
    a: "Operamos principalmente en Quilleco y perímetros cercanos dentro de la Región del Biobío. Para proyectos específicos fuera de esta zona, por favor consúltanos disponibilidad."
  },
  {
    q: "¿Realizan instalaciones eléctricas?",
    a: "Sí, contamos con servicios de instalaciones eléctricas integrados en nuestros proyectos constructivos, asegurando que toda la infraestructura técnica sea profesional desde el inicio."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <Container className="max-w-4xl">
        <SectionHeading 
          subtitle="Preguntas Frecuentes"
          title="Resolvemos tus dudas rápidas."
          align="center"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={cn(
                "border border-parra-sand rounded-xl overflow-hidden transition-all duration-300",
                openIndex === idx ? "shadow-md ring-1 ring-parra-wood/20" : "hover:border-parra-wood/30"
              )}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-parra-charcoal md:text-lg">
                  {faq.q}
                </span>
                <ChevronDown className={cn(
                  "h-5 w-5 text-parra-wood transition-transform duration-300",
                  openIndex === idx ? "rotate-180" : ""
                )} />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-parra-charcoal/70 leading-relaxed border-t border-parra-sand-light pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
