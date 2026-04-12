import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { StudentProvider } from './context/StudentContext.jsx'
import './index.css'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StudentProvider>
    <BrowserRouter><App/></BrowserRouter>
  </StudentProvider>
  

)
