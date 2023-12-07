import { Category } from "@/@types/Category";
import { CategoriesActionTypes } from "./actions";
import { produce } from "immer";

export interface CategoriesState {
    categories: Category[];
}

export function categoriesReducer(state: CategoriesState, action: any) {
    switch (action.type) {
        case CategoriesActionTypes.CREATE_CATEGORY:
            {
                return produce(state, (draft) => {
                    draft.categories.push(action.payload)
                })
            }
        case CategoriesActionTypes.DELETE_CATEGORY:
            {
                return produce(state, (draft) => {
                    const i = draft.categories.findIndex(category => category.id === action.payload)
                    draft.categories.splice(i, 1)
                })
            }
        case CategoriesActionTypes.UPDATE_CATEGORY:
            {
                return produce(state, (draft) => {
                    const i = draft.categories.findIndex(category => category.id === action.payload.id)
                    draft.categories[i] = action.payload
                })
            }
        default:
            return state
    }
}