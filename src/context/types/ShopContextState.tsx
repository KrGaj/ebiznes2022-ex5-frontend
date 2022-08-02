import {CartProduct} from "../../models/CartProduct";
import {Product} from "../../models/Product";
import {AuthData} from "../../models/AuthData";

export interface ShopContextState {
    cartProducts: CartProduct[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: string) => void;

    user: AuthData;
    logIn: (user: AuthData) => void;
    logOut: () => void;
    getLoginStatus: () => void;
}
