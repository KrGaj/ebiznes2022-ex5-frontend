import {Container, Nav, Navbar} from "react-bootstrap";
import React, {useContext} from "react";
import {ShopContext} from "../context/ShopContext";

export function NavbarComponent() {
    const { user } = useContext(ShopContext)

    return (
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Nav className='w-100'>
                <Container>
                    <Navbar.Brand href={"/"}>Sklep</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {!user.loggedIn ? <Nav.Link href={"login"}>Zaloguj się</Nav.Link> : null}
                            <Nav.Link href={"products"}>Produkty</Nav.Link>
                            {user.loggedIn ? <Nav.Link href={"cart"}>Koszyk</Nav.Link> : null}
                            {user.loggedIn ? <Nav.Link href={"payments"}>Płatności</Nav.Link> : null}
                            {user.loggedIn ? <Navbar.Text>{user.username}</Navbar.Text> : null}
                            {user.loggedIn ? <Nav.Link href={"logout"}>Wyloguj</Nav.Link> : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Nav>
        </Navbar>
    )
}