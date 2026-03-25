import { act } from "react";

export type AuthState={
    isAuthenticated: boolean;
    userName: string 
    accessToken: string 
    refreshToken: string 
}

const initialAuthState: AuthState = {
    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
};

export type AuthAction =
    | { type: "LOGIN"; payload: { userName: string; accessToken: string; refreshToken: string; isAuthenticated: boolean } }
    | { type: "LOGOUT" };

//login {type: "LOGIN", payload: {userName, accessToken, refreshToken,isAuthenticated}}
// logout {type: "LOGOUT"}
export const authReducer = (state = initialAuthState, action: AuthAction) => {
    switch (action.type) {
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return initialAuthState;
        default:
            return state;
    }
}