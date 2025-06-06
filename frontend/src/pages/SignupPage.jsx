import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { UserPlus, Mail, KeyRound, User } from 'lucide-react';
    // import { useAuth } from '@/contexts/AuthContext'; // Será descomentado após a configuração do Supabase

    const SignupPage = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [fullName, setFullName] = useState('');
      const [loading, setLoading] = useState(false);
      const { toast } = useToast();
      const navigate = useNavigate();
      // const { signup } = useAuth(); // Será descomentado

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          toast({ title: "Erro de Validação", description: "As senhas não coincidem.", variant: "destructive" });
          return;
        }
        setLoading(true);
        toast({
          title: "Autenticação Supabase Necessária",
          description: "Por favor, complete a integração com o Supabase para habilitar o cadastro.",
          variant: "destructive",
        });
        setLoading(false);
        // Lógica de cadastro com Supabase será adicionada aqui após a integração
        // try {
        //   const { error } = await signup(email, password, { full_name: fullName });
        //   if (error) throw error;
        //   toast({ title: "Cadastro realizado!", description: "Verifique seu email para confirmação." });
        //   navigate('/login'); 
        // } catch (error) {
        //   toast({ title: "Erro no Cadastro", description: error.message, variant: "destructive" });
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
              <UserPlus className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <CardTitle className="text-3xl font-bold text-slate-800 dark:text-white">Criar Conta</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Junte-se à Empreenda+ e simplifique sua vida de MEI!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-700 dark:text-slate-300 flex items-center">
                    <User className="mr-2 h-4 w-4" /> Nome Completo
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Seu nome completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="dark:bg-slate-700 dark:text-white dark:border-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 flex items-center">
                    <Mail className="mr-2 h-4 w-4" /> Email
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
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700 dark:text-slate-300 flex items-center">
                    <KeyRound className="mr-2 h-4 w-4" /> Senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Crie uma senha forte"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="dark:bg-slate-700 dark:text-white dark:border-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-slate-700 dark:text-slate-300 flex items-center">
                    <KeyRound className="mr-2 h-4 w-4" /> Confirme a Senha
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Repita sua senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="dark:bg-slate-700 dark:text-white dark:border-slate-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3" disabled={loading}>
                  {loading ? 'Criando conta...' : 'Criar Conta'}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Já tem uma conta?{' '}
                <Link to="/login" className="font-semibold text-sky-600 hover:underline dark:text-sky-400">
                  Faça Login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default SignupPage;