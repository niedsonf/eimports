'use client'

import { User } from "@/@types/User";
import { logoutAction, updateUserAction } from "@/reducers/user/actions";
import { UserState, userReducer } from "@/reducers/user/reducer";
import { useCallback, useEffect, useReducer } from "react";
import { createContext } from "use-context-selector";

interface UserContextType extends UserState {
    updateUser: (user: User) => void;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(userReducer, {
        name: ''
    }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('@eimports:user-1.0.0')

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })

    const { name } = state

    const updateUser = useCallback((user: User) => {
       dispatch(updateUserAction(user))
    }, [])

    const logout = useCallback(() => {
        dispatch(logoutAction())
    }, [])

    useEffect(() => {
        const stateJSON = JSON.stringify(state)
        localStorage.setItem('@eimports:user-1.0.0', stateJSON)
    }, [state])

    return (
        <UserContext.Provider value={{ name, updateUser, logout }}>
            {children}
        </UserContext.Provider>
    )
}