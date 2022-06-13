import React, {useEffect, useState} from "react";
import {fetchProducts} from "../api/products";
import {Product} from "../models/Product";
import {Container, Row} from "react-bootstrap";
import {ProductComponent} from "../components/Product";

export interface ProductProps extends React.ReactHTML {}

export const Products = () => {
    const [ products, setProducts ] = useState<Product[]>([])

    useEffect(() => {
        fetchProducts().then((foundProducts) => {
            setProducts(foundProducts)
        })
    }, [])

    return (
        <Container fluid>
            <Row>
                {products.map((product: Product) =>(
                    <ProductComponent key={product.id} product={product}/>
                    // <><p>{product.name}</p>
                    //     <button onClick={() => addProduct(product)}>Dodaj do koszyka</button>
                    // </>
                    )
                )}
            </Row>
        </Container>

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
