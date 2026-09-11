import React from 'react';
import Image from 'next/image';

export default function InvestMais() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-mf-black to-[#0a0a0f]">
      <div className="max-w-4xl mx-auto text-center space-y-12 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight relative z-10">
          Depois de organizar, é hora de <br/> fazer o dinheiro trabalhar.
        </h2>
        
        <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-[#14141a] to-[#050505] border border-mf-gold/20 relative overflow-hidden group">
          {/* Fundo otimizado para não travar */}
          <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_60%)] group-hover:bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] transition-all duration-700 pointer-events-none transform-gpu"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] -mb-4 mix-blend-screen opacity-90 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <Image src="/investe.png" alt="Logo Método Investe Mais" fill className="object-contain" />
            </div>

            <h3 className="text-2xl md:text-4xl font-bold text-mf-gold mb-4 relative z-10">
              Conheça o Método Investe Mais
            </h3>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Um método complementar para quem quer dar o próximo passo depois de colocar a vida financeira em ordem.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-left w-full relative z-10">
              <div className="flex-1 p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md w-full">
                <div className="text-mf-green font-bold text-xl mb-2">1. Organize</div>
                <p className="text-sm text-gray-400">Método Financeiro IA</p>
              </div>
              <span className="text-white/20 text-2xl rotate-90 md:rotate-0">➔</span>
              <div className="flex-1 p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md w-full">
                <div className="text-mf-green font-bold text-xl mb-2">2. Rotina</div>
                <p className="text-sm text-gray-400">Assistente IA</p>
              </div>
              <span className="text-mf-gold/50 text-2xl rotate-90 md:rotate-0">➔</span>
              <div className="flex-1 p-6 rounded-2xl bg-mf-gold/10 border border-mf-gold/30 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)] w-full">
                <div className="text-mf-gold font-bold text-xl mb-2">3. Invista</div>
                <p className="text-sm text-mf-gold/80">Método Investe Mais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}