import React from 'react';
export function Integrations() {
  const integrations = [{
    name: 'Slack',
    description: 'Notificações e atualizações em tempo real',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg'
  }, {
    name: 'Jira',
    description: 'Sincronização automática de tarefas',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg'
  }, {
    name: 'GitHub',
    description: 'Integração com commits e pull requests',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
  }, {
    name: 'Trello',
    description: 'Gestão de projetos simplificada',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg'
  }, {
    name: 'Microsoft Teams',
    description: 'Colaboração em equipe integrada',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg'
  }, {
    name: 'Google Calendar',
    description: 'Sincronização de agenda e eventos',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg'
  }];
  return <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Integre com suas ferramentas favoritas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            O Clockify se conecta com as principais ferramentas do mercado para
            tornar seu trabalho ainda mais eficiente
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:scale-105"  data-aos="fade-left">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-white rounded-lg mr-4">
                  <img src={integration.icon} alt={integration.name} className="h-8 w-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {integration.name}
                  </h3>
                  <p className="text-gray-400">{integration.description}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}