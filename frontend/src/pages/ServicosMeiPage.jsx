import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { CheckCircle, Briefcase, ArrowRight, MessageSquare as MessageSquareIcon } from 'lucide-react';

    const ServicosMeiPage = () => {
      const benefits = [
        { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "CNPJ, Inscrição Estadual/Municipal e Alvará Provisório em um só lugar." },
        { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Acesso a benefícios previdenciários (aposentadoria, auxílio-doença, etc.)." },
        { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Emissão de notas fiscais de forma simplificada." },
        { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Tributação reduzida e unificada no DAS MEI." },
        { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Possibilidade de contratar um funcionário." },
      ];

      const steps = [
        { title: "Contato Inicial", description: "Clique no botão abaixo e fale conosco pelo WhatsApp. Nossa equipe especializada irá te guiar.", icon: <MessageSquareIcon className="h-8 w-8 text-teal-500" /> },
        { title: "Coleta de Dados", description: "Forneça as informações necessárias para a abertura do seu MEI de forma segura e rápida.", icon: <Briefcase className="h-8 w-8 text-teal-500" /> },
        { title: "Abertura Concluída", description: "Receba seu CNPJ e todas as orientações para começar a empreender com tranquilidade.", icon: <CheckCircle className="h-8 w-8 text-teal-500" /> },
      ];

      return (
        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl shadow-xl"
          >
            <Briefcase className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Abra seu MEI de Forma Simples e Rápida</h1>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Deixe a burocracia com a gente! Com a Empreenda+, formalizar seu negócio como Microempreendedor Individual nunca foi tão fácil.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-center text-slate-800 dark:text-white">Por que ser MEI com a Empreenda+?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                >
                  <Card className="h-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      {benefit.icon}
                      <p className="text-slate-700 dark:text-slate-300">{benefit.text}</p>
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
            <h2 className="text-3xl font-semibold text-center text-slate-800 dark:text-white">Nosso Processo Simplificado</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
                >
                  <Card className="text-center bg-white dark:bg-slate-800 shadow-lg">
                    <CardHeader>
                      <div className="mx-auto bg-teal-100 dark:bg-teal-700 p-3 rounded-full w-fit mb-3">
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
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-sky-500 to-indigo-600 p-8 rounded-xl shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">Pronto para Começar?</CardTitle>
                <CardDescription className="text-sky-100 mt-2 text-lg">
                  Nossa equipe está pronta para te atender e tirar todas as suas dúvidas.
                  Clique no botão abaixo e fale conosco diretamente pelo WhatsApp!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/SEUNUMERODOWHATSAPP?text=Ol%C3%A1%21+Gostaria+de+abrir+meu+MEI+com+a+Empreenda%2B."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 font-semibold text-lg py-3 px-8 group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Falar com um Especialista
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
            <h2 className="text-2xl font-semibold text-center text-slate-700 dark:text-slate-200">Perguntas Frequentes sobre Abrir MEI</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                { q: "Quais documentos preciso para abrir um MEI?", a: "Você precisará do seu RG, CPF, comprovante de endereço residencial e, se aplicável, o número do título de eleitor ou o recibo da última declaração do Imposto de Renda." },
                { q: "Quanto custa para abrir um MEI?", a: "A abertura do MEI é gratuita. Você pagará apenas a contribuição mensal (DAS) após a formalização." },
                { q: "Posso ter um MEI mesmo trabalhando com carteira assinada (CLT)?", a: "Sim, é possível ser MEI e trabalhar com carteira assinada, desde que não seja servidor público federal em atividade. Servidores públicos estaduais e municipais devem verificar as regras dos seus respectivos estatutos." },
                { q: "Quais atividades são permitidas para MEI?", a: "Existe uma lista extensa de atividades permitidas. Nossa equipe pode te ajudar a verificar se sua atividade se enquadra." }
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

    export default ServicosMeiPage;