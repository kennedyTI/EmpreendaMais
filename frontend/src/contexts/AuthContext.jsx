import React, { createContext, useContext, useState, useEffect } from 'react';
    // import { supabase } from '@/lib/supabaseClient'; // Será descomentado após a configuração do Supabase

    const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        // Lógica para verificar sessão existente com Supabase será adicionada aqui
        // Exemplo:
        // const session = supabase.auth.session();
        // setUser(session?.user ?? null);
        // setLoading(false);

        // const { data: authListener } = supabase.auth.onAuthStateChange(
        //   async (event, session) => {
        //     setUser(session?.user ?? null);
        //     setLoading(false);
        //   }
        // );
        
        // return () => {
        //   authListener?.unsubscribe();
        // };
        
        // Simulação enquanto Supabase não está configurado
        console.warn("AuthContext: Supabase client não configurado. Autenticação desabilitada.");
        setLoading(false);
      }, []);

      const login = async (email, password) => {
        // Lógica de login com Supabase
        // return supabase.auth.signInWithPassword({ email, password });
        console.warn("AuthContext: Tentativa de login sem Supabase configurado.");
        return { error: { message: "Supabase não configurado." } };
      };

      const signup = async (email, password, metadata) => {
        // Lógica de cadastro com Supabase
        // return supabase.auth.signUp({ email, password, options: { data: metadata } });
        console.warn("AuthContext: Tentativa de signup sem Supabase configurado.");
        return { error: { message: "Supabase não configurado." } };
      };

      const logout = async () => {
        // Lógica de logout com Supabase
        // await supabase.auth.signOut();
        // setUser(null);
        console.warn("AuthContext: Tentativa de logout sem Supabase configurado.");
      };
      
      const sendPasswordResetEmail = async (email) => {
        // Lógica para enviar email de redefinição de senha
        // return supabase.auth.resetPasswordForEmail(email, {
        //   redirectTo: `${window.location.origin}/atualizar-senha`,
        // });
        console.warn("AuthContext: Tentativa de resetar senha sem Supabase configurado.");
        return { error: { message: "Supabase não configurado." } };
      };

      const updateUserPassword = async (newPassword) => {
        // Lógica para atualizar senha do usuário logado
        // return supabase.auth.updateUser({ password: newPassword });
        console.warn("AuthContext: Tentativa de atualizar senha sem Supabase configurado.");
        return { error: { message: "Supabase não configurado." } };
      };


      const value = {
        user,
        login,
        signup,
        logout,
        loading,
        sendPasswordResetEmail,
        updateUserPassword,
      };

      return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
    };

    export const useAuth = () => {
      const context = useContext(AuthContext);
      if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
      }
      return context;
    };