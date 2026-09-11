"use client";

import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { p: "O Método Financeiro IA é para quem ganha pouco?", r: " O método foi pensado para ajudar qualquer pessoa a organizar melhor o dinheiro, independentemente da renda." },
    { p: "Preciso entender de Inteligência Artificial?", r: "Não. O método ensina de forma prática como utilizar a IA como ferramenta de organização financeira." },
    { p: "O assistente financeiro funciona 24 horas?", r: "Sim. A proposta é que você possa utilizar o assistente sempre que precisar para registrar e acompanhar suas informações financeiras." },
    { p: "Preciso saber mexer com planilhas?", r: "Não. A proposta é justamente tornar a organização mais simples e prática." },
    { p: "O Método Financeiro IA é um aplicativo?", r: "Não. É um método digital que ensina você a organizar sua vida financeira e utilizar um assistente financeiro baseado em IA." },
    { p: "O Método Investe Mais está incluso?", r: "Não. O Método Investe Mais é um produto complementar, apresentado como próximo passo para quem deseja avançar nos seus conhecimentos financeiros." }
  ];

  return (
    <section className="py-24 px-6 bg-mf-dark relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center cursor-pointer focus:outline-none touch-manipulation"
              >
                <span className={`font-semibold text-lg pr-4 ${openIndex === index ? 'text-mf-green' : 'text-white'}`}>
                  {faq.p}
                </span>
                <span className={`text-mf-green text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </span>
              </button>
              
              {/* Renderização direta: se estiver aberto, mostra. Se não, some. Sem CSS atrapalhando. */}
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-300 text-sm leading-relaxed border-t border-white/5 mt-2">
                  {faq.r}
                </div>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}