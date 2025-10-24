import React from 'react';
import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Restaurante Bella Italia",
      description: "Website completo para restaurante italiano com menu interativo, reservas online e integração com redes sociais.",
      tags: ["React", "Tailwind", "Node.js"],
      link: "https://example.com/bella-italia",
      github: "https://github.com/example/bella-italia",
    },
    {
      id: 2,
      title: "PetShop Happy Paws",
      description: "Plataforma de e-commerce para loja de pets com catálogo de produtos, carrinho inteligente e sistema de agendamento.",
      tags: ["React", "Next.js", "Stripe"],
      link: "https://example.com/happy-paws",
      github: "https://github.com/example/happy-paws",
    },
    {
      id: 3,
      title: "Mercadinho Central",
      description: "Website responsivo para pequeno mercado com catálogo de produtos, ofertas em destaque e localização.",
      tags: ["React", "Tailwind", "SEO"],
      link: "https://example.com/mercadinho",
      github: "https://github.com/example/mercadinho",
    },
    {
      id: 4,
      title: "Studio de Beleza Elegance",
      description: "Site profissional com galeria de trabalhos, agendamento online, portfólio de serviços e depoimentos de clientes.",
      tags: ["React", "TypeScript", "Firebase"],
      link: "https://example.com/studio-elegance",
      github: "https://github.com/example/studio-elegance",
    },
    {
      id: 5,
      title: "Cafeteria Aromático",
      description: "Landing page atrativa com apresentação de café especial, localização, horários e integração com WhatsApp.",
      tags: ["React", "Tailwind", "WhatsApp API"],
      link: "https://example.com/aromatico",
      github: "https://github.com/example/aromatico",
    },
    {
      id: 6,
      title: "Salão Premium Looks",
      description: "Platform completa com showcases de estilos, agendamento avançado, sistema de fidelização de clientes.",
      tags: ["Next.js", "Tailwind", "Stripe"],
      link: "https://example.com/premium-looks",
      github: "https://github.com/example/premium-looks",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slideUp">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              Nossos Trabalhos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Portfólio de <span className="text-primary-500">Projetos</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Conheça os projetos que desenvolvemos para negócios de pequeno e médio porte. Cada um deles representa nossa dedicação em criar soluções digitais de qualidade.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                animation: `slideUp 0.5s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
              className="animate-slideUp"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
