import {Container, Row} from "react-bootstrap";
import {HomeComponent} from "../components/Home";

export const HomePage = () => {
    return (
        <Container fluid>
            <Row>
                <HomeComponent />
            </Row>
        </Container>
    )
}