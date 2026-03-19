"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Target, Wrench, Sprout } from 'lucide-react';

export const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-parra-sand relative">
              {/* Placeholder image for a real work process or wood texturing */}
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2600&auto=format&fit=crop" 
                alt="Trabajo en madera" 
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-8 -right-8 bg-parra-wood text-white p-8 rounded-xl shadow-xl hidden md:block max-w-[240px]">
              <p className="text-4xl font-bold mb-2">+7</p>
              <p className="text-sm text-parra-sand-light leading-tight">
                Años construyendo confianza y entregando soluciones desde 2017.
              </p>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading 
              subtitle="Nuestra Empresa" 
              title="No somos una constructora convencional." 
              align="left" 
            />
            
            <div className="space-y-6 text-parra-charcoal/80 text-lg leading-relaxed mb-10">
              <p>
                En <strong>Construcciones Parra SpA</strong>, entendemos que cada proyecto requiere un enfoque práctico y resolutivo. Nacimos en 2017 con una visión híbrida: combinar la precisión de la construcción y las terminaciones, con la nobleza de los trabajos en madera.
              </p>
              <p>
                Operamos con fuerza en la Región del Biobío, acercando nuestro oficio a quienes buscan soluciones a medida, desde la fabricación de productos de exterior hasta instalaciones eléctricas complejas.
              </p>
              <p>
                Nuestro trato es directo. Hablamos con la verdad de los materiales, los plazos de ejecución y la estructura.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Wrench, title: 'Enfoque Práctico', desc: 'Soluciones directas sin burocracia excesiva. Resolutivos en terreno.' },
                { icon: Target, title: 'Proyectos a Medida', desc: 'Nos adaptamos a las necesidades específicas de tu espacio y presupuesto.' },
                { icon: Sprout, title: 'Maderas y Exterior', desc: 'Uso de madera nativa recuperada y polines impregnados de alta durabilidad.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 rounded-lg bg-parra-sand-light/50 border border-parra-sand/30">
                  <div className="bg-white p-2 border border-parra-sand rounded shadow-sm text-parra-wood">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-parra-charcoal">{item.title}</h4>
                    <p className="text-sm text-parra-charcoal/70 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
};
