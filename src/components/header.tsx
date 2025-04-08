import React, { useState } from 'react';
import { Button } from './button';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center" data-aos="fade-up-left">

            <img src="/logo.svg" alt="Logo Clockify" className="h-16 w-auto"/>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8" data-aos="fade-up">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
              Recursos
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
              Como Funciona
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">
              Preços
            </a>
            <a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors">
              FAQ
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4" data-aos="fade-up-right">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              Login
            </a>
            <Button>Teste Grátis</Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-blue-400">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
                Recursos
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
                Como Funciona
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">
                Preços
              </a>
              <a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors">
                FAQ
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                Login
              </a>
              <Button>Teste Grátis</Button>
            </div>
          </div>}
      </div>
    </header>;
}