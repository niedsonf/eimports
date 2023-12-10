'use client'

import { Category } from "@/@types/Category";
import { createCategoryAction, deleteCategoryAction, fetchCategoriesAction } from "@/reducers/categories/actions";
import { CategoriesState, categoriesReducer } from "@/reducers/categories/reducer";
import { WebServer } from "@/services/WebServer";
import { useCallback, useEffect, useLayoutEffect, useReducer } from "react";
import { createContext } from "use-context-selector";

interface CategoriesContextType extends CategoriesState {
    createCategory: (category: Category) => void;
    deleteCategory: (id: number) => void;
    fetchCategories: (categories: Category[]) => void;
}

export const CategoriesContext = createContext({} as CategoriesContextType)

export function CategoriesContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(categoriesReducer, {
        categories: [],
    })

    const { categories } = state

    const createCategory = useCallback((category: Category) => {
        dispatch(createCategoryAction(category))
    }, [])

    const deleteCategory = useCallback((id: number) => {
        dispatch(deleteCategoryAction(id))
    }, [])

    const fetchCategories = useCallback((categories: Category[]) => {
        dispatch(fetchCategoriesAction(categories))
    }, [])

    useEffect(() => {
        let user
        const userJSON = localStorage.getItem('@eimports:user-1.0.0')
        if (userJSON) {
            user = JSON.parse(userJSON)
        }
        async function getCategories(token: string) {
            try {
                const categoriesData = await WebServer.GetCategories({ token })
                fetchCategories(categoriesData)
                console.log('Fetch Categories: ', categoriesData)
            } catch (e) {
                console.log(e)
            }
        }
        if (user.access_token) {
            getCategories(user.access_token)
        }
    }, [])

    return (
        <CategoriesContext.Provider value={{ categories, createCategory, deleteCategory, fetchCategories }}>
            {children}
        </CategoriesContext.Provider>
    )
}