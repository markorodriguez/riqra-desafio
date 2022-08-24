import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Product = styled.div`
width: 100%;
padding: 0 1.5rem;
display: flex;
justify-content: space-between;
text-align:center;
border-bottom: 2px solid whitesmoke;

`

const ItemList = styled.div`
width: 75%;
display: flex;
align-items: center;
justify-content: space-around;
padding: 2rem 0;

`
const BtnProductContainer= styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
`
const BtnItemProduct = styled.button`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 100%;
  border: none;
  box-shadow: 0 1px 1px 1px  rgba(0, 0, 0, .3);
  font-size: 1.2rem;
  background-color: #FF8000;
  color: white;
  transition: .1s ease-in-out all;
  :hover{
    cursor: pointer;
    transform: scale(1.1)
  }
`

const ProductDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span{
    font-weight: 600;
    color: red;
  }
`

const BtnProduct = () => {
  return(
    <BtnItemProduct>+</BtnItemProduct>
  )
}

export default function ProductItem() {

  return (
    <Product>
      <ItemList>
        <Image src="/images/laive.png" width={40} height={60} alt="product_image" />
        <ProductDetails>
          <p>Yogurt Laive</p>
          <span>$ 23.00</span>
        </ProductDetails>
      </ItemList>
      <BtnProductContainer>
        <BtnProduct/>
      </BtnProductContainer>

    </Product>
  )
}
