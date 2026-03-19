import React from 'react';
import { Container } from '../ui/Container';
import { Hammer, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-parra-charcoal text-parra-sand-light py-16 border-t-[6px] border-parra-wood">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-parra-wood text-white p-2 rounded-lg">
                <Hammer className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl text-white tracking-tight">PARRA SpA</span>
                <span className="text-[10px] text-parra-sand uppercase font-semibold tracking-wider">Construmaderas</span>
              </div>
            </div>
            <p className="text-sm text-parra-sand/80 leading-relaxed max-w-sm">
              Empresa chilena especializada en proyectos de madera, construcciones, terminaciones y soluciones exteriores a medida. Oficio real, resultados sólidos.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Nosotros', 'Servicios', 'Productos', 'Proyectos Rápidos'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-sm text-parra-sand/80 hover:text-parra-wood transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-wider">Contacto</h4>
            <ul className="space-y-4 text-sm text-parra-sand/80">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-parra-wood shrink-0" />
                <span>
                  <div className="hover:text-white transition-colors cursor-pointer">+56 9 7989 3329 <span className="text-xs text-parra-sand/50">(Confirmar)</span></div>
                  <div className="hover:text-white transition-colors cursor-pointer">+56 9 5236 9384 <span className="text-xs text-parra-sand/50">(Confirmar)</span></div>
                </span>
              </li>
              <li className="flex items-center space-x-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-parra-wood" />
                <span>contacto@parraspa.cl <span className="text-xs text-parra-sand/50">(Placeholder)</span></span>
              </li>
            </ul>
          </div>

          {/* Location Col */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-wider">Ubicación</h4>
            <ul className="space-y-4 text-sm text-parra-sand/80">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-parra-wood shrink-0" />
                <div>
                  <p className="font-medium text-white">Operación Comercial</p>
                  <p>Quilleco, Biobío, Chile</p>
                  <p className="text-xs text-parra-sand/50 mt-1">(Atención a perímetros cercanos)</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 pt-2">
                <MapPin className="h-5 w-5 text-parra-sand/40 shrink-0" />
                <div>
                  <p className="text-xs text-parra-sand/60">Domicilio Legal</p>
                  <p className="text-xs text-parra-sand/60">Avda. General San Martín 359, Colina, RM.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-parra-sand/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-parra-sand/60 text-center md:text-left">
            © {new Date().getFullYear()} Construcciones Parra SpA. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-parra-wood transition-colors text-white">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-parra-wood transition-colors text-white">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
