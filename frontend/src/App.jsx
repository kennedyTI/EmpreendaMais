import React from 'react';
    import { Routes, Route, useLocation } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import ServicosMeiPage from '@/pages/ServicosMeiPage';
    import LembretesDasPage from '@/pages/LembretesDasPage';
    import EmitirNotaFiscalPage from '@/pages/EmitirNotaFiscalPage';
    import ImpostoRendaPage from '@/pages/ImpostoRendaPage';
    import CursosSebraePage from '@/pages/CursosSebraePage';
    import ContatoPage from '@/pages/ContatoPage'; 
    import LoginPage from '@/pages/LoginPage';
    import SignupPage from '@/pages/SignupPage';
    import PasswordResetPage from '@/pages/PasswordResetPage';
    import UpdatePasswordPage from '@/pages/UpdatePasswordPage';
    import { motion, AnimatePresence } from 'framer-motion';
    import { AuthProvider } from '@/contexts/AuthContext';
    import GoogleCallback from '@/pages/GoogleCallback'; // ajuste se estiver em outra pasta
    const PageWrapper = ({ children }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );

    function App() {
      const location = useLocation();
      return (
        <AuthProvider>
          <Layout>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                <Route path="/servicos-mei" element={<PageWrapper><ServicosMeiPage /></PageWrapper>} />
                <Route path="/lembretes-das" element={<PageWrapper><LembretesDasPage /></PageWrapper>} />
                <Route path="/emitir-nota-fiscal" element={<PageWrapper><EmitirNotaFiscalPage /></PageWrapper>} />
                <Route path="/imposto-renda" element={<PageWrapper><ImpostoRendaPage /></PageWrapper>} />
                <Route path="/cursos-sebrae" element={<PageWrapper><CursosSebraePage /></PageWrapper>} />
                <Route path="/contato" element={<PageWrapper><ContatoPage /></PageWrapper>} />
                <Route path="/login" element={<PageWrapper><LoginPage /></PageWrapper>} />
                <Route path="/cadastro" element={<PageWrapper><SignupPage /></PageWrapper>} />
                <Route path="/recuperar-senha" element={<PageWrapper><PasswordResetPage /></PageWrapper>} />
                <Route path="/google-callback" element={<PageWrapper><GoogleCallback /></PageWrapper>} />
                <Route path="/atualizar-senha" element={<PageWrapper><UpdatePasswordPage /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </Layout>
        </AuthProvider>
      );
    }

    export default App;