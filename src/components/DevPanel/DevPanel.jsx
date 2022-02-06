// react basics
import React from "react";
import { useEffect } from "react";

// react components
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

function DevPanel(props) {

    useEffect(() => {
        props.navbarHandler("Development tools for developing");
    }, [null]);

    return (
        <Container>
            <Form>
                <Form.Control type="text" placeholder="Enter Competition name" onChange={props.onChange} />
            </Form>
        </Container>
    );
}

export default DevPanel;