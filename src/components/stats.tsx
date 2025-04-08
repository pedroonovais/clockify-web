import React from 'react';
import { Users2Icon, ClockIcon, BarChart2Icon, BuildingIcon } from 'lucide-react';
export function Stats() {
  const stats = [{
    icon: <Users2Icon className="h-6 w-6 text-blue-400" />,
    value: '50,000+',
    label: 'Usuários Ativos'
  }, {
    icon: <ClockIcon className="h-6 w-6 text-blue-400" />,
    value: '2M+',
    label: 'Horas Registradas'
  }, {
    icon: <BarChart2Icon className="h-6 w-6 text-blue-400" />,
    value: '30%',
    label: 'Aumento de Produtividade'
  }, {
    icon: <BuildingIcon className="h-6 w-6 text-blue-400" />,
    value: '10,000+',
    label: 'Empresas'
  }];
  return <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-colors" data-aos="fade-left">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
}