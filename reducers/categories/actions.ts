import { Category } from "@/@types/Category";

export enum CategoriesActionTypes {
    CREATE_CATEGORY = 'CREATE_CATEGORY',
    DELETE_CATEGORY = 'DELETE_CATEGORY',
    UPDATE_CATEGORY = 'UPDATE_CATEGORY',
}

export function createCategoryAction(category: Category) {
    return {
        type: CategoriesActionTypes.CREATE_CATEGORY,
        payload: category
    }
}

export function deleteCategoryAction(id: string) {
    return {
        type: CategoriesActionTypes.DELETE_CATEGORY,
        payload: id
    }
}

export function updateCategoryAction(category: Category) {
    return {
        type: CategoriesActionTypes.UPDATE_CATEGORY,
        payload: category
    }
}