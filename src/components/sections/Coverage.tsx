"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { MapPin, Navigation } from 'lucide-react';

export const Coverage = () => {
  return (
    <section id="ubicacion" className="py-24 bg-parra-sand-light/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading 
              align="left"
              subtitle="Donde Operamos"
              title="Presencia en Biobío y RM."
              className="mb-8"
            />
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-parra-wood/10 p-3 rounded-lg text-parra-wood">
                  <Navigation className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-parra-charcoal">Operación Comercial</h4>
                  <p className="text-parra-charcoal/70 leading-relaxed mt-2">
                    Nuestra base de operaciones principal se encuentra en <strong>Quilleco, Región del Biobío</strong>. Atendemos proyectos en la comuna y perímetros cercanos con disponibilidad técnica inmediata.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-t border-parra-sand pt-8">
                <div className="bg-parra-charcoal/5 p-3 rounded-lg text-parra-charcoal/40">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-parra-charcoal/60">Domicilio Legal</h4>
                  <p className="text-parra-charcoal/50 text-sm leading-relaxed mt-1">
                    Avda. General San Martín 359, Colina, Chacabuco, Región Metropolitana, Chile. (Verificado para procesos legales únicamente).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full aspect-[16/9] lg:aspect-square rounded-2xl bg-parra-sand overflow-hidden relative border border-parra-sand shadow-inner"
          >
            {/* Placeholder for Interactive Map or Static Map Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-parra-sand/30">
              <MapPin className="h-12 w-12 text-parra-wood mb-4 animate-bounce" />
              <p className="text-parra-charcoal/40 font-medium text-center max-w-xs">
                Aquí se integrará el mapa interactivo de Google Maps enfocado en Quilleco / Biobío.
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
