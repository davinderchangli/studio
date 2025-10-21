'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AdminAuthContextType {
  isAdmin: boolean;
  loading: boolean;
  login: () => void;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage on initial load
    try {
      const storedAuth = sessionStorage.getItem('isAdminAuthenticated');
      if (storedAuth === 'true') {
        setIsAdmin(true);
      }
    } catch (error) {
        console.error("Could not read from sessionStorage", error);
    }
    setLoading(false);
  }, []);

  const login = () => {
    try {
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      setIsAdmin(true);
    } catch (error) {
      console.error("Could not write to sessionStorage", error);
    }
  };

  const logout = () => {
    try {
      sessionStorage.removeItem('isAdminAuthenticated');
      setIsAdmin(false);
    } catch (error) {
      console.error("Could not write to sessionStorage", error);
    }
  };

  const value = { isAdmin, loading, login, logout };

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
