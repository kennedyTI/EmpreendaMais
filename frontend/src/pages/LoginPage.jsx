import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { LogIn, Mail, KeyRound, Download, AlertCircle } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate(); // Redirecionamento após login

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Erro ao fazer login.");
      }

      const data = await response.json();

      // Armazena o token JWT no localStorage:
      localStorage.setItem("token", data.access_token);

      toast({
        title: "Login realizado com sucesso",
        description: "Você será redirecionado em instantes.",
      });

      // Redireciona após o login
      setTimeout(() => {
        navigate("/dashboard"); // Altere para sua rota protegida
      }, 1000);

    } catch (error) {
      toast({
        title: "Erro no login",
        description: error.message || "Falha ao conectar.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      window.location.href = "http://localhost:8000/auth/google/login";
    } catch (error) {
      toast({
        title: "Erro ao redirecionar",
        description: "Não foi possível iniciar o login com Google.",
        variant: "destructive",
      });
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Verificação Simulada",
        description: "2FA será implementado futuramente.",
        variant: "destructive",
      });
    }, 1000);
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
          <LogIn className="mx-auto h-12 w-12 text-sky-500 mb-4" />
          <CardTitle className="text-3xl font-bold text-slate-800 dark:text-white">
            Acessar Conta
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Faça login para acessar sua conta
          </CardDescription>
        </CardHeader>

        <CardContent>
          {!showVerification ? (
            <form onSubmit={handleEmailLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center text-slate-700 dark:text-slate-300">
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
                <Label htmlFor="password" className="flex items-center text-slate-700 dark:text-slate-300">
                  <KeyRound className="mr-2 h-4 w-4" /> Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="dark:bg-slate-700 dark:text-white dark:border-slate-600"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                disabled={loading}
              >
                {loading ? 'Entrando...' : 'Continuar'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerificationSubmit} className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Verifique o código de 6 dígitos enviado para o app móvel
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="verification" className="text-slate-700 dark:text-slate-300">
                  Código de Verificação
                </Label>
                <Input
                  id="verification"
                  type="text"
                  placeholder="000000"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  maxLength={6}
                  required
                  className="text-center text-2xl tracking-widest"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                disabled={loading || verificationCode.length !== 6}
              >
                {loading ? 'Verificando...' : 'Verificar'}
              </Button>
            </form>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300 dark:border-slate-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">
                  Ou continue com
                </span>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleGoogleLogin}
              className="mt-4 w-full bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Google
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center space-y-4">
          <Link to="/recuperar-senha" className="text-sm text-sky-600 hover:underline dark:text-sky-400">
            Esqueceu sua senha?
          </Link>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Não tem uma conta?{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.empreendamais"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-600 hover:underline dark:text-sky-400 flex items-center justify-center"
            >
              <Download className="mr-1 h-4 w-4" /> Baixe nosso app
            </a>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LoginPage;
