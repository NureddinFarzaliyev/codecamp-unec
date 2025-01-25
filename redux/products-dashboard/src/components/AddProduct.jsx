import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addProduct } from '../features/productsActions'

const AddProduct = () => {

    const dispatch = useDispatch()

    const initialProduct = {
        name: '',
        description: '',
        price: '',
        img_url: ''
    }

    const [newProduct, setNewProduct] = useState(initialProduct)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(Object.values(newProduct).some((value) => value === '')) {
            toast.error('Please Fill All Fields.', {
                theme: 'colored',
            });
        }else{
            dispatch(addProduct(newProduct))
            toast.success('Product Added Successfully!', {
                theme: 'colored',
            });
            setNewProduct(initialProduct)
        }
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Row>
            <Col md={6} xs={12}>
                <Form.Group className="mb-3" aria-required>
                    <Form.Control type="text" placeholder="Name" value={newProduct.name}
                    onChange={(e) => {setNewProduct({...newProduct, name: e.target.value})}} />
                </Form.Group>
            </Col>

            <Col md={6} xs={12}>
                <Form.Group className="mb-3" aria-required>
                    <Form.Control type="text" placeholder="Description" value={newProduct.description}
                    onChange={(e) => {setNewProduct({...newProduct, description: e.target.value})}} />
                </Form.Group>
            </Col>

            <Col md={6} xs={12}>
                <Form.Group className="mb-3" aria-required>
                    <Form.Control type="number" placeholder="Price"  value={newProduct.price}
                    onChange={(e) => {setNewProduct({...newProduct, price: e.target.value})}}/>
                </Form.Group>
            </Col>

            <Col md={6} xs={12}>
                <Form.Group className="mb-3" aria-required>
                    <Form.Control type="text" placeholder="Image URL" value={newProduct.img_url}
                    onChange={(e) => {setNewProduct({...newProduct, img_url: e.target.value})}} />
                </Form.Group>
            </Col>
        </Row>

        <Button variant="primary" type="submit">
            ✅ Add New Product
        </Button>
  </Form>
  )
}

export default AddProduct
