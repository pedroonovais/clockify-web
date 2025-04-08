import React from 'react';
import { Button } from './button';
import { ClockIcon, CheckCircleIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Controle de horas <span className="text-blue-400">simples</span> e{' '}
              <span className="text-blue-400">eficiente</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Gerencie o tempo da sua equipe com facilidade. Nossa plataforma de
              timesheet automatiza o registro de horas, relatórios e
              faturamento.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-up">
              <Button>Começar Agora</Button>
              <Button variant="outline">Ver Demonstração</Button>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">14 dias grátis</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">Sem cartão de crédito</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">Suporte gratuito</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-700 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="mx-auto text-gray-400 text-sm">
                      TimeTrack Dashboard
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-medium text-white">
                        Registro de Horas
                      </h3>
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Hoje
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[1, 2, 3].map(item => <div key={item} className="bg-gray-750 p-4 rounded-lg border border-gray-700">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium text-white">
                                Projeto {item}
                              </div>
                              <div className="text-sm text-gray-400">
                                Desenvolvimento
                              </div>
                            </div>
                            <div className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                              2:45h
                            </div>
                          </div>
                          <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{
                          width: `${30 + item * 20}%`
                        }}></div>
                          </div>
                        </div>)}
                    </div>
                    <div className="mt-6" data-aos="fade-up">
                      <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                        <ClockIcon size={18} />
                        <span>Iniciar Novo Registro</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}