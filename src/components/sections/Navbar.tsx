"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Menu, X, Hammer } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Productos', href: '#productos' },
  { name: 'Proyectos', href: '#proyectos' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center space-x-2 group">
          <div className="bg-parra-wood text-white p-2 rounded-lg group-hover:bg-parra-wood-dark transition-colors">
            <Hammer className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-lg md:text-xl tracking-tight transition-colors ${
              (isScrolled || isMobileMenuOpen) ? 'text-parra-charcoal' : 'text-white'
            }`}>PARRA SpA</span>
            <span className={`text-[10px] md:text-xs uppercase font-semibold tracking-wider transition-colors ${
              (isScrolled || isMobileMenuOpen) ? 'text-parra-olive' : 'text-gray-300'
            }`}>Construmaderas</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled 
                      ? 'text-parra-charcoal/80 hover:text-parra-wood' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-6 w-px bg-parra-sand mx-4" />
          <Button size="sm" onClick={() => window.location.href = '#contacto'}>
            Cotizar Proyecto
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${
            (isScrolled || isMobileMenuOpen) ? 'text-parra-charcoal' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-parra-sand mt-3 overflow-hidden"
          >
            <Container className="py-6 flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-parra-charcoal py-2 border-b border-parra-sand-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4" onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = '#contacto';
              }}>
                Cotizar Proyecto
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
