import React from 'react';
import { User, Code, Zap, Target, BookOpen, Award } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "SvelteKit"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Python"] },
    { category: "Ferramentas", items: ["Git"] },
    { category: "Design", items: ["UI/UX", "Responsivo", "Acessibilidade"] },
  ];

  const experience = [
    {
      year: "2024 - 2025",
      title: "Projetos Independentes",
      company: "Independente",
      description: "Criação de projetos independentes e freelancer para fins de estudo e aprendizado.",
    },
    {
      year: "2023 - 2024",
      title: "Trabalho de Conclusão de Curso em Desenvolvimento de Sistemas",
      company: "Colégio Pedro II",
      description: "Primeiros passos na programação web e desenvolvimento de APIs.",
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slideUp">
          <div className="flex items-center justify-center gap-2 mb-4">
            <User className="w-5 h-5 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              Conheça
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Sobre <span className="text-primary-500">Mim</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* About Content */}
          <div className="space-y-6 animate-slideUp">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary-900">
                Desenvolvedor Web
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Meu nome é Mateus Custodio Jennings e sou um desenvolvedor web especializado em criar soluções digitais para pequenos negócios. Com mais de 3 anos de experiência, transformo ideias em websites profissionais que geram resultados.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Acredito que todo negócio, independentemente do tamanho, merece uma presença online de qualidade. Por isso, trabalho com dedicação para criar sites que não apenas parecem bons, mas também funcionam perfeitamente e geram mais clientes.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Code className="w-6 h-6 text-primary-500 mb-2" />
                <p className="font-semibold text-secondary-900">Código Limpo</p>
                <p className="text-xs text-secondary-600">Qualidade profissional</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Zap className="w-6 h-6 text-primary-500 mb-2" />
                <p className="font-semibold text-secondary-900">Performance</p>
                <p className="text-xs text-secondary-600">Rápido e otimizado</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Target className="w-6 h-6 text-primary-500 mb-2" />
                <p className="font-semibold text-secondary-900">Foco em Resultados</p>
                <p className="text-xs text-secondary-600">Negócio em primeiro lugar</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-secondary-200">
                <Award className="w-6 h-6 text-primary-500 mb-2" />
                <p className="font-semibold text-secondary-900">Dedicado</p>
                <p className="text-xs text-secondary-600">Compromisso total</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 animate-slideUp">
            <h3 className="text-2xl font-bold text-secondary-900">Habilidades Técnicas</h3>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-3">
                <h4 className="font-semibold text-secondary-900">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-secondary-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="bg-white p-8 rounded-xl border border-secondary-200 animate-slideUp">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">Experiência Profissional</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-primary-100"></div>
                  {index < experience.length - 1 && (
                    <div className="w-1 h-12 bg-primary-100 mt-4"></div>
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-semibold text-primary-600">{exp.year}</p>
                  <h4 className="text-lg font-bold text-secondary-900">{exp.title}</h4>
                  <p className="text-secondary-600 font-medium">{exp.company}</p>
                  <p className="text-secondary-600 text-sm mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
