
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, Film, FileText, Home, Landmark, Zap, 
  MessageSquare as MessageSquareHeart, PhoneCall, Mail, 
  LogIn, Download, LogOut 
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// NavLink component definition
const NavLink = ({ to, icon, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive
          ? 'bg-sky-100 text-sky-900 dark:bg-sky-900 dark:text-sky-100'
          : 'text-slate-600 hover:bg-sky-50 dark:text-slate-300 dark:hover:bg-sky-900/50'
      }`}
    >
      {React.cloneElement(icon, {
        className: `${isActive ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400 dark:text-slate-500'} mr-2 h-4 w-4`
      })}
      {children}
    </Link>
  );
};

const Layout = ({ children }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const user = null; // This will be replaced with actual user state when Supabase is integrated

  const handleLogout = async () => {
    toast({
      title: "Logout não disponível",
      description: "A funcionalidade de logout será habilitada após a integração com Supabase.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-sky-100 dark:from-slate-900 dark:to-sky-900 transition-colors duration-300">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            {/* Logo e Nome - Agora com flex-shrink-0 para evitar compressão */}
            <Link to="/" className="flex items-center flex-shrink-0 mr-4">
              <img src="/logo.svg" alt="Empreenda+ Logo" className="h-10 w-auto mr-3" />
              <span className="text-2xl md:text-3xl font-bold gradient-text whitespace-nowrap">
                Empreenda+
              </span>
            </Link>

            {/* Navegação - Com flex-grow para ocupar espaço disponível */}
            <nav className="hidden md:flex items-center space-x-1 flex-grow justify-center">
              <NavLink to="/" icon={<Home />}>Início</NavLink>
              <NavLink to="/servicos-mei" icon={<Briefcase />}>Abrir MEI</NavLink>
              <NavLink to="/lembretes-das" icon={<FileText />}>DAS</NavLink>
              <NavLink to="/emitir-nota-fiscal" icon={<Zap />}>Notas Fiscais</NavLink>
              <NavLink to="/imposto-renda" icon={<Landmark />}>Imposto de Renda</NavLink>
              <NavLink to="/cursos-sebrae" icon={<Film />}>Cursos SEBRAE</NavLink>
              <NavLink to="/contato" icon={<Mail />}>Contato</NavLink>
            </nav>

            {/* Botões - Com flex-shrink-0 para manter tamanho */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {user ? (
                <Button 
                  onClick={handleLogout} 
                  variant="outline" 
                  size="sm" 
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  <LogOut className="mr-2 h-4 w-4" /> Sair
                </Button>
              ) : (
                <>
                  <Link to="/login">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="whitespace-nowrap"
                    >
                      <LogIn className="mr-2 h-4 w-4" /> Entrar
                    </Button>
                  </Link>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.empreendamais"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-transform hover:scale-105 whitespace-nowrap"
                  >
                    <Download className="mr-2 h-4 w-4" /> Baixar App
                  </a>
                </>
              )}
              <ThemeToggle />
              <a
                href="https://wa.me/SEUNUMERODOWHATSAPP"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-transform hover:scale-105 whitespace-nowrap"
              >
                <MessageSquareHeart className="mr-2 h-5 w-5" />
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white dark:bg-slate-800 shadow-lg mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-lg font-semibold text-slate-900 dark:text-white">Sobre Nós</span>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Empreenda+ é sua plataforma completa para gestão do MEI.
              </p>
            </div>
            <div>
              <span className="text-lg font-semibold text-slate-900 dark:text-white">Contato</span>
              <div className="mt-2 space-y-2">
                <a href="tel:+5500000000000" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400">
                  <PhoneCall className="h-4 w-4 mr-2" />
                  (00) 00000-0000
                </a>
                <a href="mailto:contato@empreendamais.com" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400">
                  <Mail className="h-4 w-4 mr-2" />
                  contato@empreendamais.com
                </a>
              </div>
            </div>
            <div>
              <span className="text-lg font-semibold text-slate-900 dark:text-white">Redes Sociais</span>
              <div className="mt-2 flex space-x-4">
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400">
                  Instagram
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400">
                  Facebook
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-center text-slate-600 dark:text-slate-300">
              © {new Date().getFullYear()} Empreenda+. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
