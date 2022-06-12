import React, {useEffect, useState} from "react";
import {fetchProducts} from "../api/products";
import {Product} from "../models/Product";
import {Row} from "react-bootstrap";
import useCart from "../hooks/useCart";
import {ProductComponent} from "../components/Product";

export interface ProductProps extends React.ReactHTML {}

export const Products = () => {
    const [ products, setProducts ] = useState<Product[]>([])

    useEffect(() => {
        fetchProducts().then((product) => {
            setProducts(product)
        })
    }, [])

    return (
        <Row>
            {products.map((product: Product) =>(
                <ProductComponent key={product.id} product={product}/>
                // <><p>{product.name}</p>
                //     <button onClick={() => addProduct(product)}>Dodaj do koszyka</button>
                // </>
                )
            )}
        </Row>

    // <div>
    //     <div className="products">
    //         <ul>
    //             {products.map((product: Product) => (<li>
    //                 {product.name}
    //                 <button onClick={() => addProduct(product)}>Dodaj do koszyka</button>
    //             </li>))}
    //         </ul>
    //     </div>
    // </div>
    )
}
