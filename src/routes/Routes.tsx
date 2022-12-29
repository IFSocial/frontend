import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedLayout } from '../components/ProtectedLayout';
import {
  Contatos,
  Home,
  Horarios,
  Modalidades,
  Perfil,
  Signin,
  Signup,
} from '../packages/pages';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedLayout>
              <Home />
            </ProtectedLayout>
          }
        />
        <Route
          path="/modalidades"
          element={
            <ProtectedLayout>
              <Modalidades />
            </ProtectedLayout>
          }
        />
        <Route
          path="/perfil"
          element={
            <ProtectedLayout>
              <Perfil />
            </ProtectedLayout>
          }
        />
        <Route
          path="/horarios"
          element={
            <ProtectedLayout>
              <Horarios />
            </ProtectedLayout>
          }
        />
        <Route
          path="/contatos"
          element={
            <ProtectedLayout>
              <Contatos />
            </ProtectedLayout>
          }
        />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
