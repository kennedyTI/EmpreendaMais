import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Bell, CalendarCheck, AlertTriangle, MessageSquare as MessageSquareIcon, ArrowRight } from 'lucide-react';

    const LembretesDasPage = () => {
      const features = [
        { icon: <Bell className="h-6 w-6 text-blue-500" />, text: "Receba notificações automáticas antes do vencimento do seu DAS." },
        { icon: <CalendarCheck className="h-6 w-6 text-blue-500" />, text: "Evite multas e juros por atraso no pagamento." },
        { icon: <AlertTriangle className="h-6 w-6 text-blue-500" />, text: "Mantenha sua situação como MEI regularizada sem preocupações." },
        { icon: <MessageSquareIcon className="h-6 w-6 text-blue-500" />, text: "Suporte dedicado via WhatsApp para qualquer dúvida." },
      ];

      const howItWorks = [
        { title: "Ative o Serviço", description: "Entre em contato conosco pelo WhatsApp para solicitar a ativação dos lembretes do DAS.", icon: <MessageSquareIcon className="h-8 w-8 text-blue-500" /> },
        { title: "Confirme seus Dados", description: "Forneça as informações básicas para que possamos configurar seus lembretes personalizados.", icon: <CalendarCheck className="h-8 w-8 text-blue-500" /> },
        { title: "Fique Tranquilo", description: "Pronto! Você receberá avisos com antecedência para não esquecer mais nenhum pagamento.", icon: <Bell className="h-8 w-8 text-blue-500" /> },
      ];

      return (
        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-xl"
          >
            <Bell className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lembretes de Pagamento do DAS</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Nunca mais esqueça de pagar seu Documento de Arrecadação do Simples Nacional (DAS). A Empreenda+ te ajuda a manter suas obrigações em dia!
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-center text-slate-800 dark:text-white">Por que ativar os Lembretes do DAS?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                >
                  <Card className="h-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      {feature.icon}
                      <p className="text-slate-700 dark:text-slate-300">{feature.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-center text-slate-800 dark:text-white">Como Funciona?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
                >
                  <Card className="text-center bg-white dark:bg-slate-800 shadow-lg h-full">
                    <CardHeader>
                      <div className="mx-auto bg-blue-100 dark:bg-blue-700 p-3 rounded-full w-fit mb-3">
                        {step.icon}
                      </div>
                      <CardTitle className="text-xl text-slate-800 dark:text-white">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 dark:text-slate-400">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center py-10"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-xl shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">Quer Ativar Seus Lembretes?</CardTitle>
                <CardDescription className="text-green-100 mt-2 text-lg">
                  É simples e rápido! Fale com nossa equipe pelo WhatsApp para começar a receber seus lembretes do DAS.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/SEUNUMERODOWHATSAPP?text=Ol%C3%A1%21+Gostaria+de+ativar+os+lembretes+de+pagamento+do+DAS+pela+Empreenda%2B."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-100 font-semibold text-lg py-3 px-8 group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Falar com Especialista
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-center text-slate-700 dark:text-slate-200">Dúvidas Comuns sobre o DAS MEI</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                { q: "O que é o DAS MEI?", a: "O DAS (Documento de Arrecadação do Simples Nacional) é a guia mensal unificada que o MEI paga, incluindo INSS, ICMS e/ou ISS, dependendo da atividade." },
                { q: "Qual o prazo de vencimento do DAS?", a: "O DAS vence todo dia 20 de cada mês. Se o dia 20 cair em fim de semana ou feriado, o vencimento é prorrogado para o próximo dia útil." },
                { q: "O que acontece se eu não pagar o DAS?", a: "O não pagamento do DAS pode gerar multas, juros, a perda de benefícios previdenciários e até o cancelamento do CNPJ MEI." },
                { q: "Como emitir o DAS?", a: "O DAS pode ser emitido diretamente no Portal do Empreendedor ou através de aplicativos autorizados. Nossa equipe pode te orientar sobre isso também!" }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                >
                  <Card className="bg-white dark:bg-slate-800 shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-800 dark:text-white">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300">{faq.a}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      );
    };

    export default LembretesDasPage;