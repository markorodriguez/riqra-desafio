/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const EmptyCardContainer = styled.div`
    
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
text-align:center;

width: 50%;
height: 70rem;
border-radius: 5px;
background-color: white;
border: 2px white solid;

@media (max-width: 576px) {
  width: 90%;
}

h1{
    font-size: 1.8rem;
}

p{
    margin: 1rem 0;
    font-size: 1.4rem;
}

`;

const EmptyContainer = styled.div`
width: 35%;
`


export default function EmpyCart() {

  return(
    <EmptyCardContainer>
        <EmptyContainer>   
        <Image src="/images/icon.png" height={40} width={40} alt="empty_cart" />
        <h1>Your cart is empty</h1>
        <p>Seems like you haven't chosen what to buy...</p>
        </EmptyContainer>
        
    </EmptyCardContainer>
  )
}
