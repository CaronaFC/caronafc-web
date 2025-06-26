import api from "../api";
import axios from "axios";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (identificador: string, senha: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
    }
  }, [token]);

  async function login(identificador: string, senha: string): Promise<void> {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("auth/login", { identificador, senha });
      const { token } = res.data;

      if (token) {
        setToken(token);
        setIsAuthenticated(true);
      } else {
        throw new Error;
      }
    } catch (error) {
      setIsAuthenticated(false);
      setToken(null);

      if (axios.isAxiosError(error)) {
        if (error.status && error.status === 401) {
          setError("Credenciais inválidas. Por favor, tente novamente.");
        }
      } else {
        setError("Erro inesperado do servidor, tente novamente.");
      }

      throw error;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, loading, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
