import {AuthData} from "../../models/AuthData";

export interface ShopContextState {
    user: AuthData;
    logIn: (user: AuthData) => void;
    logOut: () => void;
}
