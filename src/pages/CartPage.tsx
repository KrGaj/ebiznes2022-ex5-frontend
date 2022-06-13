import {Container, Row} from "react-bootstrap";
import {CartComponent} from "../components/Cart";
import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";

export const CartPage = () => {
    const { cartProducts } = useContext(ShopContext);

    return (
        <Container fluid>
            <Row>
                {cartProducts.map((cartProduct) => (
                    <CartComponent key={cartProduct.id} cartProduct={cartProduct} />
                ))}
            </Row>
        </Container>
    );
}