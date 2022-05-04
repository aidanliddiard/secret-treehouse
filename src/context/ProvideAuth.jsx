import { createContext, useState } from 'react';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const loginSuccessful =
      email === process.env.AUTH_EMAIL &&
      password === process.env.AUTH_PASSWORD;
    if (loginSuccessful) setUser({ email });
    else throw new Error('Are you sure that is is your email and password?');
    return loginSuccessful;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
