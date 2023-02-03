import { ReactNode } from "react";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IDataContact {
  id: string;
  full_name: string;
  email: string;
  phone: string;
}

export interface IDataUser {
  full_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface IDataLogin {
  email: string;
  password: string;
}

export interface IEditUser {
  full_name?: string;
  email?: string;
  phone?: string;
}

export interface IEditContact {
  full_name?: string;
  email?: string;
  phone?: string;
}
