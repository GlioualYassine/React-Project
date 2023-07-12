import { createContext } from "react"
import useLocalStorage from "../../hooks/useLocalStorage";


export const BookContext = createContext();




export const BookProvider = ({children}) => {
    const [books,setBooks] = useLocalStorage('book',[]) 

    const value = {
        books,
        setBooks
    }
  return (
    <BookContext.Provider value={value}>
        {children}
    </BookContext.Provider>
  )
}

