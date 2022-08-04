import { Container, Row } from "react-bootstrap";
import { CartComponent } from "../components/Cart";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import useCart from "../hooks/useCart";

export const CartPage = () => {
    const { user } = useContext(ShopContext);
    const { useGetCart } = useCart(user)
    const cart = useGetCart()

    return (
        <Container fluid>
            <Row>
                {cart.map((cartProduct) => (
                    <CartComponent key={cartProduct.id} cartProduct={cartProduct} />
                ))}
            </Row>
        </Container>
    );
}