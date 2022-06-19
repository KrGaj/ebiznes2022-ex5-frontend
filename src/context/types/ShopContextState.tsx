import {CartProduct} from "../../models/CartProduct";
import {Product} from "../../models/Product";

export interface ShopContextState {
    cartProducts: CartProduct[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: string) => void;

    loggedIn: boolean;
    userId: string;
    logIn: (userId: string) => void;
    logOut: () => void;
    getLoginStatus: () => void;
}
