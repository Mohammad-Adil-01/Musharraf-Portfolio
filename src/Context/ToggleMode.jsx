import { createContext, useContext, useState  } from "react"

const ToggleContext = createContext();

export const ToggleMode = ({children}) => {

  const [mode, setMode] = useState(true)

  return (
    <ToggleContext.Provider value={{mode,setMode}}>
        {children}
    </ToggleContext.Provider>
  )
}

export const useToggle =()=> useContext(ToggleContext);

