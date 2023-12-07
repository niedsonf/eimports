'use client'

import { Category } from "@/@types/Category";
import { createCategoryAction, deleteCategoryAction } from "@/reducers/categories/actions";
import { CategoriesState, categoriesReducer } from "@/reducers/categories/reducer";
import { useCallback, useEffect, useReducer } from "react";
import { createContext } from "use-context-selector";

interface CategoriesContextType extends CategoriesState {
    createCategory: (category: Category) => boolean;
    deleteCategory: (id: string) => void;
}

export const CategoriesContext = createContext({} as CategoriesContextType)

export function CategoriesContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(categoriesReducer, {
        categories: []
    }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('@eimports:categories-1.0.0')

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })

    const { categories } = state

    const createCategory = useCallback((category: Category) => {
        if (categories.find(categoryInRow => category.id === categoryInRow.id)) {
            return false
        } else {
            dispatch(createCategoryAction(category))
            return true
        }
    }, [])

    const deleteCategory = useCallback((id: string) => {
        dispatch(deleteCategoryAction(id))
    }, [])

    useEffect(() => {
        const stateJSON = JSON.stringify(state)
        localStorage.setItem('@eimports:categories-1.0.0', stateJSON)
    }, [state])

    return (
        <CategoriesContext.Provider value={{ categories, createCategory, deleteCategory }}>
            {children}
        </CategoriesContext.Provider>
    )
}