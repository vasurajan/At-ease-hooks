import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <main>
    <PageHero title='checkout' />
    <Wrapper className='page'>
        <div className='empty'>
          <h2>your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
 
    </Wrapper>
  </main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
