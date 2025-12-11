import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ExtensionsProvider } from './context/ExtensionsContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
 <ThemeProvider>
   <ExtensionsProvider>
        <App />
  </ExtensionsProvider>
 </ThemeProvider>
 
)
