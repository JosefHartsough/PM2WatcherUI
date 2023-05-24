// import {
//   createContext,
//   ReactNode,
//   useState,
//   Dispatch,
//   SetStateAction,
// } from "react";
// import { verifyUserSession } from "../utils/verifyUserSession";

// interface AuthContextData {
//   isAuthenticated: boolean;
//   setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
// }

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthContext = createContext({} as AuthContextData);

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [isAuthenticated, setIsAuthenticated] = useState(verifyUserSession());

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
