import React, { useContext } from 'react'
import Container from '../ui/Container'
import { useCart } from 'react-use-cart';
import { currencyContext } from '../../contexts/CurrencyContext';
import emptyBlack from '../../assets/img/empty.svg'
import emptyWhite from '../../assets/img/emptyWhite.svg'
import { Link } from 'react-router-dom';

const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart
    } = useCart();

    const [currency] = useContext(currencyContext)

  return (
    <Container>
      {isEmpty ? (
        <div className='mb-40'>
            <img src={emptyBlack} alt="empty" className='w-1/2 sm:w-1/6 lg:w-1/12 mx-auto mt-20 block dark:hidden' />
            <img src={emptyWhite} alt="empty" className='w-1/2 sm:w-1/6 lg:w-1/12 mx-auto mt-20 hidden dark:block' />        
            <h1 className='text-sale-red mx-auto w-fit mt-10 text-2xl font-bold'> Your cart is currently empty. </h1>
            <Link className='absolute left-[50%] translate-x-[-50%] mt-10' to='/'>
                <button className='bg-main-text text-white dark:bg-white dark:text-main-text px-4 py-2 rounded-md font-bold hover:scale-105 transition-all'>Return to shop</button>
            </Link>
        
        </div>
      ) : (
        <div className='my-10'>
        <h1 className='mb-5 text-xl font-bold'>Cart ({totalUniqueItems})</h1>
        <table className='w-full'>
            <tr className='mb-5 opacity-20'>
                <th></th>
                <th className='hidden md:flex'></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            {items.map((item, index) => {
                return (
                    <tr className='gap-2 md:gap-4' key={index}>
                        <td className='text-center'><button className='border-2 h-9 w-9 rounded-full dark:opacity-20 hover:opacity-100 transition-all' onClick={() => removeItem(item.id)}>&times;</button></td>
                        <td className='items-center justify-center py-3 text-lg rounded-md hidden md:flex'><img src={item.strMealThumb} alt={item.strMeal} className='h-20' /></td>
                        <td className='text-left py-3 pl-5 text-sm md:text-xl font-bold'>{item.strMeal}</td>
                        <td className='text-center py-3 text-sm md:text-xl'>{Math.round(item.price * currency.rate)} {currency.name}</td>
                        <td className='text-center py-3 text-sm md:text-xl'>
                            <div className='flex items-center justify-around p-2 border-2 dark:border-white/10 rounded-xl w-min mx-auto gap-2 md:gap-4'>
                                <button className='bg-sale-red h-4 md:h-6 w-4 md:w-6 items-center justify-center rounded-full text-white font-bold hover:scale-110 opacity-50 hover:opacity-100 transition-all hidden sm:flex' onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
                                <div>{item.quantity}</div>
                                <button className='bg-cart-green h-4 md:h-6 w-4 md:w-6 items-center justify-center rounded-full text-white font-bold hover:scale-110 opacity-50 hover:opacity-100 transition-all hidden sm:flex' onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                            </div>
                        </td>
                        <td className='text-center py-3 text-sm md:text-xl'>{Math.round(item.quantity * item.price * currency.rate)} {currency.name}</td>
                    </tr>
                )
            })}
        </table>
        <div className='flex items-center justify-center my-5'>
            <button className='mx-auto bg-sale-red px-6 py-3 text-sm font-bold rounded-md shadow-xl text-white opacity-70 hover:opacity-100 transition-all hover:scale-105' onClick={emptyCart}>Clear Cart</button>
        </div>
        <div className='mt-20 border-2 p-10 rounded-xl flex flex-col md:flex-row gap-5 justify-between items-center'>
            <h3 className='text-3xl'>Total: <span className='font-medium'>{Math.round(cartTotal * currency.rate)}</span> {currency.name} </h3>
            <button className='px-14 py-4 bg-main-text dark:bg-white text-xl text-white dark:text-main-text rounded-md font-semibold hover:scale-105 transition-all shadow-xl'>Checkout</button>
        </div>
        </div>
      )}

      
    </Container>
  )
}

export default Cart
