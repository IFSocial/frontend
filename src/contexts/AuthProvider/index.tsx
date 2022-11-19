import React, { createContext, useEffect, useState } from 'react';

import { IAuthProvider, IContext, IUser } from './types';
import {
  getUserLocalStorage,
  LoginRequest,
  setUserLocalStorage,
  SignupRequest,
} from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const users = getUserLocalStorage();

    if (user) {
      setUser(users);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Faz login
  const authenticate = async (email: string, password: string) => {
    const response = await LoginRequest(email, password);
    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
  };

  // Se cadastra
  const signup = async (name: string, email: string, password: string) => {
    await SignupRequest(name, email, password);
  };

  // Faz logout
  const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ ...user, authenticate, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
