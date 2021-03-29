import React, {createContext, useState, useContext} from "react";

const AlertContext = createContext()
const AlertToggleContext = createContext()

export const useAlert = ()=>{
	return useContext(AlertContext)
}

export const useAlertToggle = ()=>{
	return useContext(AlertToggleContext)
}

export const AlertProvider = ({children}) => {
	
	const [alert, setAlert] = useState(false)
	const toggle = () => setAlert(prev => !prev)
	
	return (
		<AlertContext.Provider value={alert}>
			<AlertToggleContext.Provider value={toggle}>
				{children}
			</AlertToggleContext.Provider>
		</AlertContext.Provider>
	)
}

