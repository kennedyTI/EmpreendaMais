import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, MessageSquare as MessageSquareText, User, Send, Phone } from 'lucide-react';

    const ContatoPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      const [submittedMessages, setSubmittedMessages] = useState([]);

      useEffect(() => {
        const storedMessages = localStorage.getItem('contactMessages');
        if (storedMessages) {
          setSubmittedMessages(JSON.parse(storedMessages));
        }
      }, []);

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
          toast({
            title: 'Erro ao enviar',
            description: 'Por favor, preencha todos os campos.',
            variant: 'destructive',
          });
          return;
        }
        
        const newMessage = { ...formData, id: Date.now(), submittedAt: new Date().toLocaleString() };
        const updatedMessages = [...submittedMessages, newMessage];
        setSubmittedMessages(updatedMessages);
        localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));

        toast({
          title: 'Mensagem Enviada!',
          description: 'Obrigado por entrar em contato. Responderemos em breve.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      };

      return (
        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl shadow-xl"
          >
            <Mail className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fale Conosco</h1>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Tem alguma dúvida, sugestão ou precisa de suporte? Entre em contato conosco. Estamos aqui para ajudar!
            </p>
          </motion.section>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white dark:bg-slate-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 dark:text-white">Envie sua Mensagem</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    Preencha o formulário abaixo e retornaremos o mais breve possível.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">Nome Completo</Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <Input
                          type="text"
                          id="name"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10 bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">E-mail</Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <Input
                          type="email"
                          id="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300">Assunto</Label>
                      <div className="relative mt-1">
                        <MessageSquareText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <Input
                          type="text"
                          id="subject"
                          placeholder="Sobre o que gostaria de falar?"
                          value={formData.subject}
                          onChange={handleChange}
                          className="pl-10 bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Digite sua mensagem aqui..."
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white group">
                      Enviar Mensagem <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <Card className="bg-white dark:bg-slate-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 dark:text-white">Outras Formas de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-teal-500 mr-3" />
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-200">E-mail:</p>
                      <a href="mailto:contato@empreendamais.com.br" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">contato@empreendamais.com.br</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-teal-500 mr-3" />
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-200">WhatsApp:</p>
                      <a 
                        href="https://wa.me/SEUNUMERODOWHATSAPP?text=Ol%C3%A1%21+Gostaria+de+falar+com+o+suporte+Empreenda%2B." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                      >
                        Clique aqui para falar no WhatsApp
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.</p>
                </CardContent>
              </Card>

              {submittedMessages.length > 0 && (
                <Card className="bg-white dark:bg-slate-800 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800 dark:text-white">Mensagens Enviadas (localStorage)</CardTitle>
                  </CardHeader>
                  <CardContent className="max-h-60 overflow-y-auto">
                    <ul className="space-y-3">
                      {submittedMessages.slice().reverse().map((msg) => (
                        <li key={msg.id} className="p-3 bg-slate-50 dark:bg-slate-700 rounded-md text-sm">
                          <p className="font-semibold text-slate-700 dark:text-slate-200">De: {msg.name} ({msg.email})</p>
                          <p className="text-slate-600 dark:text-slate-300">Assunto: {msg.subject}</p>
                          <p className="text-xs text-slate-400 dark:text-slate-500">Enviado em: {msg.submittedAt}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      );
    };

    export default ContatoPage;