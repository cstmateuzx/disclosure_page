import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, tags, link, github }) => {
  return (
    <div className="group bg-white rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden border border-secondary-100 hover:border-primary-300">
      {/* Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-10">💻</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-secondary-900">{title}</h3>
        <p className="text-secondary-600 line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-secondary-100">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Projeto
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-secondary-900 text-white py-2 rounded-lg font-semibold hover:bg-secondary-800 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
