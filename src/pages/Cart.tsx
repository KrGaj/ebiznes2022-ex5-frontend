import useCart from "../hooks/useCart";
import {Container, Row} from "react-bootstrap";
import {CartComponent} from "../components/Cart";

export const CartPage = () => {
    const { cart } = useCart();

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