import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <div className="text-center mt-10 text-2xl">🏠 This is Home Section</div>,
      },
      {
        path: "/about",
        element: <div className="text-center mt-10 text-2xl">ℹ️ This is About Section</div>,
      },
      {
        path: "/projects",
        element: <div className="text-center mt-10 text-2xl">🚀 This is Projects Section</div>,
      },
      {
        path: "/contact",
        element: <div className="text-center mt-10 text-2xl">📞 This is Contact Section</div>,
      },
      {
        path: "/skils",
        element: <div>this is skill </div>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)