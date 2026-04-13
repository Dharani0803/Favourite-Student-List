import { createContext, useState } from "react"

export const StudentContext = createContext()

export function StudentProvider({ children }) {

  const [favourites, setFavourites] = useState([])
  const [user, setUser] = useState("")

  const addFavourite = (student) => {
    setFavourites(prev =>
      prev.find(s => s.id === student.id)
        ? prev
        : [...prev, student]
    )
  }

  const removeFavourite = (id) => {
    setFavourites(prev =>
      prev.filter(student => student.id !== id)
    )
  }

  return (
    <StudentContext.Provider value={{
      favourites,
      addFavourite,
      removeFavourite,
      user,
      setUser
    }}>
      {children}
    </StudentContext.Provider>
  )
}