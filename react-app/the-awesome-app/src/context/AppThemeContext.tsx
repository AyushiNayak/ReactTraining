'use client';
import React, { JSX, useState } from "react";

export type ThemeState ={
    mode:string;
    changeMode: (mode:string) => void;
}
const initialState: ThemeState = {
    mode: "light",
    changeMode: (mode) => {

    }
}
export const AppThemeContext = React.createContext<ThemeState>(initialState);

export function AppThemeProvider({children}: {children: JSX.Element}) {
    const [mode, setMode] = useState<string>(initialState.mode);
    return (
        <AppThemeContext.Provider value={{ mode, changeMode:setMode }}>
            {children}
        </AppThemeContext.Provider>
    )
}