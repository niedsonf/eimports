import { User } from "@/@types/User"
import { UserActionTypes } from "./actions"
import { produce } from "immer"

export interface UserState extends User {

}

export function userReducer(state: UserState, action: any) {
    switch (action.type) {
        case UserActionTypes.UPDATE_USER:
            {
                return produce(state, (draft) => {
                    draft.name = action.payload.name
                })
            }
        case UserActionTypes.LOGOUT:
            {
                localStorage.removeItem('@eimports:user-1.0.0')
                return produce(state, (draft) => {
                    draft.name = ''
                })
            }

        default:
            return state
    }
}