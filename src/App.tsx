import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers, Palette, BarChart3, Globe } from 'lucide-react';
import { cn } from './lib/utils';
import { AIStrategyWidget } from './components/AIStrategyWidget';

const BrandStar = ({ className = "", size = 24, style }: { className?: string, size?: number, style?: React.CSSProperties }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    style={style}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="41" y="0" width="18" height="100" />
    <g transform="rotate(45 50 50)"><rect x="41" y="0" width="18" height="100" /></g>
    <g transform="rotate(90 50 50)"><rect x="41" y="0" width="18" height="100" /></g>
    <g transform="rotate(135 50 50)"><rect x="41" y="0" width="18" height="100" /></g>
  </svg>
);

const ThreeStars = ({ className = "" }: { className?: string }) => (
  <div className={cn("flex gap-4", className)}>
    <BrandStar className="text-brand-blue" size={32} />
    <BrandStar className="text-brand-orange" size={32} />
    <BrandStar className="text-brand-blue" size={32} />
  </div>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={cn("flex flex-col leading-[0.8] font-black tracking-tighter", className)}>
    <div className="relative inline-block w-max">
      <span className="relative z-10 text-[1.25em]">be<span className="text-brand-black">.</span></span>
      <BrandStar
        className="absolute text-brand-blue z-20 pointer-events-none"
        style={{ width: '0.37em', height: '0.37em', left: '0.24em', bottom: '0.22em' }}
      />
    </div>
    <div className="text-[0.22em] tracking-[0.2em] uppercase mt-1 pl-1">STUDIO</div>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center bg-white border-b-2 border-brand-black">
        <Logo className="text-2xl" />
        <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-widest">
          <a href="#work" className="hover:text-brand-blue transition-colors">Proyectos</a>
          <a href="#services" className="hover:text-brand-blue transition-colors">Servicios</a>
          <a href="#about" className="hover:text-brand-blue transition-colors">Agencia</a>
          <a href="#contact" className="hover:text-brand-blue transition-colors">Contacto</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hidden md:block bg-brand-lime text-brand-black px-6 py-2 border-2 border-brand-black font-bold text-xs uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
            Empezar
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border-2 border-brand-black z-50 relative">
              <div className={cn("w-6 h-0.5 bg-brand-black mb-1.5 transition-all", isMenuOpen && "rotate-45 translate-y-2")}></div>
              <div className={cn("w-6 h-0.5 bg-brand-black transition-all", isMenuOpen && "-rotate-45")}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-brand-blue z-30 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out px-6",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col gap-10 text-3xl font-black text-white uppercase tracking-widest text-center">
          <a href="#work" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-lime transition-colors">Proyectos</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-lime transition-colors">Servicios</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-lime transition-colors">Agencia</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-lime transition-colors">Contacto</a>
        </div>
      </div>
    </>
  );
};

const Hero = () => (
  <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 overflow-hidden bg-brand-gray/30">
    <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-5">
      <div className="grid grid-cols-12 h-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-brand-black h-full"></div>
        ))}
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block bg-brand-blue text-white px-4 py-1 font-black text-xs uppercase tracking-[0.2em] mb-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(191,245,50,1)]">
          Marketing & Design Studio
        </div>
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] leading-[0.8] mb-10 uppercase">
          BE <br />
          <span className="text-brand-blue">BOLD.</span> <br />
          BE <span className="text-brand-orange">YOU.</span>
        </h1>
        <ThreeStars className="mb-10" />
        <p className="max-w-md text-xl font-medium text-brand-black/70 mb-10 leading-tight">
          Transformamos marcas a través de diseño estratégico y marketing de alto impacto. No solo existas, <span className="text-brand-blue font-black">destaca.</span>
        </p>
        <div className="flex flex-wrap gap-6">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand-black text-white px-10 py-5 border-2 border-brand-black font-black text-sm uppercase tracking-widest hover:bg-brand-blue transition-all shadow-[6px_6px_0px_0px_rgba(191,245,50,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-3">
            Hablemos <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-lime border-2 border-brand-black -z-10 animate-pulse"></div>
        <div className="brutal-card overflow-hidden aspect-square bg-white">
          <img
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
            alt="Creative Studio"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-4xl font-black italic">100%</div>
          <div className="text-[10px] uppercase font-bold tracking-widest">Creatividad Pura</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="bg-brand-black py-6 border-y-2 border-brand-black overflow-hidden whitespace-nowrap flex">
    <div className="animate-marquee flex items-center">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex gap-12 items-center pr-12">
          <span className="text-white text-4xl font-black uppercase tracking-tighter">UX/UI DESIGN</span>
          <BrandStar className="text-brand-lime" size={28} />
          <span className="text-brand-blue text-4xl font-black uppercase tracking-tighter">MARKETING</span>
          <BrandStar className="text-brand-orange" size={28} />
          <span className="text-white text-4xl font-black uppercase tracking-tighter">BRANDING</span>
          <BrandStar className="text-brand-lime" size={28} />
        </div>
      ))}
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Palette size={40} />,
      title: "Diseño UX/UI",
      color: "bg-brand-lime",
      description: "Interfaces intuitivas que priorizan la experiencia del usuario y la conversión."
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Marketing",
      color: "bg-brand-blue",
      textColor: "text-white",
      description: "Estrategias de crecimiento acelerado basadas en datos y creatividad."
    },
    {
      icon: <Layers size={40} />,
      title: "Branding",
      color: "bg-brand-orange",
      textColor: "text-white",
      description: "Identidades visuales potentes que cuentan la historia única de tu marca."
    },
    {
      icon: <Globe size={40} />,
      title: "Desarrollo",
      color: "bg-brand-gray",
      description: "Soluciones tecnológicas robustas y escalables para el mundo digital."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue mb-4 block">Nuestros Servicios</span>
          <h2 className="text-6xl md:text-8xl uppercase leading-none">SOLUCIONES <br /><span className="text-brand-orange">SIN LÍMITES.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={cn(
                "p-10 border-2 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full transition-all",
                service.color,
                service.textColor || "text-brand-black"
              )}
            >
              <div className="mb-8 p-3 border-2 border-brand-black bg-white text-brand-black inline-block self-start">
                {service.icon}
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="font-medium leading-tight opacity-90">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "NEO BANK", category: "FINTECH", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop", color: "bg-brand-blue" },
    { title: "GLOW UP", category: "BEAUTY", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop", color: "bg-brand-lime" },
    { title: "RUNNER X", category: "SPORTS", img: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea8?q=80&w=800&auto=format&fit=crop", color: "bg-brand-orange" },
    { title: "ZENITH", category: "LUXURY", img: "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?q=80&w=800&auto=format&fit=crop", color: "bg-brand-black" }
  ];

  return (
    <section id="work" className="py-32 px-6 md:px-24 bg-brand-gray/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-6xl md:text-8xl uppercase">PROYECTOS</h2>
          <button className="hidden md:block text-xs font-black uppercase tracking-widest border-b-4 border-brand-blue pb-1 hover:text-brand-blue transition-colors">Ver todos</button>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] brutal-card overflow-hidden mb-8">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className={cn("absolute top-6 left-6 px-4 py-1 border-2 border-brand-black font-black text-xs uppercase tracking-widest", project.color, project.color === 'bg-brand-black' ? 'text-white' : 'text-brand-black')}>
                  {project.category}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-4xl font-black uppercase tracking-tighter">{project.title}</h3>
                <div className="w-12 h-12 rounded-full border-2 border-brand-black flex items-center justify-center group-hover:bg-brand-lime transition-colors">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission delay
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-brand-lime/20 blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square rounded-full bg-brand-orange/20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-7xl md:text-9xl font-black uppercase leading-[0.8] mb-12">
              HAGAMOS <br />HISTORIA <br /><span className="text-brand-lime">JUNTOS.</span>
            </h2>
            <div className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-widest font-black text-white/60 mb-4">Escríbenos</p>
                <a href="mailto:hello@be.studio" className="text-4xl md:text-5xl font-black hover:text-brand-lime transition-colors border-b-4 border-brand-lime pb-2">hello@be.studio</a>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-xs uppercase tracking-widest font-black text-white/60 mb-2">Llámanos</p>
                  <p className="text-xl font-bold">+34 900 000 000</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-black text-white/60 mb-2">Síguenos</p>
                  <p className="text-xl font-bold">@be.studio</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 border-4 border-brand-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-brand-black">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest font-black">Tu Nombre</label>
                <input required type="text" name="name" className="w-full border-b-4 border-brand-black py-3 focus:outline-none focus:border-brand-blue transition-colors font-bold text-xl" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest font-black">Tu Email</label>
                <input required type="email" name="email" className="w-full border-b-4 border-brand-black py-3 focus:outline-none focus:border-brand-blue transition-colors font-bold text-xl" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest font-black">Cuéntanos tu idea</label>
                <textarea required name="message" rows={3} className="w-full border-b-4 border-brand-black py-3 focus:outline-none focus:border-brand-blue transition-colors font-bold text-xl resize-none"></textarea>
              </div>
              <button
                disabled={status === 'submitting'}
                className="w-full bg-brand-black text-white py-6 font-black uppercase tracking-widest text-lg hover:bg-brand-blue transition-all shadow-[6px_6px_0px_0px_rgba(191,245,50,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50"
              >
                {status === 'submitting' ? 'Enviando...' : status === 'success' ? '¡Enviado!' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 md:px-24 bg-white border-t-4 border-brand-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <Logo className="text-3xl" />
      <div className="flex gap-10 text-xs font-black uppercase tracking-widest">
        <a href="#" className="hover:text-brand-blue transition-colors">Instagram</a>
        <a href="#" className="hover:text-brand-blue transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-brand-blue transition-colors">Behance</a>
      </div>
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">© 2026 be. STUDIO. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative selection:bg-brand-lime selection:text-brand-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <AIStrategyWidget />
    </div>
  );
}
