import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
    // useState para gerenciar a soma
    const [soma, setSoma] = useState();
    const state = { soma, setSoma };
    return (
        <AuthContext.Provider value={{...value,...state}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthValue() {
    return useContext(AuthContext);
}
