import { Product } from "../models/Product";
import axios from "../config/axios";

export const fetchProducts = async (): Promise<Product[]> => {
    return axios("").get("/products/all")
}
