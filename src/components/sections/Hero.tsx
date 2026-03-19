"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ArrowRight, HardHat } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-parra-charcoal"
        style={{
          // Placeholder for a real background image of wood/construction
          backgroundImage: 'linear-gradient(to right, rgba(31, 31, 31, 0.9), rgba(31, 31, 31, 0.7)), url("https://images.unsplash.com/photo-1611021061271-d13576f6bc34?q=80&w=2600&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div className="bg-parra-wood/20 p-2 rounded-md backdrop-blur-sm border border-parra-wood/30">
              <HardHat className="h-5 w-5 text-parra-sand" />
            </div>
            <span className="text-parra-sand font-medium tracking-wider uppercase text-sm">
              Construcción & Madera
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Soluciones en madera y terminaciones a medida.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-parra-sand-light/90 mb-10 max-w-2xl leading-relaxed"
          >
            Somos especialistas en proyectos de construcción menor, terminaciones e instalaciones eléctricas. Fabricamos calidad y oficio para exterior e interior.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group" onClick={() => window.location.href = '#contacto'}>
              Cotizar Proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-parra-sand text-parra-sand hover:bg-white/10 hover:text-white" onClick={() => window.location.href = '#servicios'}>
              Ver Servicios
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-parra-sand/20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Proyectos a Medida', desc: 'Adaptados a tu espacio' },
              { label: 'Oficio Real', desc: 'Materiales nobles' },
              { label: 'Región del Biobío', desc: 'Atención presencial' },
              { label: 'Cotización Directa', desc: 'Respuesta ágil' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-white font-semibold text-lg">{stat.label}</p>
                <p className="text-parra-sand/70 text-sm mt-1">{stat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
