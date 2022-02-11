// react basics
import React from "react";
import { useEffect } from "react";

// react components
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

// redux
import { useSelector, useDispatch } from 'react-redux'

// slices
import { increment, decrement, reset } from "../../features/counterSlice";
import { setTitle } from "../../features/navbarSlice";

function DevPanel(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTitle("Development tools for developing"));
    })

    const count = useSelector((state) => state.counter.value)

    return (
        <Container>
            <Form>
                <Form.Control type="text" placeholder="Enter Competition name" onChange={props.onChange} />
            </Form>
            <hr />
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <p>{count}</p>
                <ButtonGroup>
                    <Button variant="success" onClick={() => dispatch(increment())}>+</Button>
                    <Button variant="danger" onClick={() => dispatch(decrement())}> -</Button>
                </ButtonGroup>
                <Button variant="secondary" onClick={() => dispatch(reset())}>Rest</Button>
            </div>
        </Container >
    );
}

export default DevPanel;