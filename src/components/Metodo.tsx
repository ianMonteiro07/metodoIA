import React from 'react';

export default function Metodo() {
  const modulos = [
    "Organização de receitas e despesas", //[cite: 1]
    "Controle dos gastos", //[cite: 1]
    "Organização de cartões", //[cite: 1]
    "Metas financeiras", //[cite: 1]
    "Planejamento mensal", //[cite: 1]
    "Construção de reserva", //[cite: 1]
    "Revisão financeira", //[cite: 1]
    "Prompts e comandos para utilizar IA", //[cite: 1]
    "Assistente financeiro 24h" //[cite: 1]
  ];

  return (
    <section className="py-20 px-6 bg-mf-black relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-mf-green/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Conheça o <span className="text-mf-green">Método Financeiro IA</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Um método passo a passo, pensado para tirar a pessoa da desorganização e criar uma rotina financeira simples.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulos.map((modulo, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors flex items-start gap-4">
              <div className="w-8 h-8 shrink-0 bg-mf-green/20 rounded-full flex items-center justify-center text-mf-green font-bold text-sm">
                {index + 1}
              </div>
              <h3 className="text-white font-medium">{modulo}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}