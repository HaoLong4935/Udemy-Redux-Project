import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createUserRedux } from '../action/actions'

function AddUserForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const isCreating = useSelector(state => state.user.isCreating)
    const dispatch = useDispatch()


    const handleCreateUser = () => {
        dispatch(createUserRedux(email, password, username))
        setEmail("");
        setPassword("");
        setUsername("");
    }
    return (
        <Container>
            <br></br>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={() => { handleCreateUser() }} disabled={isCreating}>Create User</Button>
            </Form>
            <hr></hr>
        </Container>
    )
}

export default AddUserForm