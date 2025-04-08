import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function HowItWorks() {
  const steps = [{
    number: '01',
    title: 'Registre seu tempo',
    description: 'Inicie o cronômetro ao começar uma tarefa ou registre manualmente suas horas de trabalho.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }, {
    number: '02',
    title: 'Categorize seu trabalho',
    description: 'Atribua horas a projetos específicos, clientes e categorias para manter tudo organizado.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }, {
    number: '03',
    title: 'Analise e otimize',
    description: 'Visualize relatórios detalhados e identifique oportunidades para melhorar a produtividade.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }];
  return <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Três passos simples para transformar a maneira como sua equipe
            gerencia o tempo
          </p>
        </div>
        <div className="space-y-24">
          {steps.map((step, index) => <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-20"></div>
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-700">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="inline-block text-4xl font-bold text-blue-500 mb-4">
                  {step.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">{step.description}</p>
                {index < steps.length - 1 && <div className="hidden lg:flex justify-center">
                    <ArrowRightIcon className={`h-8 w-8 text-blue-400 transform ${index % 2 === 1 ? 'rotate-180' : ''}`} />
                  </div>}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}