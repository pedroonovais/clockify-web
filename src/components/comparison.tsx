import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
export function Comparison() {
  const features = [{
    name: 'Rastreamento de tempo',
    clockify: true,
    others: true
  }, {
    name: 'Relatórios automáticos',
    clockify: true,
    others: true
  }, {
    name: 'Interface intuitiva',
    clockify: true,
    others: false
  }, {
    name: 'Integração com faturamento',
    clockify: true,
    others: false
  }, {
    name: 'Lembretes inteligentes',
    clockify: true,
    others: false
  }, {
    name: 'Aplicativo móvel offline',
    clockify: true,
    others: false
  }];
  return <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que escolher o Clockify?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare e veja por que somos a escolha ideal para sua empresa
          </p>
        </div>
        <div className="relative" data-aos="fade-left">
          <div className="absolute -inset-4 bg-blue-500/20 rounded-lg blur-lg -z-10"></div>
          <div className="relative overflow-hidden bg-gray-900 border border-gray-700 rounded-xl">
            <div className="grid grid-cols-3 gap-px bg-gray-700">
              <div className="bg-gray-900 p-6">
                <span className="text-gray-400 text-sm font-medium">
                  Recursos
                </span>
              </div>
              <div className="bg-gray-900 p-6 text-center">
                <span className="text-blue-400 font-bold">Clockify</span>
              </div>
              <div className="bg-gray-900 p-6 text-center">
                <span className="text-gray-400">Outros</span>
              </div>
            </div>
            {features.map((feature, index) => <div key={index} className="grid grid-cols-3 gap-px bg-gray-700">
                <div className="bg-gray-900 p-6">
                  <span className="text-gray-300">{feature.name}</span>
                </div>
                <div className="bg-gray-900 p-6 flex justify-center items-center">
                  <CheckIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div className="bg-gray-900 p-6 flex justify-center items-center">
                  {feature.others ? <CheckIcon className="h-5 w-5 text-gray-400" /> : <XIcon className="h-5 w-5 text-gray-600" />}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}