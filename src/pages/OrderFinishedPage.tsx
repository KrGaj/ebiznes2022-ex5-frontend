import {Container, Row} from "react-bootstrap";

export const OrderFinishedPage = () => {
    const style = { color: 'white' }

    return (
        <Container fluid>
            <Row>
                <div>
                    <h4 style={style}>Zamówienie zostało przyjęte.</h4>
                    <h4 style={style}>Dziękujemy :)</h4>
                </div>
            </Row>
        </Container>
    )
}