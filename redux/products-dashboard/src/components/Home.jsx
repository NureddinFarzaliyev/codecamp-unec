import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Home = () => {
  const products = useSelector(state => state.products)
  console.log(products)
  return (
    <Container>
        <h1 className='my-5'>🛒 Products Store</h1>
        {products.length > 0 ? (
            <Row md={3} lg={5} xs={1} className="g-4">
            {products.map((product, i) => (
                <Col key={i}>
                    <Card className='h-100'>
                        <Card.Img variant="top" src={product.img_url} style={{height: "50%", objectFit: "cover"}} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-center'>${product.price}</Card.Footer>
                    </Card>
                </Col>
            ))}
            </Row>  
        ) : (
            <h3 className='mt-5 text-center'>❌ No products found</h3>
        )}
        
    </Container>
  )
}

export default Home
