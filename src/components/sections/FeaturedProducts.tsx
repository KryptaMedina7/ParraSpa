"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

const products = [
  {
    title: 'Jardinera Grande con Compartimiento',
    specs: '20x20x60 cm',
    desc: 'Fabricadas con madera sólida y tratada. Ideales para separar ambientes en terrazas grandes comerciales o residenciales.',
    imageUrl: 'https://images.unsplash.com/photo-1761455953091-24c11829a982?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Jardinera Cuadrada',
    specs: '36x36x34 cm',
    desc: 'Diseño compacto y resistente. Materialidad noble preparada para resistir al exterior y entregar valor estético.',
    imageUrl: 'https://images.unsplash.com/photo-1687299443525-96f91e129053?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Polines Cilindrados Impregnados',
    specs: '2,44 m',
    desc: 'Venta orientada a construcciones exteriores, cierres perimetrales y pilares de terrazas. Alta durabilidad técnica.',
    imageUrl: 'https://images.unsplash.com/photo-1634672652995-ee7525bce595?q=80&w=600&auto=format&fit=crop'
  }
];

export const FeaturedProducts = () => {
  return (
    <section id="productos" className="py-24 bg-white">
      <Container>
        <SectionHeading 
          subtitle="Catálogo Destacado" 
          title="Productos de exterior directo del taller."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full flex flex-col group">
                {/* Image Placeholder */}
                <div className="h-56 relative overflow-hidden bg-parra-sand">
                  <div className="absolute inset-0 bg-parra-charcoal/20 z-10 
                                group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src={prod.imageUrl} 
                    alt={prod.title} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <CardContent className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="font-bold text-xl text-parra-charcoal leading-tight">
                      {prod.title}
                    </h3>
                  </div>
                  
                  <span className="inline-block bg-parra-sand-light text-parra-wood-dark px-3 py-1 rounded-md text-sm font-semibold mb-4 w-fit">
                    {prod.specs}
                  </span>
                  
                  <p className="text-parra-charcoal/70 text-sm leading-relaxed mb-6 flex-1">
                    {prod.desc}
                  </p>
                  
                  <Button variant="outline" className="w-full justify-center group-hover:bg-parra-wood group-hover:text-white group-hover:border-parra-wood transition-all">
                    Cotizar cantidad
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-parra-charcoal/60 mb-6">
            Además de la fabricación a medida, contamos con opciones de venta minorista y mayorista.
          </p>
          <Button onClick={() => window.location.href = '#contacto'}>
            Consultar Otros Productos
          </Button>
        </div>
      </Container>
    </section>
  );
};
