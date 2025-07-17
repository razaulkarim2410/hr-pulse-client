import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from "react-router";
import { router } from './router/router.jsx';
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from "axios";
// ✅ Create a QueryClient instance
const queryClient = new QueryClient();
axios.defaults.baseURL = "http://localhost:5000";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-inter'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>,
);
