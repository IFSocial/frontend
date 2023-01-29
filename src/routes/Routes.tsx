import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedLayout } from '../components/ProtectedLayout';
import {
  Contatos,
  DeleteInfo,
  Equipes,
  Home,
  Horarios,
  Modalidades,
  Perfil,
  Signin,
  Signup,
  Times,
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
        <Route
          path="/times/:id"
          element={
            <ProtectedLayout>
              <Times />
            </ProtectedLayout>
          }
        />
        <Route
          path="/equipes"
          element={
            <ProtectedLayout>
              <Equipes />
            </ProtectedLayout>
          }
        />
        <Route
          path="/deleteInfo"
          element={
            <ProtectedLayout>
              <DeleteInfo />
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
