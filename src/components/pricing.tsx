import React, { useState } from 'react';
import { Button } from './button';
import { CheckIcon } from 'lucide-react';
export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const plans = [{
    name: 'Starter',
    description: 'Perfeito para freelancers e profissionais individuais',
    monthlyPrice: 'R$ 29',
    annualPrice: 'R$ 19',
    features: ['Rastreamento de tempo ilimitado', 'Relatórios básicos', '1 usuário', '5 projetos', 'Exportação em CSV', 'Suporte por e-mail'],
    cta: 'Começar Agora',
    highlighted: false
  }, {
    name: 'Professional',
    description: 'Ideal para pequenas equipes e empresas em crescimento',
    monthlyPrice: 'R$ 59',
    annualPrice: 'R$ 49',
    features: ['Tudo do plano Starter', 'Até 10 usuários', 'Projetos ilimitados', 'Relatórios avançados', 'Integração com faturamento', 'Suporte prioritário'],
    cta: 'Experimentar Grátis',
    highlighted: true
  }, {
    name: 'Enterprise',
    description: 'Para grandes equipes com necessidades avançadas',
    monthlyPrice: 'R$ 99',
    annualPrice: 'R$ 89',
    features: ['Tudo do plano Professional', 'Usuários ilimitados', 'API completa', 'SSO e recursos avançados de segurança', 'Gerenciamento de permissões', 'Gerente de conta dedicado'],
    cta: 'Fale Conosco',
    highlighted: false
  }];
  return <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planos Simples e Transparentes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para suas necessidades de controle de tempo
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${isAnnual ? 'text-gray-400' : 'text-white'}`}>
              Mensal
            </span>
            <button onClick={() => setIsAnnual(!isAnnual)} className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-700">
              <span className="sr-only">Toggle annual billing</span>
              <span className={`inline-block h-4 w-4 transform rounded-full bg-blue-500 transition ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Anual <span className="text-blue-400 font-medium">(20% off)</span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => <div key={index} className={`rounded-xl overflow-hidden ${plan.highlighted ? 'border-2 border-blue-500 bg-gray-900 transform scale-105 shadow-xl shadow-blue-500/20' : 'border border-gray-700 bg-gray-900'}`} data-aos="fade-left">
              {plan.highlighted && <div className="bg-blue-500 text-center py-2 text-sm font-semibold text-white">
                  MAIS POPULAR
                </div>}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 h-12">{plan.description}</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-white">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => <div key={i} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>)}
                </div>
                <Button variant={plan.highlighted ? 'primary' : 'outline'} className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}