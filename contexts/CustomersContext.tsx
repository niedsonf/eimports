'use client'

import { Customer } from "@/@types/Customer";
import { createCustomerAction, deleteCustomerAction } from "@/reducers/customers/actions";
import { CustomersState, customersReducer } from "@/reducers/customers/reducer";
import { useCallback, useEffect, useReducer } from "react";
import { createContext } from "use-context-selector";

interface CustomersContextType extends CustomersState {
    createCustomer: (customer: Customer) => boolean;
    deleteCustomer: (id: string) => void;
}

export const CustomersContext = createContext({} as CustomersContextType)

export function CustomersContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(customersReducer, {
        customers: []
    }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('@eimports:customers-1.0.0')

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })

    const { customers } = state

    const createCustomer = useCallback((customer: Customer) => {
        if (customers.find(customerInRow => customer.id === customerInRow.id)) {
            return false
        } else {
            dispatch(createCustomerAction(customer))
            return true
        }
    }, [])

    const deleteCustomer = useCallback((id: string) => {
        dispatch(deleteCustomerAction(id))
    }, [])

    useEffect(() => {
        const stateJSON = JSON.stringify(state)
        localStorage.setItem('@eimports:customers-1.0.0', stateJSON)
    }, [state])

    return (
        <CustomersContext.Provider value={{ customers, createCustomer, deleteCustomer }}>
            {children}
        </CustomersContext.Provider>
    )
}