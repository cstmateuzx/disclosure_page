import React, { useState } from 'react';
import { Mail, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      // Enviar para Formspree
      const response = await fetch('https://formspree.io/f/xvgvpggj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Limpar formulário após sucesso
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
          setSubmitted(false);
        }, 3000);
      } else {
        setSubmitted(false);
        alert('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setSubmitted(false);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  const businessTypes = [
    'Restaurante',
    'PetShop',
    'Mercado/Supermercado',
    'Salão de Beleza',
    'Café/Cafeteria',
    'Outro',
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mateuscustodiojennings@gmail.com',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '(21) 96738-9861',
      link: 'https://wa.me/5521967389861',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slideUp">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Pronto para <span className="text-primary-500">transformar seu negócio?</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Envie suas informações e em breve entrarei em contato para discutir a melhor solução para seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-secondary-50 border border-secondary-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 group-hover:bg-primary-200 rounded-lg transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-secondary-600 font-medium">{info.label}</p>
                    <p className="text-lg font-semibold text-secondary-900 break-words word-break">{info.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="animate-slideUp">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-secondary-900 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-secondary-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                  placeholder="seu.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-secondary-900 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                  placeholder="(XX) 99999-9999"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold text-secondary-900 mb-2">
                  Tipo de Negócio
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                >
                  <option value="">Selecione uma opção</option>
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-secondary-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                  placeholder="Conte-me mais sobre seu projeto..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>Mensagem enviada com sucesso!</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Solicitar Orçamento
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Box */}
          <div className="space-y-8 animate-slideUp">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-8 text-white shadow-soft">
              <h3 className="text-2xl font-bold mb-4">Processo Simples</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <p className="font-semibold">Envie sua solicitação</p>
                    <p className="text-sm text-white/80">Preencha o formulário com seus dados</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <p className="font-semibold">Análise personalizada</p>
                    <p className="text-sm text-white/80">Estudaremos seu negócio e necessidades</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <p className="font-semibold">Proposta customizada</p>
                    <p className="text-sm text-white/80">Apresentaremos uma solução sob medida</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <p className="font-semibold">Desenvolvimento e entrega</p>
                    <p className="text-sm text-white/80">Seu site pronto para crescer</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
