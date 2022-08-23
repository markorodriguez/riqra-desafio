import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

import styled from "styled-components";

import { BodyWrapper } from "../components/UIcomponents";
import EmpyCart from "../components/shop/EmpyCart";
import { IOrderDetail } from "../models/interfaces/IOrderDetail";

const ShopContainer = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85vw;
  min-height: 100vh;
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 90vw;
    flex-direction: column;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 65%;
  @media (max-width: 576px) {
    width: 90%;
  }
`;

const OrderContainer = styled.div`
  margin: 5rem 0;
  text-align: center;
  width: 35%;
  @media (max-width: 576px) {
    width: 90%;
  }
`;

const DeliveryInfo = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin: 0 1rem;
  }
`;

const ShopInput = styled.input`
  margin: 1rem 0;
  padding: 0 1rem;
  width: 50%;
  height: 3.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 2px #dddddd solid;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: black;
  }

  :focus {
    outline: none;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const ShopCart = styled.div`
  width: 50%;
  height: auto;
  min-height: 40rem;
  border-radius: 5px;
  background-color: white;
  border: 2px white solid;

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const OrderDetailsContainer = styled.div`
padding: 0.5rem 2.5rem;
  width: 85%;
  margin: 1.5rem auto;
  background-color: white;
`;

const OrderDetails = styled.div<IOrderDetail>`
margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${props=> props.highlighted ? "yellow" : "transparent"};
`;

const ShopButton = styled.button`
 border: 2px solid #FF8800;
 background-color: #FF8000;
 width: 85%;
 border-radius: 4px;
 padding: 1rem 0;
 color: white;
 font-size: 1.1rem;
 letter-spacing: 1px;
 text-transform: uppercase;
 transition: .2s ease-in-out all;
 cursor: pointer;
 :hover{
  background-color: white;
  color: #FF8000;
 }
`

const TotalAmount = styled.span`
  color: red;
`

const Home: NextPage = () => {
  const [product, setProduct] = useState("");

  return (
    <BodyWrapper>
      <ShopContainer>
        <CartContainer>
          <ShopInput
            value={product}
            onChange={(e) => {
              setProduct(e.target.value);
            }}
            placeholder="Search products ..."
          />
          {product.length > 0 ? <ShopCart /> : <EmpyCart />}
        </CartContainer>

        <OrderContainer>
          <DeliveryInfo>
            <Image
              src="/images/car.png"
              width={30}
              height={10}
              alt="image_thankyou"
            />
            <p>
              Buy now and get it by <strong>05/24/19</strong>{" "}
            </p>
          </DeliveryInfo>

          <OrderDetailsContainer>
            <OrderDetails  highlighted={false}>
              <p>Products</p>
              <span>765</span>
            </OrderDetails>
            <OrderDetails highlighted>
              <p>Shipping Cost</p>
              <span>765</span>
            </OrderDetails>
            <OrderDetails highlighted={false}>
              <p>Taxes</p>
              <span>765</span>
            </OrderDetails>
            <OrderDetails highlighted={false}>
              <p>Total</p>
              <TotalAmount>765</TotalAmount>
            </OrderDetails>
          </OrderDetailsContainer>

            <ShopButton>Complete Order</ShopButton>

        </OrderContainer>
      </ShopContainer>
    </BodyWrapper>
  );
};

export default Home;
