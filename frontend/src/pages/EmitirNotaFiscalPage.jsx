import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Zap, FileSpreadsheet, Settings, MessageSquare as MessageSquareHeart, Package, Server, ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';

    const EmitirNotaFiscalPage = () => {
      const services = [
        { title: "Nota Fiscal de Serviço (NFS-e)", description: "Emita notas fiscais para seus serviços prestados de forma rápida e integrada com a prefeitura.", icon: <Server className="h-8 w-8 text-orange-500" /> },
        { title: "Nota Fiscal de Produto (NF-e)", description: "Para MEIs que comercializam produtos, emita suas notas fiscais de venda com validade em todo o território nacional.", icon: <Package className="h-8 w-8 text-cyan-500" /> },
        { title: "Configuração Simplificada", description: "Auxiliamos na configuração inicial para que você comece a emitir suas notas sem complicações.", icon: <Settings className="h-8 w-8 text-gray-500" /> },
        { title: "Suporte Especializado", description: "Nossa equipe está pronta para ajudar com qualquer dúvida sobre a emissão de notas fiscais.", icon: <MessageSquareHeart className="h-8 w-8 text-green-500" /> },
      ];

      return (
        <div className="space-y-12">
          <motion.section 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-xl"
          >
            <Zap className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Emissão de Notas Fiscais</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto">
              Simplifique a emissão de suas notas fiscais de serviço (NFS-e) e produto (NF-e). Mantenha sua empresa regularizada e transmita profissionalismo aos seus clientes.
            </p>
          </motion.section>

          <section>
            <h2 className="text-3xl font-semibold text-center mb-8 text-slate-800 dark:text-white">Nossas Soluções para Emissão de NF</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="h-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="bg-amber-100 dark:bg-amber-700 p-3 rounded-full">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-800 dark:text-white">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
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
            <h2 className="text-3xl font-semibold text-center mb-6 text-slate-800 dark:text-white">Por que emitir Nota Fiscal?</h2>
            <div className="max-w-3xl mx-auto text-slate-700 dark:text-slate-300 space-y-4">
              <p>A emissão de notas fiscais é fundamental para o MEI, pois:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Comprova a legalidade das suas transações comerciais.</li>
                <li>Permite a venda para outras empresas (B2B) que exigem NF.</li>
                <li>Garante os direitos do consumidor e transmite confiança.</li>
                <li>Ajuda no controle financeiro e na gestão do seu negócio.</li>
                <li>É obrigatória em diversas situações, como vendas para o governo ou para empresas.</li>
              </ul>
              <p className="font-semibold">Com a Empreenda+, emitir notas fiscais se torna uma tarefa simples e rápida!</p>
            </div>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center py-10"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-xl shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">Pronto para emitir suas notas fiscais?</CardTitle>
                <CardDescription className="text-green-100 mt-2 text-lg">
                    Entre em contato e descubra como podemos facilitar esse processo para você.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/SEUNUMERODOWHATSAPP?text=Ol%C3%A1%21+Preciso+de+ajuda+com+a+emiss%C3%A3o+de+Notas+Fiscais."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-slate-100 font-semibold text-lg py-3 px-8 group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <FileSpreadsheet className="mr-2 h-5 w-5" /> Solicitar Ajuda via WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6 max-w-xl mx-auto">
              Lembre-se: A obrigatoriedade de emissão de NF para MEI pode variar dependendo da natureza da operação (venda para pessoa física ou jurídica) e da legislação estadual/municipal. Consulte-nos para mais informações!
            </p>
          </motion.section>
        </div>
      );
    };

    export default EmitirNotaFiscalPage;