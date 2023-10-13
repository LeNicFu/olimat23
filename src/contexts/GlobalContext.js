import { createContext, useState } from "react"

export const GlobalContext = createContext({})

export function InfoProvider( {children} ) {
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [id, setId] = useState('')
    // const [editaNome, setEditaNome] = useState('')
    
    return (
        <GlobalContext.Provider value={{
            codigo,
            setCodigo,
            nome,
            setNome,
            id,
            setId,
            // editaNome,
            // setEditaNome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
