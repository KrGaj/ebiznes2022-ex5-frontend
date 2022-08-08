import { Container, Row } from "react-bootstrap";
import { CartComponent } from "../components/Cart";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { fetchCartProducts } from "../api/cart";
import { CartProduct } from "../models/CartProduct";

export const CartPage = () => {
    const { user } = useContext(ShopContext);
    const [ cart, setCart ] = useState<CartProduct[]>([])

    useEffect(() => {
        fetchCartProducts(user)
            .then((foundProducts) => {
                setCart(foundProducts)
            })
    }, [user])

    return (
        <Container fluid>
            <Row>
                {cart.map((cartProduct) => (
                    <CartComponent key={cartProduct.id} cartProduct={cartProduct} user={user} />
                ))}
            </Row>
        </Container>
    );
}