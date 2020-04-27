import React, { useState } from 'react'

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isSign, setIsSign] = useState(false);
  const switchSign = (inOut) => {
    setIsSign(inOut)
  };

  return (
    <AuthContext.Provider value={{ isSign, switchSign }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;