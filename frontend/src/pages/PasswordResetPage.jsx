import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, KeyRound, ArrowLeft } from 'lucide-react';
    // import { useAuth } from '@/contexts/AuthContext'; // Será descomentado

    const PasswordResetPage = () => {
      const [email, setEmail] = useState('');
      const [loading, setLoading] = useState(false);
      const { toast } = useToast();
      // const { sendPasswordResetEmail } = useAuth(); // Será descomentado

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        toast({
          title: "Autenticação Supabase Necessária",
          description: "Por favor, complete a integração com o Supabase para habilitar a recuperação de senha.",
          variant: "destructive",
        });
        setLoading(false);
        // Lógica de recuperação de senha com Supabase será adicionada aqui
        // try {
        //   const { error } = await sendPasswordResetEmail(email);
        //   if (error) throw error;
        //   toast({ title: "Email Enviado", description: "Verifique sua caixa de entrada para redefinir sua senha." });
        // } catch (error) {
        //   toast({ title: "Erro ao Enviar Email", description: error.message, variant: "destructive" });
        // } finally {
        //   setLoading(false);
        // }
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center min-h-[calc(100vh-200px)] py-12"
        >
          <Card className="w-full max-w-md shadow-2xl bg-white dark:bg-slate-800">
            <CardHeader className="text-center">
              <KeyRound className="mx-auto h-12 w-12 text-amber-500 mb-4" />
              <CardTitle className="text-3xl font-bold text-slate-800 dark:text-white">Recuperar Senha</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Digite seu email para enviarmos um link de recuperação.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 flex items-center">
                    <Mail className="mr-2 h-4 w-4" /> Email Cadastrado
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="dark:bg-slate-700 dark:text-white dark:border-slate-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg py-3" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar Link de Recuperação'}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-2">
              <Link to="/login" className="text-sm text-sky-600 hover:underline dark:text-sky-400 flex items-center">
                <ArrowLeft className="mr-1 h-4 w-4" /> Voltar para o Login
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default PasswordResetPage;