import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start md:justify-center min-h-[100svh] px-4 pt-[16vh] md:pt-0 pb-12 text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(0,224,84,0.15)_0%,transparent_70%)] rounded-full pointer-events-none transform-gpu"></div>
      
      <div className="relative z-10 max-w-4xl flex flex-col items-center">
        
        <div className="relative w-[150px] h-[150px] md:w-[320px] md:h-[320px] -mb-6 md:-mb-12 animate-float mix-blend-screen pointer-events-none">
          <Image 
            src="/logo.png" 
            alt="Logo Método Financeiro IA" 
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] z-10">
          Organize sua vida financeira em até 30 dias usando <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mf-green to-emerald-400">Inteligência Artificial</span>.
        </h1>
        
        <p className="text-[15px] md:text-xl text-gray-400 max-w-2xl mt-4 mb-6 md:mb-10 px-2 relative z-10 leading-snug">
          Aprenda a controlar seus gastos, organizar seus recebimentos e utilizar um assistente financeiro com IA para ter mais clareza.
        </p>

        <div className="animate-[float_4s_ease-in-out_infinite] mt-2 relative z-50 w-full max-w-md mx-auto">
          <a 
            href="https://pay.cakto.com.br/te2ozto_1081481"
            className="group relative overflow-hidden px-5 py-4 md:px-10 md:py-5 bg-mf-green text-black font-extrabold rounded-2xl text-[14px] md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,224,84,0.6)] animate-[pulse_2s_infinite] flex items-center justify-center gap-2 md:gap-3 w-full cursor-pointer touch-manipulation block"
          >
            <span className="relative z-10 pointer-events-none tracking-tight">QUERO ORGANIZAR MINHA VIDA FINANCEIRA</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform pointer-events-none flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
            <span className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-[1.2s] ease-in-out z-0 pointer-events-none"></span>
          </a>
        </div>
      </div>
    </section>
  );
}