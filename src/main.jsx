import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ExtensionsProvider } from './context/ExtensionsContext.jsx'


createRoot(document.getElementById('root')).render(

   <ExtensionsProvider>
        <App />
  </ExtensionsProvider>
 
 
)
