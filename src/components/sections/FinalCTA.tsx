"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-parra-wood">
      {/* Texture/Pattern element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <Container className="relative z-10">
        <div className="bg-parra-charcoal/90 backdrop-blur-md rounded-3xl p-8 md:p-16 lg:p-20 border border-white/10 shadow-2xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                ¿Tienes un proyecto en mente? Hablemos hoy.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-parra-sand/80 text-lg md:text-xl mb-10 leading-relaxed"
              >
                Cotiza tu construcción, trabajo en madera o instalación eléctrica sin compromiso. Respuesta ágil y trato directo.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white border-none group"
                  onClick={() => window.open('https://wa.me/56979893329?text=Hola,%20quisiera%20cotizar%20un%20proyecto%20con%20Parra%20SPA.', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Escríbenos por WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="border-parra-sand text-parra-sand hover:bg-white/10 hover:text-white group">
                  Llamar ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            <div className="hidden lg:block relative">
              <motion.div 
                initial={{ opacity: 0, rotate: 12, x: 50 }}
                whileInView={{ opacity: 1, rotate: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                className="aspect-square bg-parra-wood/40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 p-6"
              >
                <div className="w-full h-full bg-parra-sand rounded-xl overflow-hidden flex items-center justify-center italic text-parra-wood-dark font-medium p-8 text-center text-xl">
                  "Calidad, materiales y oficio en cada proyecto."
                </div>
              </motion.div>
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-parra-terracotta/20 rounded-full blur-3xl" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
