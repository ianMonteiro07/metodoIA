import React from 'react';

export default function AssistenteIA() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/15 to-transparent">
        <div className="bg-mf-dark/80 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center gap-10 shadow-2xl">
          
          {/* Lado Esquerdo - Textos */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              E se você pudesse ter um assistente financeiro disponível <span className="text-mf-green">24 horas</span>?
            </h2>
            <p className="text-gray-400 text-lg">
              Você aprende a configurar e utilizar uma Inteligência Artificial como seu assistente financeiro pessoal.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="text-2xl">💰</span>
                <div>
                  <p className="text-xs text-mf-green uppercase tracking-wider font-semibold">Registrar recebimentos</p>
                  <p className="text-sm font-medium text-white">"Recebi R$ 3.000,00 de salário."</p>
                </div>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="text-2xl">💸</span>
                <div>
                  <p className="text-xs text-mf-green uppercase tracking-wider font-semibold">Registrar gastos</p>
                  <p className="text-sm font-medium text-white">"Gastei R$ 50 de gasolina no Pix."</p>
                </div>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-xs text-mf-green uppercase tracking-wider font-semibold">Acompanhar situação</p>
                  <p className="text-sm font-medium text-white">"Quero um relatório desse mês."</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Lado Direito - Mockup do Celular Avançado */}
          <div className="flex-1 flex justify-center w-full animate-[float_6s_ease-in-out_infinite] py-4">
            <div className="w-[300px] h-[600px] bg-[#09090b] border-[8px] border-[#1f1f22] rounded-[3rem] shadow-[0_0_50px_rgba(0,224,84,0.2)] relative overflow-hidden flex flex-col ring-1 ring-white/10">
              
              {/* Status Bar & Dynamic Island */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-between items-center px-6 pt-2 z-20">
                <span className="text-[11px] text-white/90 font-semibold tracking-wide">09:41</span>
                <div className="w-24 h-6 bg-black rounded-b-3xl mx-auto absolute left-1/2 -translate-x-1/2 top-0"></div>
                <div className="flex gap-1.5 items-center">
                  <svg className="w-3 h-3 text-white/90" fill="currentColor" viewBox="0 0 16 16"><path d="M3.5 11.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5zm3-3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5zm3-3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5zm3-3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5z"/></svg>
                  <div className="w-5 h-2.5 border border-white/50 rounded-sm p-[1px]"><div className="bg-white h-full w-[80%] rounded-[1px]"></div></div>
                </div>
              </div>

              {/* Cabeçalho do Chat */}
              <div className="bg-white/5 border-b border-white/10 pt-10 pb-3 px-4 flex items-center gap-3 backdrop-blur-md z-10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-mf-green to-emerald-500 flex items-center justify-center text-black font-bold text-xs shadow-lg">
                  IA
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white leading-none">Assistente Financeiro</p>
                  <p className="text-[10px] text-mf-green mt-1 font-medium">● Online agora</p>
                </div>
              </div>

              {/* Área de Mensagens (Scroll customizado escondido) */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 relative bg-[radial-gradient(ellipse_at_center,rgba(0,224,84,0.03)_0%,transparent_100%)] scrollbar-hide">
                
                {/* Interação 1: Salário */}
                <div className="bg-mf-green text-black p-2.5 rounded-2xl rounded-tr-sm ml-auto max-w-[85%] shadow-md">
                  <p className="text-[12px] font-semibold leading-tight">Recebi R$ 3.000,00 de salário, faz a divisão.</p>
                </div>
                <div className="bg-[#18181b] border border-white/10 p-3 rounded-2xl rounded-tl-sm mr-auto max-w-[90%] shadow-md">
                  <p className="text-[12px] text-gray-200 leading-relaxed">
                    💰 Registrado! Organizei assim:<br/>
                    🟢 <span className="text-white/80">Pessoal (60%):</span> R$ 1.800<br/>
                    🚗 <span className="text-white/80">Carro (30%):</span> R$ 900<br/>
                    🛡️ <span className="text-white/80">Reserva (10%):</span> R$ 300
                  </p>
                </div>

                {/* Interação 2: Gasto Gasolina */}
                <div className="bg-mf-green text-black p-2.5 rounded-2xl rounded-tr-sm ml-auto max-w-[85%] shadow-md mt-1">
                  <p className="text-[12px] font-semibold leading-tight">Gastei R$ 50 de gasolina no Pix.</p>
                </div>
                <div className="bg-[#18181b] border border-white/10 p-3 rounded-2xl rounded-tl-sm mr-auto max-w-[90%] shadow-md">
                  <p className="text-[12px] text-gray-200 leading-relaxed">
                    ⛽ Gasto anotado!<br/>
                    💰 <span className="text-white/60">Fundo do carro:</span> R$ 900 → <span className="text-mf-green font-bold">R$ 850</span> disponíveis. ✅
                  </p>
                </div>

                {/* Interação 3: Relatório Mensal */}
                <div className="bg-mf-green text-black p-2.5 rounded-2xl rounded-tr-sm ml-auto max-w-[85%] shadow-md mt-1">
                  <p className="text-[12px] font-semibold leading-tight">Relatório desse mês.</p>
                </div>
                <div className="bg-[#18181b] border border-white/10 p-3 rounded-2xl rounded-tl-sm mr-auto max-w-[90%] shadow-md">
                  <p className="text-[12px] text-gray-200 leading-relaxed">
                    📊 <span className="text-white font-bold">SET</span><br/>
                    Gastos totais: R$ 80,00<br/>
                    Saldo disponível: <span className="text-mf-green font-bold">R$ 2.920,00</span><br/><br/>
                    📈 Você manteve <span className="text-white font-semibold">97,3%</span> do valor recebido!
                  </p>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-[#09090b] border-t border-white/10 pb-6 z-10">
                <div className="w-full bg-[#18181b] border border-white/10 rounded-full h-10 flex items-center px-4 justify-between group cursor-text hover:border-white/30 transition-colors">
                  <p className="text-[13px] text-gray-500 font-medium">Mensagem...</p>
                  <div className="w-7 h-7 bg-mf-green rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-3.5 h-3.5 text-black ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}