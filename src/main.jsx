import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from "react-router";
import { router } from './router/router.jsx';
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from "axios";
import { HelmetProvider } from 'react-helmet-async';
// ✅ Create a QueryClient instance
const queryClient = new QueryClient();
axios.defaults.baseURL = "https://hr-pulse-server.vercel.app";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div className='font-inter'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
    </HelmetProvider>
  </StrictMode>,
);
