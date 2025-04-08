import React from 'react';
import { Button } from './button';
import { MailIcon } from 'lucide-react';

export function Newsletter() {
  return <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-left">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-10 blur-2xl"></div>
          <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute right-0 top-0 -mt-16 -mr-16">
              <div className="text-blue-500/10">
                <MailIcon size={200} />
              </div>
            </div>
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Fique por dentro das novidades
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Assine nossa newsletter e receba dicas de produtividade,
                atualizações do TimeTrack e conteúdo exclusivo.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Seu melhor e-mail" className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
                <Button className="whitespace-nowrap">
                  Assinar Newsletter
                </Button>
              </form>
              <p className="mt-4 text-sm text-gray-400">
                Ao se inscrever, você concorda em receber e-mails do TimeTrack.
                Você pode cancelar a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}