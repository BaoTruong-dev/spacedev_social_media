import { FC, createContext, useContext, useEffect, useState } from 'react'

export interface ModeContextProps {
	mode: 'dark' | 'light'
	toggleMode: (darkMode?: boolean) => void
}

const Context = createContext({} as ModeContextProps)

export const DarkModeProvider: FC<{ children: any }> = ({ children }) => {
	const [mode, setMode] = useState<ModeContextProps['mode']>(() => localStorage.theme)
	useEffect(() => {
		if (mode === 'dark') {
			document.documentElement.classList.add('dark')
			localStorage.theme = 'dark'
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.theme = 'light'
		}
	}, [mode])

	const toggleMode: ModeContextProps['toggleMode'] = darkMode => {
		const map = new Map()
		map.set(true, 'light')
		map.set(false, 'dark')
		setMode(map.get(darkMode ?? mode === 'dark'))
	}
	return <Context.Provider value={{ mode, toggleMode }}>{children}</Context.Provider>
}

export const useMode = () => useContext(Context)
