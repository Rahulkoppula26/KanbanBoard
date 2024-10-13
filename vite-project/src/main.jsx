import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
