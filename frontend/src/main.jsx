
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from './context/ProductContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductContextProvider>
       <App />
    </ProductContextProvider>
  </BrowserRouter>
)
