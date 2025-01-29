import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(e.target[0].value === '' || e.target[1].value === ''){
            toast.error('Please fill in all the fields.', {
                theme: 'colored',
            });
            return
        }

        if(e.target[0].value === 'admin@admin.com' && e.target[1].value === 'admin'){
            toast.success('Login Successful!', {
                theme: 'colored',
            });
            navigate('/dashboard')
            return
        }

        toast.error('Invalid Credentials.', {
            theme: 'colored',
        });
    }

  return (
    <Container>

        <Row>
            <h1 className='my-5'>🔑 Please login</h1>
            <Col sm={12} lg={4}></Col>
            <Col sm={12} lg={4}>
            
            <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>

        </Col>
        </Row>

    </Container>
  )
}

export default Login
