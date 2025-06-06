import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';
    import App from '@/App';
    import '@/index.css';
    import { Toaster } from '@/components/ui/toaster';
    import { ThemeProvider } from '@/hooks/useTheme.jsx';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <BrowserRouter>
            <App />
            <Toaster />
          </BrowserRouter>
        </ThemeProvider>
      </React.StrictMode>
    );