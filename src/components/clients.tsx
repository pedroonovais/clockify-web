import React from 'react';
import { StarIcon } from 'lucide-react';
export function Clients() {
  const testimonials = [{
    content: 'O TimeTrack revolucionou a forma como gerenciamos o tempo em nossa empresa. A produtividade aumentou significativamente.',
    author: 'Maria Silva',
    role: 'CEO',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    content: 'Interface intuitiva e relatórios detalhados. Exatamente o que precisávamos para nossa equipe em crescimento.',
    author: 'João Santos',
    role: 'CTO',
    company: 'InovaSoft',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    content: 'O melhor investimento que fizemos em 2023. O suporte é excepcional e as atualizações constantes mostram o comprometimento da equipe.',
    author: 'Ana Costa',
    role: 'COO',
    company: 'GlobalTech',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }];
  const companyLogos = [{
    name: 'Empresa 1',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png'
  }, {
    name: 'Empresa 2',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  }, {
    name: 'Empresa 3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
  }, {
    name: 'Empresa 4',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
  }, {
    name: 'Empresa 5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Spotify_logo_with_text.svg'
  }, {
    name: 'Empresa 6',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  }];
  return <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Empresas que confiam no TimeTrack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Junte-se a milhares de empresas que já transformaram sua gestão de
            tempo
          </p>
        </div>
        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {companyLogos.map((company, index) => <div key={index} className="flex items-center justify-center">
              <img src={company.logo} alt={company.name} className="h-8 max-w-[120px] object-contain filter brightness-0 invert opacity-50 hover:opacity-75 transition-opacity" />
            </div>)}
        </div>
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-blue-400 fill-current" />)}
              </div>
              <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="h-10 w-10 rounded-full mr-4" />
                <div>
                  <div className="text-white font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}