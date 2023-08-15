import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes.jsx'
import { Provider } from 'react-redux'
import Store from './App/Store'
<<<<<<< HEAD
import AuthProvider from './Provider/AuthProvider'
=======
import '@smastrom/react-rating/style.css'
>>>>>>> 66a567b0e2e2418b32091e6bf088288dc33f68de

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
