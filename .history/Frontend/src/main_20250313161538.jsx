import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "re"

createRoot(document.getElementById('root')).render(
  <BrowserRouter></BrowserRouter>
    <App />
  
)
