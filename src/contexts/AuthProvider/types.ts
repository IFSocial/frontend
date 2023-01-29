export interface IUser {
  email?: string;
  token?: string;
  role?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (
    name: string,
    registration: string,
    sexo: string,
    email: string,
    password: string,
  ) => Promise<void>;
}

export interface IAuthProvider {
  children: JSX.Element;
}
