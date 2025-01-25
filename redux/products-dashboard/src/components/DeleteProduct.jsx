import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../features/productsActions'
import { toast } from 'react-toastify'

const DeleteProduct = () => {

    const products = useSelector(state => state.products)

    const [chosenProduct, setChosenProduct] = useState(null)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(chosenProduct === null) return;
        else{
            console.log(chosenProduct)
            dispatch(deleteProduct(parseInt(chosenProduct)))
            setChosenProduct(null)
        }
        toast.success('Product Deleted Successfully!', {
            theme: 'colored',
        });
    }

    return (
    <div>
        <Form onSubmit={(e) => {handleSubmit(e)}}>
            <Form.Select aria-label="Default select example" onChange={(e) => setChosenProduct(e.target.value)}>
                <option>Choose a product to delete</option>
                {products.map((product, i) => (
                    <option key={i} value={product.id}>#{product.id} - {product.name}</option>
                ))}
            </Form.Select>
            <button disabled={chosenProduct === null} type='submit' className='btn btn-danger mt-3'>Delete</button>
        </Form>
    </div>
    )
}

export default DeleteProduct
