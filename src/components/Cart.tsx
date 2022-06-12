import useCart from "../hooks/useCart";
import {Button, Card, Col} from "react-bootstrap";
import React from "react";
import {CartProduct} from "../models/CartProduct";

export interface CartProps {
    cartProduct: CartProduct
}

export function CartComponent(props: CartProps) {
    const { cartProduct } = props;
    const { addProduct, removeProduct } = useCart();

    return (
        <div>
            <Col xs sm="1" >

            </Col>

            <Col xs sm="7">
                <Card>
                    <h4>{cartProduct.product.name}</h4>
                    <h4>Ilość: {cartProduct.quantity}</h4>
                </Card>
            </Col>

            <Col xs sm="3">
                <Button onClick={() => addProduct(cartProduct.product)}>Dodaj do koszyka</Button>
                <button onClick={() => removeProduct(cartProduct.product.id)}>Usuń z koszyka</button>
            </Col>
        </div>
    );
}
