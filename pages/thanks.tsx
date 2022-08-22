import Link from "next/link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { BodyWrapper, ImageContainer } from "../components/UIcomponents";

const ThanksContainer = styled.div`
  width: 80vw;
  height: 100vh;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333333;

  h1 {
    margin: 2rem 0;
    font-size: 2.4rem;
    font-weight: 500;
  }

  p {
    font-size: 1.2rem;
  }

  a {
    color: blue;
    margin: 2.2rem 0px;
    font-size: 1rem;
  }
`;

export default function Thanks() {
  return (
    <BodyWrapper>
        
      <ThanksContainer>
        <h1>Thank you</h1>
        <p>
          Your order <strong>P0001</strong> has been registered
        </p>
        <Link href="/">
          <a> Continue shopping</a>
        </Link>

        <ImageContainer>
          <Image
            src="/images/success.png"
            width={300}
            height={300}
            alt="image_thankyou"
          ></Image>
        </ImageContainer>
      </ThanksContainer>
    </BodyWrapper>
  );
}
