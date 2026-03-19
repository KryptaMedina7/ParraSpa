"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { Hammer, Trees, Zap, PaintRoller } from 'lucide-react';
import { Button } from '../ui/Button';

const services = [
  {
    icon: Trees,
    title: 'Proyectos en Madera',
    desc: 'Desde pérgolas y terrazas hasta mobiliario a medida. Trabajamos con maderas tratadas e impregnadas (ej. polines cilindrados) y alternativas nativas secas según disponibilidad.'
  },
  {
    icon: Hammer,
    title: 'Construcción Menor',
    desc: 'Ampliaciones, radieres, y obras exteriores. Nuestro perfil práctico asegura resultados robustos para requerimientos habitacionales o comerciales.'
  },
  {
    icon: PaintRoller,
    title: 'Terminaciones',
    desc: 'Cuidamos el detalle final. Revestimientos, pisos, pintura y todo lo necesario para que el trabajo entregado cumpla estándares de calidad profesional.'
  },
  {
    icon: Zap,
    title: 'Instalaciones Eléctricas',
    desc: 'Soporte técnico integrado para no depender de terceros en proyectos que exigen cableado, iluminación exterior e interior, y tableros.'
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-parra-sand-light/50">
      <Container>
        <SectionHeading 
          subtitle="Lo que Hacemos" 
          title="Soluciones híbridas y experiencia en terreno."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full group hover:border-parra-wood transition-colors duration-300">
                <CardContent className="p-8 md:p-10">
                  <div className="bg-parra-sand/30 p-4 rounded-xl inline-block mb-6 group-hover:bg-parra-wood group-hover:text-white transition-colors duration-300 text-parra-wood-dark">
                    <svc.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-parra-charcoal mb-4">{svc.title}</h3>
                  <p className="text-parra-charcoal/70 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-parra-terracotta">
                    Consultar viabilidad &rarr;
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
