import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slideUp space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                  Soluções Web Personalizadas
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6">
                Transforme sua <span className="text-primary-500">presença online</span>
              </h1>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Criamos sites modernos e profissionais para restaurantes, petshops, mercadinhos, salões de beleza e pequenos negócios. Design elegante, performance otimizada e totalmente responsivo.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Ver Portfólio
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="bg-secondary-100 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-200 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Solicitar Orçamento
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-secondary-200">
              <div>
                <p className="text-3xl font-bold text-primary-500">10+</p>
                <p className="text-sm text-secondary-600">Projetos Entregues</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-500">100%</p>
                <p className="text-sm text-secondary-600">Clientes Satisfeitos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-500">3+</p>
                <p className="text-sm text-secondary-600">Anos de Experiência</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
