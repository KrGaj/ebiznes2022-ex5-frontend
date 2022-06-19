import {Button, Col, Row} from "react-bootstrap";
import {environment} from "../config/environment";

export function navigateTo(url: string) {
    window.location.assign(environment.serverURL + url)
}

export function LoginComponent() {
    return (
        <Row>
            <Col>
                <Button onClick={ () => {navigateTo("/login/google")} }>Google</Button>
            </Col>
        </Row>
    )
}