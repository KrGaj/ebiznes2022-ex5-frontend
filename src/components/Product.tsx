import React from "react";
import {Button, Card, Col, Container} from "react-bootstrap";
import {Product} from "../models/Product";
import useCart from "../hooks/useCart";

export interface ProductProps {
    product: Product
}

export function ProductComponent(props: ProductProps) {
    // constructor(props: ProductProps) {
    //     super(props);
    //
    //     this.state = {
    //         product: props.product
    //     }
    // }

    const { product } = props;
    const { addProduct } = useCart();

    return (
        <Container fluid>
            <Col xs sm="1" >

            </Col>

            <Col xs sm="7">
                <Card>
                    <h4>{product.name}</h4>
                </Card>
            </Col>

            <Col xs sm="3">
                <Button onClick={() => addProduct(product)}>Dodaj do koszyka</Button>
            </Col>
        </Container>
    );
}