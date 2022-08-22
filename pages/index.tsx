import { useState } from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'

import { BodyWrapper } from '../components/UIcomponents'
import EmpyCart from '../components/shop/EmpyCart'



const ShopContainer = styled.div`

  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85vw ;
  height: 100vh;
  margin: 0 auto;


  @media (max-width:576px){
    width: 90vw;
    flex-direction:column;
  }

`

const CartContainer = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 height: 100%;
 width: 65%;
 @media (max-width:576px){
    width: 90%;
  }
`

const OrderContainer = ""

const ShopInput = styled.input`
  margin: 1rem 0;
  padding: 0 1rem;
  width: 50%;
  height: 3.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 2px #DDDDDD solid;

  ::placeholder, ::-webkit-input-placeholder{
    color: black;
  }

  :focus{
    outline: none;
  }

  @media (max-width:576px){
    width: 90%;
  }
`

const ShopCart = styled.div`
  width: 50%;
  height:auto;
  min-height:40rem;
  border-radius: 5px;
  background-color: white;
  border: 2px white solid;
  
  @media (max-width:576px){
    width: 90%;
  }

`

const Home: NextPage = () => {

  const [product, setProduct] = useState("")

  return (
    <BodyWrapper>
      <ShopContainer>
        <CartContainer>
          <ShopInput value={product} onChange={(e)=>{
            setProduct(e.target.value)
          }} placeholder='Search products ...'/>
          {product.length > 0 ? <ShopCart/> : <EmpyCart /> }
        </CartContainer>
      
      <p>uwu</p>
      </ShopContainer>
    </BodyWrapper>
  )
}

export default Home
