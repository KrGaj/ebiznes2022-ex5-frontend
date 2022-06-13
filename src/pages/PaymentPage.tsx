import {Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Payment} from "../models/Payment";
import {fetchAllPayments} from "../api/payments";
import {PaymentComponent} from "../components/Payment";

export const PaymentPage = () => {
    const [ payments, setPayments ] = useState<Payment[]>([])

    useEffect(() => {
        fetchAllPayments().then((foundPayments) => {
            setPayments(foundPayments)
        })
    }, [])

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