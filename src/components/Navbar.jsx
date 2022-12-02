import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navegador() {
    return (
        <>
            <Navbar bg="primary" variant="primary">
                <Container className="justify-content-space-between">
                    <div>
                        <Link to="/" className="text-white ms-3 text-decoration-none">
                             Home
                        </Link>
                        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        📞 Contáctanos
                        </Link>
                    </div>
                    <Navbar.Brand className="text-white">🎂 Pasteleria Amada</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}