import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// রাউটার কনফিগারেশন
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // এখানে মেইন লেআউট বসবে
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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)