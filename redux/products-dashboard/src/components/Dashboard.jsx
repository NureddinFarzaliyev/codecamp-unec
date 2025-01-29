import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import DeleteProduct from './DeleteProduct'

const Dashboard = () => {
  const products = useSelector(state => state.products)

  return (
    <Container>
        <h1 className='my-5'>📦 Dashboard</h1>

        <div className='border rounded p-3  mx-auto text-center bg-success'>
        There {products.length > 1 ? "are" : "is"} total {products.length} products in the store.
        </div>

        <Accordion className="mt-5">
            <Accordion.Item eventKey="0">
                <Accordion.Header>➕ Add New Product</Accordion.Header>
                <Accordion.Body>
                    <AddProduct />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>📝 Edit Product</Accordion.Header>
                <Accordion.Body>
                    <EditProduct />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>🗑️ Delete Product</Accordion.Header>
                <Accordion.Body>
                    <DeleteProduct />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
  )
}

export default Dashboard
