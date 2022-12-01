import api from '../../services/api';
import { IUser } from './types';

// Salva o usuario no BD local
export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('u', JSON.stringify(user));
}

// Checa se existe o usuario no BD local
export function getUserLocalStorage() {
  const json = localStorage.getItem('u');
  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

// Faz request do login passando email e senha como payload
export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post('/users/signin', { email, password });

    return request.data;
  } catch {
    return null;
  }
}

// Faz request do cadastrp passando nome, email e senha como payload
export async function SignupRequest(
  name: string,
  registration: string,
  sexo: string,
  email: string,
  password: string,
) {
  try {
    const request = await api.post('/users/signup', {
      name,
      registration,
      sexo,
      email,
      password,
    });

    return request.data;
  } catch {
    return null;
  }
}
