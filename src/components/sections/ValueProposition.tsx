"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

const values = [
  "Proyectos en madera",
  "Servicios de construcción",
  "Terminaciones de interiores",
  "Instalaciones eléctricas",
  "Soluciones de espacios exteriores",
];

export const ValueProposition = () => {
  return (
    <section className="bg-parra-wood-dark border-y border-parra-charcoal">
      <Container className="py-6 overflow-hidden">
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              className="flex items-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="h-2 w-2 rounded-full bg-parra-sand mr-3 lg:mr-4 shrink-0" />
              <span className="text-white font-medium text-sm md:text-base tracking-wide">{v}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
