import useAuth from "../hooks/useAuth";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { removeCookie } from "typescript-cookie";

export const LogoutPage = () => {
    const { logOut } = useAuth()
    const style = {color: 'white'}

    useEffect(() => {
        removeCookie("user_info")
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