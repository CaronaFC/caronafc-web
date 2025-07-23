import api from "../api";
import axios from "axios";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type UsuarioType = {
  id: number;
  nome_completo: string;
  email: string;
  numero: string;
  cpf: string;
  senha: string;
  imagem: string | null;
  data_nascimento: string | null;
  data_criacao: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  token: string | null;
  usuario: UsuarioType | null;
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

  const [usuario, setUsuario] = useState<UsuarioType | null>(() => {
    const savedUser = localStorage.getItem("usuario");
    return savedUser ? JSON.parse(savedUser) : null;
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

  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  async function login(identificador: string, senha: string): Promise<void> {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("auth/login", { identificador, senha });
      const { token, usuario } = res.data;

      if (token && usuario) {
        setToken(token);
        setUsuario(usuario);
        setIsAuthenticated(true);
      } else {
        throw new Error("Resposta inválida do servidor.");
      }
    } catch (error) {
      setIsAuthenticated(false);
      setToken(null);
      setUsuario(null);

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setError("Credenciais inválidas. Por favor, tente novamente.");
        } else {
          setError("Erro ao conectar ao servidor, tente novamente.");
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
    setUsuario(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    delete api.defaults.headers.common["Authorization"];
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, usuario, loading, error, login, logout }}
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
