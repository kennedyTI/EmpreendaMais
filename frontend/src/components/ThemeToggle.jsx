import React from 'react';
    import { Moon, Sun } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { useTheme } from '@/hooks/useTheme.jsx';

    export function ThemeToggle() {
      const { theme, setTheme } = useTheme();

      return (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Mudar tema</span>
        </Button>
      );
    }