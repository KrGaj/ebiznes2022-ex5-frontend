import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Product } from "../models/Product";
import { ShopContext } from "../context/ShopContext";
import {addToCart} from "../api/cart";

export interface ProductProps {
    product: Product
}

export function ProductComponent(props: ProductProps) {
    const { product } = props;
    const { user } = useContext(ShopContext);

    return (
        <div>
            <Card className="mt-3">
                <Col xs sm="1" >

                </Col>

                <Col xs sm="7">
                    <Card>
                        <h4>{product.name}</h4>
                        <h4>Cena: {product.price}</h4>
                        <h4>Ilość: {product.available}</h4>
                    </Card>
                </Col>

                <Col xs sm="3">
                    <Button onClick={() => addToCart(product, user)}>Dodaj do koszyka</Button>
                </Col>
            </Card>


            {/*<Col xs sm="1" >*/}

            {/*</Col>*/}

            {/*<Col xs sm="7">*/}
            {/*    <Card>*/}
            {/*        <h4>{product.name}</h4>*/}
            {/*    </Card>*/}
            {/*</Col>*/}

            {/*<Col xs sm="3">*/}
            {/*    <Button onClick={() => addToCart(product, user)}>Dodaj do koszyka</Button>*/}
            {/*</Col>*/}
        </div>
    );
}