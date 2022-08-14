import useAuth from "../hooks/useAuth";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";

export const LogoutPage = () => {
    const { logOut } = useAuth()
    const style = { color: 'white' }

    useEffect(() => {
        logOut()
    }, [logOut])

    return (
        <Container fluid>
            <Row>
                <div>
                    <h4 style={style}>Wylogowano :)</h4>
                </div>
            </Row>
        </Container>
    )
}