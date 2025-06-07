// src/pages/GoogleCallback.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from '@/components/ui/use-toast';


const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");
    const picture = params.get("picture");
    
    if (token && email) {
      // Armazena no localStorage
      localStorage.setItem("jwt_token", token);
      localStorage.setItem("user_name", name);
      localStorage.setItem("user_email", email);
      localStorage.setItem("user_picture", picture);

       // Mostra toast reaproveitando o padrão do LoginPage
      toast(
        {
          title: "Login realizado com sucesso",
          description: "Você será redirecionado em instantes.",
        }
      );

      // Redireciona após 1 segundo
      setTimeout(() => {
        navigate("/dashboard"); // ou qualquer rota após login
      }, 1000);
    } else {
      toast({
        title: "Erro na autenticação",
        description: "Não foi possível obter os dados do Google.",
        variant: "destructive",
      });
      navigate("/login"); // se falhar, volta pro login
      }
    }, [location, navigate]);

  return (
  <p className="text-center text-slate-600 dark:text-slate-300">Autenticando com Google...
  </p>
  );
};

export default GoogleCallback;
