import React from 'react';
import { ClockIcon, BarChartIcon, UsersIcon, FileTextIcon, BellIcon, LockIcon } from 'lucide-react';
export function Features() {
  const features = [{
    icon: <ClockIcon className="h-8 w-8 text-blue-400" />,
    title: 'Registro de Horas',
    description: 'Registre horas facilmente com cronômetro integrado e acompanhamento automático de projetos.'
  }, {
    icon: <BarChartIcon className="h-8 w-8 text-blue-400" />,
    title: 'Relatórios Detalhados',
    description: 'Gere relatórios personalizados para análise de produtividade e faturamento por projeto.'
  }, {
    icon: <UsersIcon className="h-8 w-8 text-blue-400" />,
    title: 'Gestão de Equipes',
    description: 'Gerencie sua equipe, atribua tarefas e monitore o desempenho em tempo real.'
  }, {
    icon: <FileTextIcon className="h-8 w-8 text-blue-400" />,
    title: 'Faturamento Automatizado',
    description: 'Gere faturas automaticamente com base nas horas registradas por cliente ou projeto.'
  }, {
    icon: <BellIcon className="h-8 w-8 text-blue-400" />,
    title: 'Lembretes Inteligentes',
    description: 'Receba lembretes para registrar horas e alertas sobre prazos de projetos.'
  }, {
    icon: <LockIcon className="h-8 w-8 text-blue-400" />,
    title: 'Segurança Avançada',
    description: 'Seus dados estão protegidos com criptografia de ponta a ponta e controles de acesso.'
  }];
  return <section id="features" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recursos Poderosos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma oferece tudo que você precisa para gerenciar o
            tempo da sua equipe com eficiência
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {features.map((feature, index) => <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors" data-aos="fade-left">
              <div className="mb-4 p-3 bg-blue-900/20 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}