import { createContext } from "react";

//crear el contexto
export const UserContext = createContext()

//crear el provider

export const UserProvider = ({children}) => {
    const user = {
        nombre: "pepe",
        correo: "pepe@pepe",
        tema: "ligth"
    }
  return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  )
}




