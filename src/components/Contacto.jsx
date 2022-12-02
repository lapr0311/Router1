import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Navigation() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><strong>Correo</strong></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><strong>Teléfono</strong></Form.Label>
                <Form.Control placeholder="+569" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><strong>Pregunta</strong></Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="d-flex justify-content-center">
                <Button variant="primary">Enviar</Button>{' '}
            </div>
        </Form>
    )
}