import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { Differentiation } from '@/components/sections/Differentiation';
import { Gallery } from '@/components/sections/Gallery';
import { Process } from '@/components/sections/Process';
import { Coverage } from '@/components/sections/Coverage';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProposition />
      <About />
      <Services />
      <FeaturedProducts />
      <Differentiation />
      <Gallery />
      <Process />
      <Coverage />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
