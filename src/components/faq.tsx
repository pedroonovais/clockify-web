import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const faqs = [{
    question: 'Como o TimeTrack pode ajudar minha empresa?',
    answer: 'O TimeTrack ajuda sua empresa a monitorar com precisão o tempo gasto em projetos, otimizar a alocação de recursos, melhorar a produtividade e garantir um faturamento preciso baseado nas horas trabalhadas.'
  }, {
    question: 'Posso experimentar o TimeTrack antes de assinar?',
    answer: 'Sim! Oferecemos um período de teste gratuito de 14 dias para todos os planos, sem necessidade de cartão de crédito. Você pode experimentar todas as funcionalidades antes de decidir qual plano é melhor para sua empresa.'
  }, {
    question: 'O TimeTrack funciona em dispositivos móveis?',
    answer: 'Sim, o TimeTrack possui aplicativos nativos para iOS e Android, permitindo que você e sua equipe registrem horas em qualquer lugar, mesmo offline. Os dados serão sincronizados automaticamente quando a conexão for restabelecida.'
  }, {
    question: 'Quais integrações o TimeTrack oferece?',
    answer: 'O TimeTrack se integra com diversas ferramentas populares como Jira, Asana, Trello, Slack, QuickBooks, Xero e muitas outras. Também oferecemos uma API robusta para integrações personalizadas.'
  }, {
    question: 'Posso mudar de plano depois?',
    answer: 'Absolutamente! Você pode atualizar ou fazer downgrade do seu plano a qualquer momento. Se você atualizar, o valor será ajustado proporcionalmente ao tempo restante do seu período de cobrança atual.'
  }, {
    question: 'Como é o suporte ao cliente?',
    answer: 'Oferecemos suporte por e-mail para todos os clientes e suporte prioritário por chat ao vivo para os planos Professional e Enterprise. Os clientes Enterprise também têm acesso a um gerente de conta dedicado.'
  }];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300">
            Tudo o que você precisa saber sobre o TimeTrack
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="border border-gray-700 rounded-lg overflow-hidden" data-aos="fade-left">
              <button className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none" onClick={() => toggleFAQ(index)}>
                <h3 className="text-lg font-medium text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-blue-400" /> : <ChevronDownIcon className="h-5 w-5 text-blue-400" />}
              </button>
              {openIndex === index && <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
}