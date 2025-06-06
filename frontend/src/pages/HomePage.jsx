import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Briefcase, FileText, Zap, Landmark, Film, ArrowRight, MessageSquare as MessageSquareHeart, ThumbsUp, ShieldCheck, Users, HelpCircle, ChevronDown } from 'lucide-react';
    import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion"

    const services = [
      { title: "Abertura de MEI Simplificada", description: "Formalize seu negócio sem burocracia. Cuidamos de tudo para você!", icon: <Briefcase className="h-10 w-10 text-sky-500" />, link: "/servicos-mei", bgColor: "bg-sky-50 dark:bg-sky-900", hoverColor: "hover:bg-sky-100 dark:hover:bg-sky-800" },
      { title: "Lembretes de Pagamento DAS", description: "Nunca mais esqueça de pagar seu DAS. Mantenha-se em dia!", icon: <FileText className="h-10 w-10 text-blue-500" />, link: "/lembretes-das", bgColor: "bg-blue-50 dark:bg-blue-900", hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-800" },
      { title: "Emissão de Notas Fiscais", description: "Emita NFS-e e NF-e de forma prática e rápida.", icon: <Zap className="h-10 w-10 text-amber-500" />, link: "/emitir-nota-fiscal", bgColor: "bg-amber-50 dark:bg-amber-900", hoverColor: "hover:bg-amber-100 dark:hover:bg-amber-800" },
      { title: "Assessoria Imposto de Renda", description: "Declaração Anual (DASN) e IRPF para MEI sem dor de cabeça.", icon: <Landmark className="h-10 w-10 text-rose-500" />, link: "/imposto-renda", bgColor: "bg-rose-50 dark:bg-rose-900", hoverColor: "hover:bg-rose-100 dark:hover:bg-rose-800" },
      { title: "Cursos SEBRAE Selecionados", description: "Capacite-se com os melhores cursos para alavancar seu negócio.", icon: <Film className="h-10 w-10 text-purple-500" />, link: "/cursos-sebrae", bgColor: "bg-purple-50 dark:bg-purple-900", hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-800" },
    ];

    const whyChooseUs = [
      { title: "Foco no MEI", description: "Soluções pensadas exclusivamente para as necessidades do Microempreendedor Individual.", icon: <ThumbsUp className="h-8 w-8 text-green-500" /> },
      { title: "Suporte Humanizado", description: "Atendimento rápido e atencioso via WhatsApp para tirar todas as suas dúvidas.", icon: <MessageSquareHeart className="h-8 w-8 text-pink-500" /> },
      { title: "Segurança e Confiança", description: "Processos transparentes e seguros para você empreender com tranquilidade.", icon: <ShieldCheck className="h-8 w-8 text-indigo-500" /> },
      { title: "Parceiro do seu Sucesso", description: "Mais que uma plataforma, somos seu parceiro na jornada empreendedora.", icon: <Users className="h-8 w-8 text-orange-500" /> },
    ];

    const faqItems = [
      { id: "faq1", question: "O que é MEI e quem pode ser?", answer: "MEI significa Microempreendedor Individual. É uma forma simplificada para pequenos empresários formalizarem suas atividades. Para ser MEI, é preciso faturar até R$ 81.000,00 por ano, não ser sócio ou titular de outra empresa e exercer uma das atividades permitidas." },
      { id: "faq2", question: "Quais são as obrigações do MEI?", answer: "As principais obrigações são: pagar mensalmente o DAS (Documento de Arrecadação do Simples Nacional), enviar a Declaração Anual do Simples Nacional (DASN-SIMEI) e emitir notas fiscais quando necessário (principalmente para vendas a outras empresas)." },
      { id: "faq3", question: "Como a Empreenda+ pode me ajudar?", answer: "A Empreenda+ simplifica todas as etapas da vida do MEI: desde a abertura do CNPJ, passando pela organização dos pagamentos do DAS, auxílio na emissão de notas fiscais, assessoria para o imposto de renda e oferta de cursos para capacitação." },
      { id: "faq4", question: "Os serviços da Empreenda+ têm custo?", answer: "Alguns serviços, como a orientação inicial e o acesso a conteúdos informativos, são gratuitos. Para serviços personalizados como abertura de MEI completa, assessoria fiscal e lembretes, temos planos acessíveis. Entre em contato para saber mais!" },
    ];

    const HomePage = () => {
      return (
        <div className="space-y-16 md:space-y-24 pb-10">
          <motion.section
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative text-center py-20 md:py-32 px-4 bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-700 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Empreenda+: Seu Sucesso Começa Aqui!
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Simplificamos a jornada do Microempreendedor Individual com soluções completas, desde a abertura do seu MEI até a gestão do seu dia a dia. Conte com a gente para crescer!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4"
              >
                <Link to="/servicos-mei">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 font-semibold text-lg py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Abra seu MEI Agora
                  </Button>
                </Link>
                <Link to="/#nossos-servicos">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-semibold text-lg py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Conheça Nossos Serviços
                  </Button>
                </Link>
              </motion.div>
            </div>
            <div className="absolute -bottom-1/3 -left-1/4 w-96 h-96 bg-white/5 rounded-full animate-pulse opacity-30"></div>
            <div className="absolute -top-1/4 -right-1/4 w-80 h-80 bg-white/10 rounded-full animate-pulse opacity-20 delay-1000"></div>
          </motion.section>

          <section id="nossos-servicos" className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white"
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Nossos Serviços para MEI
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link to={service.link} className="block h-full">
                    <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full ${service.bgColor} ${service.hoverColor} dark:border-slate-700`}>
                      <CardHeader className="items-center text-center">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-full mb-4 inline-block shadow-md">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold text-slate-800 dark:text-white">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow text-center">
                        <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                      </CardContent>
                      <CardContent className="text-center mt-auto">
                        <Button variant="link" className="text-indigo-600 dark:text-indigo-400 font-semibold group">
                          Saiba Mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-slate-100 dark:bg-slate-800 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white"
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                Por que escolher a Empreenda+?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <Card className="text-center p-6 bg-white dark:bg-slate-850 shadow-lg hover:shadow-xl transition-shadow h-full dark:border-slate-700">
                      <div className="mb-4 inline-block p-3 bg-green-100 dark:bg-green-700 rounded-full">
                        {reason.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{reason.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{reason.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <section id="faq" className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white"
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <HelpCircle className="inline-block h-10 w-10 mr-2 text-sky-500" />
              Perguntas Frequentes (FAQ)
            </motion.h2>
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <AccordionItem value={item.id} className="bg-white dark:bg-slate-800 shadow-md rounded-lg mb-3 dark:border-slate-700">
                      <AccordionTrigger className="p-6 text-left font-semibold text-slate-700 dark:text-slate-200 hover:no-underline data-[state=open]:text-sky-600 dark:data-[state=open]:text-sky-400">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="p-6 pt-0 text-slate-600 dark:text-slate-300">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4"
          >
            <Card className="bg-gradient-to-r from-green-500 to-teal-600 p-8 md:p-12 rounded-xl shadow-2xl text-center">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-3">Pronto para dar o próximo passo?</CardTitle>
                <CardDescription className="text-green-100 text-lg md:text-xl max-w-xl mx-auto">
                  Nossa equipe está ansiosa para ajudar você a simplificar sua jornada como MEI. Entre em contato hoje mesmo!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/contato">
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-100 font-semibold text-lg py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <MessageSquareHeart className="mr-2 h-5 w-5" /> Fale Conosco
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.section>

        </div>
      );
    };

    export default HomePage;