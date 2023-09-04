import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes.jsx'
import { Provider } from 'react-redux'
import Store from './App/Store'
import AuthProvider from './Provider/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CustomChatBot from './Components/Shared/CustomChatBot/CustomChatBot'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <AuthProvider>
      <QueryClientProvider client={queryClient} >
          <RouterProvider router={router} />
          <CustomChatBot/>
        </QueryClientProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
