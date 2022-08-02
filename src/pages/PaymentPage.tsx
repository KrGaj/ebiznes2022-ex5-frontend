import {Container, Row} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {Payment} from "../models/Payment";
import {fetchAllPayments} from "../api/payments";
import {PaymentComponent} from "../components/Payment";
import {ShopContext} from "../context/ShopContext";

export const PaymentPage = () => {
    const [ payments, setPayments ] = useState<Payment[]>([])
    const { user } = useContext(ShopContext)

    useEffect(() => {
        fetchAllPayments(user.accessToken).then((foundPayments) => {
            setPayments(foundPayments)
        })
    }, [user.accessToken])

    return (
        <Container fluid>
            <Row>
                {payments.map((payment) => (
                    <PaymentComponent key={payment.id} payment={payment} />
                ))}
            </Row>
        </Container>
    )
}