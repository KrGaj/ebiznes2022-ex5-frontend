import {AuthData} from "../../models/AuthData";

export interface ShopContextState {
    user: AuthData;
    logOut: Function;
}
