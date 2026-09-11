import React from 'react';

export default function Identificacao() {
  const dores = [
    "Seu dinheiro acaba antes do mês?", //[cite: 1]
    "Você não sabe exatamente quanto gastou?", //[cite: 1]
    "Tem várias despesas e acaba perdendo o controle?", //[cite: 1]
    "Quer guardar dinheiro, mas nunca sobra?", //[cite: 1]
    "Já tentou se organizar e desistiu?" //[cite: 1]
  ];

  return (
    <section className="py-20 px-6 bg-mf-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Você se identifica?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10">
          {dores.map((dor, index) => (
            <div key={index} className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md flex items-center gap-4 hover:border-mf-green/50 transition-colors">
              <span className="text-mf-green font-bold text-xl">✕</span>
              <p className="text-gray-300">{dor}</p>
            </div>
          ))}
        </div>
        <p className="text-xl text-gray-400">
          O problema não é necessariamente quanto você ganha. Muitas vezes, <span className="text-mf-green font-semibold">é não ter um método para organizar o dinheiro</span>.
        </p>
      </div>
    </section>
  );
}