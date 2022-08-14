import {Button, Container, Row} from "react-bootstrap";
import { CartComponent } from "../components/Cart";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { fetchCartProducts } from "../api/cart";
import { CartProduct } from "../models/CartProduct";
import { navigateTo } from "../components/Login";

export const CartPage = () => {
    const { user } = useContext(ShopContext);
    const [ cart, setCart ] = useState<CartProduct[]>([])
    const [ cartSum, setCartSum ] = useState(0)
    const style = {color: 'white'}

    useEffect(() => {
        fetchCartProducts(user)
            .then((foundProducts) => {
                setCart(foundProducts)

                foundProducts.forEach(product => {
                    setCartSum(cartSum + product.amount * product.product.price)
                })
            })
    }, [cartSum, user])

    return (
        <Container fluid>
            {cart.map((cartProduct) => (
                <CartComponent key={cartProduct.id} cartProduct={cartProduct} user={user} />
            ))}

            <Row>
                <h4 style={style}>Razem: ${cartSum}</h4>
            </Row>

            <Row>
                {cart.length > 0 ? <Button onClick={() => navigateTo(`/pay/${cartSum}`)}>Zamów</Button> : null}
            </Row>
        </Container>
    );
}