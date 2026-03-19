"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, ShieldCheck, Users, Clock } from 'lucide-react';

const differentiatorItems = [
  {
    icon: CheckCircle2,
    title: "Atención Directa",
    description: "Trato personalizado y comunicación ágil desde el primer contacto hasta la entrega del proyecto."
  },
  {
    icon: ShieldCheck,
    title: "Oficio Real",
    description: "Compromiso con la materialidad y las buenas prácticas constructivas para resultados duraderos."
  },
  {
    icon: Users,
    description: "Capacidad para resolver proyectos desde pequeña escala hasta requerimientos residenciales completos.",
    title: "Resolución Técnica"
  },
  {
    icon: Clock,
    description: "Cumplimiento de plazos acordados y enfoque práctico para evitar retrasos innecesarios.",
    title: "Eficiencia en Plazos"
  }
];

export const Differentiation = () => {
  return (
    <section className="py-24 bg-parra-charcoal text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading 
              align="left"
              subtitle="Por qué nosotros"
              title="Más que una constructora, un aliado práctico."
              className="text-white"
            />
            <p className="text-parra-sand/80 text-lg leading-relaxed mb-10 max-w-xl">
              Nuestra diferencia radica en la capacidad de integrar el diseño en madera con la estructura técnica, asegurando que cada detalle constructivo aporte valor real y estético.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {differentiatorItems.map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-parra-wood/20 flex items-center justify-center border border-parra-wood/30">
                    <item.icon className="h-6 w-6 text-parra-wood" />
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-parra-sand/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-8 border-parra-wood/10">
              <img 
                src="https://images.unsplash.com/photo-1619759247130-4e7a70f2fe27?q=80&w=2600&auto=format&fit=crop" 
                alt="Detalle constructivo" 
                className="object-cover w-full h-full opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
