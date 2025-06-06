
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Award, TrendingUp, CheckCircle2, MessageSquare } from 'lucide-react';

const CursosSebraePage = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-xl"
      >
        <BookOpen className="h-16 w-16 text-white mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cursos SEBRAE</h1>
        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
          Capacite-se com os melhores cursos do SEBRAE e leve seu negócio para o próximo nível. 
          Conhecimento prático e aplicável para o seu dia a dia como MEI.
        </p>
      </motion.section>

      {/* Benefícios */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <Award className="h-12 w-12 text-purple-500 mb-4" />
            <CardTitle>Certificado Reconhecido</CardTitle>
            <CardDescription>
              Receba certificados oficiais do SEBRAE, reconhecidos em todo o território nacional.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <TrendingUp className="h-12 w-12 text-purple-500 mb-4" />
            <CardTitle>Conteúdo Atualizado</CardTitle>
            <CardDescription>
              Acesse conteúdo sempre atualizado com as últimas tendências do mercado e melhores práticas.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CheckCircle2 className="h-12 w-12 text-purple-500 mb-4" />
            <CardTitle>Aprendizado Prático</CardTitle>
            <CardDescription>
              Aplique o conhecimento diretamente no seu negócio com exercícios práticos e cases reais.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.section>

      {/* Áreas de Conhecimento */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Áreas de Conhecimento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Finanças', description: 'Gestão financeira, fluxo de caixa e precificação' },
            { title: 'Marketing', description: 'Marketing digital, vendas online e redes sociais' },
            { title: 'Gestão', description: 'Planejamento estratégico e gestão de negócios' },
            { title: 'Vendas', description: 'Técnicas de vendas e atendimento ao cliente' }
          ].map((area, index) => (
            <Card key={index} className="bg-white dark:bg-slate-800">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center py-10"
      >
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white">Comece Sua Jornada de Aprendizado</CardTitle>
            <CardDescription className="text-green-100 mt-2 text-lg">
              Faça login na plataforma para acessar todos os cursos disponíveis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-slate-100 font-semibold text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/login'}
            >
              Acessar Plataforma
            </Button>
            <p className="text-white text-sm mt-4">
              Ainda não tem acesso? Baixe nosso app para criar sua conta
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Suporte Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
      >
        <Card className="bg-white dark:bg-slate-800 p-6">
          <CardHeader>
            <MessageSquare className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <CardTitle>Precisa de Ajuda?</CardTitle>
            <CardDescription>
              Nossa equipe está pronta para ajudar você em sua jornada de aprendizado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href="https://wa.me/SEUNUMERODOWHATSAPP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button variant="outline" className="mt-4">
                Falar com Suporte
              </Button>
            </a>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default CursosSebraePage;
