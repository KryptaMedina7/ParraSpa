# Parra-Spa Landing Page

Una aplicación web (landing page) profesional desarrollada en **Next.js 15**, **React 19**, **Tailwind CSS v4** y **Framer Motion**, orientada a servicios de carpintería y construcción en madera. El proyecto está completamente configurado para ser exportado como un **sitio estático puro** y puede ser alojado en plataformas como Netlify, Vercel o GitHub Pages.

## Características

- ⚡️ **Next.js 15 & React 19:** Últimas tecnologías del ecosistema frontend.
- 🎨 **Tailwind CSS v4:** Estilos modernos y responsivos.
- ✨ **Framer Motion:** Animaciones suaves y atractivas.
- 🖼️ **Optimización de imágenes estáticas:** 
ext.config.ts ajustado para la generación estática sin necesidad de un backend.
- 🚫 **Gestión de URLs (404-Proof):** Implementación de la redirección SPA en Netlify mediante _redirects.

## Comandos Disponibles

### Desarrollo Local

\\\ash
npm run dev
\\\

Abre [http://localhost:3000](http://localhost:3000) en el navegador para ver los resultados en tiempo real.

### Construcción Estática (Static Export)

\\\ash
npm run build
\\\

Este comando compilará el proyecto y generará una carpeta \out/\ con todos los archivos estáticos listos para producción.

## Despliegue en Netlify

El proyecto está diseñado para funcionar en Netlify sin configuraciones adicionales complejas de backend.

1. Conecta este repositorio en Netlify.
2. **Build command:** \
pm run build\
3. **Publish directory:** \out\
4. El archivo \public/_redirects\ se encarga de evitar los errores 404 al recargar rutas de la aplicación.

