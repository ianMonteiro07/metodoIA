import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Identificacao from "@/components/Identificacao";
import Metodo from "@/components/Metodo";
import AssistenteIA from "@/components/AssistenteIA";
import InvestMais from "@/components/InvestMais";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen relative z-0">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="identificacao"><Identificacao /></div>
      <div id="metodo"><Metodo /></div>
      <div id="assistente"><AssistenteIA /></div>
      <div id="investmais"><InvestMais /></div>
      <div id="faq"><Faq /></div>
      <Footer />
    </main>
  );
}