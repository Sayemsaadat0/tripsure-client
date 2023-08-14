import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider'
import { Provider } from 'react-redux'
import Store from './App/Store'
import '@smastrom/react-rating/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
