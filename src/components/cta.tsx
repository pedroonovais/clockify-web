import React from 'react';
import { Button } from './button';
import { ArrowRightIcon } from 'lucide-react';
export function CTA() {
  return <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-right">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Pronto para otimizar o controle de tempo da sua equipe?
              </h2>
              <p className="text-xl text-gray-300">
                Comece hoje mesmo com nosso período de teste gratuito de 14
                dias. Sem compromisso, sem cartão de crédito.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Button className="px-8 py-3 text-lg">
                Começar Agora
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-center transition-colors">
                Agendar uma demonstração
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}