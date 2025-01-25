import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { editProduct } from '../features/productsActions'
import { toast } from 'react-toastify'

const EditProduct = () => {
  const products = useSelector(state => state.products)

  const [chosenProduct, setChosenProduct] = useState(null)

  const initialProduct = {
    name: "",
    price: "",
    description: "",
    img_url: ""
  }

  const [newProduct, setNewProduct] = useState(initialProduct)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
        id: chosenProduct.id,
        name: newProduct.name || chosenProduct.name,
        price: newProduct.price || chosenProduct.price,
        description: newProduct.description || chosenProduct.description,
        img_url: newProduct.img_url || chosenProduct.img_url
    }

    dispatch(editProduct(updatedProduct))

    toast.success('Product Edited Successfully!', {
        theme: 'colored',
    });

    setNewProduct(initialProduct)
  }

  return (
    <div>
        <Form.Select aria-label="Default select example" onChange={(e) => setChosenProduct(products.find(product => product.id === parseInt(e.target.value)))}>
            <option>Choose a product to edit</option>
            {products.map((product, i) => (
                <option key={i} value={product.id}>#{product.id} - {product.name}</option>
            ))}
        </Form.Select>
        {chosenProduct && (
            <Form className='my-3' onSubmit={(e) => {handleSubmit(e)}}>
                <Row>
                    <p className='mb-3'><b>Editing {chosenProduct.name}</b></p>
                    <Col md={6} xs={12}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder={chosenProduct.name} value={newProduct.name}
                            onChange={(e) => {setNewProduct({...newProduct, name: e.target.value})}} />
                        </Form.Group>
                    </Col>
                    <Col md={6} xs={12}>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" placeholder={chosenProduct.price} value={newProduct.price}
                            onChange={(e) => {setNewProduct({...newProduct, price: e.target.value})}} />
                        </Form.Group>
                    </Col>
                    <Col md={6} xs={12}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder={chosenProduct.description} value={newProduct.description}
                            onChange={(e) => {setNewProduct({...newProduct, description: e.target.value})}} />
                        </Form.Group>
                    </Col>
                    <Col md={6} xs={12}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder={chosenProduct.img_url} value={newProduct.img_url}
                            onChange={(e) => {setNewProduct({...newProduct, img_url: e.target.value})}} />
                        </Form.Group>
                    </Col>
                </Row>
                <button className='btn btn-primary'>✅ Save Changes</button>
            </Form>
        )}
    </div>
  )
}

export default EditProduct
