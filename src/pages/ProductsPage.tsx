import React, {useEffect, useState} from "react";
import {fetchProducts} from "../api/products";
import {Product} from "../models/Product";
import {Container, Row} from "react-bootstrap";
import {ProductComponent} from "../components/Product";

export interface ProductProps extends React.ReactHTML {}

export const ProductsPage = () => {
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
                    )
                )}
            </Row>
        </Container>
    )
}
