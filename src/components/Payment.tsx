import {Payment} from "../models/Payment";
import {Button, Card, Col} from "react-bootstrap";
import React from "react";

export interface PaymentProps {
    payment: Payment
}

export function PaymentComponent(props: PaymentProps) {
    const { payment } = props;
    const date = new Date(payment.date)

    return (
        <div>
            <Col xs sm="1" >

            </Col>

            <Col xs sm="7">
                <Card>
                    <h4>{payment.method}</h4>
                    <h4>{date.toString()}</h4>
                    <h4>{payment.paid}</h4>
                </Card>
            </Col>
        </div>
    );
}