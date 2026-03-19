"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { MessageSquare, ClipboardList, PenTool, Hammer, BadgeCheck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Contacto Inicial",
    desc: "Cuéntanos tu idea o necesidad técnica vía WhatsApp o llamada telefónica."
  },
  {
    icon: ClipboardList,
    title: "Evaluación",
    desc: "Analizamos juntos el alcance, materiales necesarios y condiciones de terreno."
  },
  {
    icon: PenTool,
    title: "Presupuesto",
    desc: "Entregamos una cotización clara y detallada, sin costos ocultos."
  },
  {
    icon: Hammer,
    title: "Ejecución",
    desc: "Llevamos a cabo el trabajo con oficio, materiales de calidad y orden profesional."
  },
  {
    icon: BadgeCheck,
    title: "Entrega Final",
    desc: "Validamos el resultado juntos, asegurando que cada detalle cumpla con lo prometido."
  }
];

export const Process = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading 
          subtitle="Cómo trabajamos"
          title="Un proceso estructurado para resultados sólidos."
        />

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-parra-sand -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 rounded-full bg-white border-4 border-parra-sand flex items-center justify-center mb-6 group-hover:border-parra-wood transition-colors relative">
                  <step.icon className="h-7 w-7 text-parra-wood" />
                  <div className="absolute -top-2 -right-2 bg-parra-wood text-white text-[10px] h-6 w-6 rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="font-bold text-lg text-parra-charcoal mb-3">{step.title}</h4>
                <p className="text-parra-charcoal/60 text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
