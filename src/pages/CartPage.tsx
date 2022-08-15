import {Button, Container, Row} from "react-bootstrap";
import { CartComponent } from "../components/Cart";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { fetchCartProducts } from "../api/cart";
import { CartProduct } from "../models/CartProduct";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
    const navigate = useNavigate()
    const { user } = useContext(ShopContext);
    const [ cart, setCart ] = useState<CartProduct[]>([])
    const [ cartSum, setCartSum ] = useState(0)
    const style = {color: 'white'}

    useEffect(() => {
        fetchCartProducts(user)
            .then((foundProducts) => {
                setCart(foundProducts)

                foundProducts.forEach(_ => {
                    setCartSum(foundProducts.reduce((previousValue, currentValue) => {
                        return previousValue + currentValue.product.price * currentValue.amount
                    }, 0))
                })
            })
    }, [user])

    return (
        <Container fluid>
            {cart.map((cartProduct) => (
                <CartComponent key={cartProduct.id} cartProduct={cartProduct} user={user} />
            ))}

            <Row>
                <h4 style={style}>Razem: {cartSum}</h4>
            </Row>

            <Row>
                {cart.length > 0 ? <Button onClick={() => navigate(`/pay/${cartSum}`)}>Zamów</Button> : null}
            </Row>
        </Container>
    );
}