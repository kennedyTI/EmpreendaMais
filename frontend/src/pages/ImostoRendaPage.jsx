import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Landmark, FileCheck, ShieldCheck, MessageSquare as MessageSquareHeart, Percent, ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';

    const ImpostoRendaPage = () => {
      const services = [
        { title: "Declaração Anual Simplificada (DASN-SIMEI)", description: "Auxiliamos na elaboração e envio da sua declaração anual obrigatória, garantindo que todas as informações de faturamento estejam corretas.", icon: <FileCheck className="h-8 w-8 text-indigo-500" /> },
        { title: "Imposto de Renda Pessoa Física (IRPF) para MEI", description: "Orientação completa para MEIs que precisam declarar IRPF, analisando rendimentos tributáveis, isenções e conformidade com as regras da Receita Federal.", icon: <Percent className="h-8 w-8 text-rose-500" /> },
        { title: "Análise de Regularidade Fiscal Completa", description: "Verificamos sua situação fiscal como MEI e como pessoa física para garantir que tudo esteja em conformidade e evitar pendências.", icon: <ShieldCheck className="h-8 w-8 text-teal-500" /> },
        { title: "Suporte Especializado e Personalizado", description: "Nossa equipe está pronta para tirar todas as suas dúvidas sobre imposto de renda para MEI, oferecendo um atendimento claro e direto.", icon: <MessageSquareHeart className="h-8 w-8 text-green-500" /> },
      ];

      const faqs = [
        { q: "MEI precisa declarar Imposto de Renda Pessoa Física (IRPF)?", a: "Depende. O MEI é obrigado a declarar o IRPF se seus rendimentos tributáveis (lucro apurado do MEI + outras rendas como salários, aluguéis, etc.) ultrapassarem o limite de isenção estabelecido pela Receita Federal, ou se ele se enquadrar em outras situações de obrigatoriedade (ex: posse de bens acima de certo valor)." },
        { q: "O que é a DASN-SIMEI?", a: "É a Declaração Anual do Simples Nacional para o Microempreendedor Individual. Nela, o MEI informa o total do seu faturamento bruto do ano anterior. É obrigatória mesmo que o MEI não tenha tido faturamento." },
        { q: "Qual o prazo para entregar a DASN-SIMEI?", a: "Geralmente, o prazo para entrega da DASN-SIMEI é até o dia 31 de maio de cada ano." },
        { q: "O que acontece se eu não entregar a DASN-SIMEI ou o IRPF?", a: "A não entrega ou a entrega fora do prazo pode gerar multas, deixar o CNPJ inapto e impedir o acesso a benefícios previdenciários. No caso do IRPF, além da multa, o CPF pode ficar irregular." }
      ];

      return (
        <div className="space-y-12">
          <motion.section 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl shadow-xl"
          >
            <Landmark className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Imposto de Renda para MEI</h1>
            <p className="text-lg text-rose-100 max-w-2xl mx-auto">
              Entenda suas obrigações fiscais e conte com nosso suporte para a Declaração Anual do Simples Nacional (DASN-SIMEI) e, se necessário, para o Imposto de Renda Pessoa Física (IRPF).
            </p>
          </motion.section>

          <section>
            <h2 className="text-3xl font-semibold text-center mb-8 text-slate-800 dark:text-white">Nossos Serviços de Assessoria Fiscal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="h-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                     <CardHeader className="flex flex-row items-start space-x-4 p-6">
                      <div className="flex-shrink-0">
                        <div className="bg-rose-100 dark:bg-rose-700 p-3 rounded-full">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-800 dark:text-white">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 p-6">
                      <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-inner"
          >
            <h2 className="text-3xl font-semibold text-center mb-6 text-slate-800 dark:text-white">Entendendo a DASN-SIMEI e o IRPF para MEI</h2>
            <div className="max-w-3xl mx-auto text-slate-700 dark:text-slate-300 space-y-4">
              <p><strong className="text-slate-800 dark:text-white">DASN-SIMEI (Declaração Anual do Faturamento):</strong> Obrigatória para todos os MEIs, esta declaração informa o total da receita bruta da empresa no ano anterior. Deve ser entregue anualmente, mesmo que não tenha havido faturamento.</p>
              <p><strong className="text-slate-800 dark:text-white">IRPF (Imposto de Renda Pessoa Física):</strong> O MEI, como pessoa física, pode precisar declarar o IRPF. Isso ocorre se os rendimentos tributáveis (lucro do MEI após despesas + outras rendas como salários, aluguéis, etc.) ultrapassarem o limite estabelecido pela Receita Federal, ou se o MEI se enquadrar em outras situações de obrigatoriedade (como posse de bens acima de determinado valor).</p>
              <p className="font-semibold">A Empreenda+ ajuda você a calcular corretamente seus rendimentos, entender as isenções e cumprir todas as obrigações fiscais, evitando problemas e multas.</p>
            </div>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-center text-slate-700 dark:text-slate-200">Perguntas Frequentes</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                >
                  <Card className="bg-white dark:bg-slate-800 shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-rose-600 dark:text-rose-400">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300">{faq.a}</p>
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
                <CardTitle className="text-3xl font-bold text-white">Precisa de ajuda com suas declarações?</CardTitle>
                <CardDescription className="text-green-100 mt-2 text-lg">
                    Fale com nossos especialistas e garanta sua tranquilidade fiscal. Evite multas e preocupações!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/SEUNUMERODOWHATSAPP?text=Ol%C3%A1%21+Preciso+de+ajuda+com+o+Imposto+de+Renda+do+MEI."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-100 font-semibold text-lg py-3 px-8 group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <MessageSquareHeart className="mr-2 h-5 w-5" /> Consultar Especialista
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      );
    };

    export default ImpostoRendaPage;