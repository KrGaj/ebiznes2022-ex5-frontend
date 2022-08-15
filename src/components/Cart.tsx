import {Button, Card, Col, Row} from "react-bootstrap";
import React from "react";
import { CartProduct } from "../models/CartProduct";
import {removeFromCart} from "../api/cart";
import {AuthData} from "../models/AuthData";

export interface CartProps {
    cartProduct: CartProduct
    user: AuthData
}

export function CartComponent(props: CartProps) {
    const { user, cartProduct } = props;

    return (
        <Row>
            <Card>
                <Col xs sm="1" >

                </Col>

                <Col xs sm="7">
                    <h4>{cartProduct.product.name}</h4>
                    <h4>Ilość: {cartProduct.amount}</h4>
                </Col>

                <Col xs sm="3">
                    <Button onClick={() => removeFromCart(cartProduct, user)}>Usuń z koszyka</Button>
                </Col>
            </Card>
        </Row>
    );
}
