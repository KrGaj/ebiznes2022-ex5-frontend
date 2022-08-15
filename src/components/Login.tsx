import {Button, Col, Row} from "react-bootstrap";
import {environment} from "../config/environment";

export function navigateTo(url: string) {
    window.location.assign(environment.serverURL + url)
}

export function LoginComponent() {
    const style = {color: 'white'}

    return (
        <div>
            <Row>
                <h2 style={style}>Wybierz sposób logowania</h2>
            </Row>

            <Row>
                <Col>
                    <Button onClick={ () => {navigateTo("/login/google")} }>Google</Button>
                </Col>

                <Col>
                    <Button onClick={ () => {navigateTo("/login/github")} }>GitHub</Button>
                </Col>

                <Col>
                    <Button onClick={ () => {navigateTo("/login/gitlab")} }>GitLab</Button>
                </Col>

                <Col>
                    <Button onClick={ () => {navigateTo("/login/facebook")} }>Facebook</Button>
                </Col>
            </Row>
        </div>
    )
}