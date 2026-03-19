"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const projects = [
  {
    title: "Estructura de Terrazas",
    category: "Proyectos en Madera",
    image: "https://images.unsplash.com/photo-1607712027533-2af321d16242?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Ampliación Residencial",
    category: "Construcción",
    image: "https://images.unsplash.com/photo-1655103797557-524307e07485?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Terminación de Fachada",
    category: "Terminaciones",
    image: "https://images.unsplash.com/photo-1561322957-ed0ee46e650b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Instalación Exterior",
    category: "Servicios",
    image: "https://images.unsplash.com/photo-1663313061310-78e67e1aa400?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Interiores a Medida",
    category: "Maderas",
    image: "https://images.unsplash.com/photo-1678184096514-d28596346091?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Estructura Metálica",
    category: "Construcción",
    image: "https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?q=80&w=800&auto=format&fit=crop"
  }
];

export const Gallery = () => {
  return (
    <section id="proyectos" className="py-24 bg-parra-sand-light/30">
      <Container>
        <SectionHeading 
          subtitle="Trabajos Reales"
          title="Nuestra experiencia en cada detalle."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-parra-charcoal/90 via-parra-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-parra-wood font-semibold text-xs uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h4 className="text-white text-xl font-bold">
                  {project.title}
                </h4>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded text-[10px] text-white font-medium group-hover:opacity-0 transition-opacity">
                {project.category}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-parra-charcoal/60 mb-8 italic">
            *Imágenes referenciales de capacidad técnica. Solicite portafolio actualizado vía WhatsApp.
          </p>
          <Button variant="outline" size="lg" onClick={() => window.open('https://wa.me/56979893329', '_blank')}>
            Ver más trabajos en WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
};
