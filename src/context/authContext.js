import React, { createContext, useState } from "react";

const DEFAULT_USER_INFO = {
    email:undefined, 
    bloco:undefined, 
    num_apart:undefined, 
    nome:undefined
}

export const AuthContext = createContext({userInfo:undefined, setUserInfo: () => null});

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(DEFAULT_USER_INFO);
    
    return (<AuthContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </AuthContext.Provider>)
};
  
export default AuthProvider;

