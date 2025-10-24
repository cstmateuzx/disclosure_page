import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">JenningsStudios</span>
            </div>
            <p className="text-sm text-gray-400">
              Transformando ideias em soluções web profissionais para seu negócio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="hover:text-primary-400 cursor-pointer transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  className="hover:text-primary-400 cursor-pointer transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-primary-400 cursor-pointer transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:text-primary-400 cursor-pointer transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-primary-400 cursor-pointer transition-colors">
                Web Design
              </li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">
                E-commerce
              </li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">
                Performance
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-primary-400 cursor-pointer transition-colors">
                Privacidade
              </li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">
                Termos de Uso
              </li>
              <li className="hover:text-primary-400 cursor-pointer transition-colors">
                Cookies
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} JenningsStudios. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
