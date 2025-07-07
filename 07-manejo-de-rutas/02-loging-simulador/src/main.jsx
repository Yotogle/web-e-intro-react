import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx'
import { AuthProvider } from './assets/context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>

    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </AuthProvider>,
)