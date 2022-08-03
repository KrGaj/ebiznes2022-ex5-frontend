import { Card, Col } from "react-bootstrap";
import React from "react";
import { CartProduct } from "../models/CartProduct";

export interface CartProps {
    cartProduct: CartProduct
}

export function CartComponent(props: CartProps) {
    const { cartProduct } = props;

    return (
        <div>
            <Col xs sm="1" >

            </Col>

            <Col xs sm="7">
                <Card>
                    <h4>{cartProduct.product.name}</h4>
                    <h4>Ilość: {cartProduct.amount}</h4>
                </Card>
            </Col>
        </div>
    );
}
