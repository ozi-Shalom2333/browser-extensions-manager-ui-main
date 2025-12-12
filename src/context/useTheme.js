import { useEffect, useState } from 'react';

const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
  
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) {
        return stored === 'dark';
      }
    }
    return false; 

  });

  useEffect(() => {
    
    if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
  
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return { isDark, toggle };
};

export default useTheme;
