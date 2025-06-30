
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate login - in real app, this would call an API
    if (email === 'admin@africansfinest.com' && password === 'admin123') {
      setUser({
        id: '1',
        email,
        name: 'Admin User',
        role: 'admin'
      });
      return true;
    } else if (email && password) {
      setUser({
        id: '2',
        email,
        name: email.split('@')[0],
        role: 'user'
      });
      return true;
    }
    return false;
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulate registration
    if (email && password && name) {
      setUser({
        id: Date.now().toString(),
        email,
        name,
        role: 'user'
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isAdmin
    }}>
      {children}
    </AuthContext.Provider>
  );
};
