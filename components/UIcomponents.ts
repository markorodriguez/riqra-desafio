import styled from "styled-components";

export const BodyWrapper = styled.div`

display: flex;
justify-items: center;
align-items: center;
height: 100vh;
background-color: #E5E5E5;
overflow-y: auto;

@media (max-width: 576px) {
    height: auto;
    min-height: 100vh;
  }

`


export const ImageContainer = styled.div`
margin: 2.5rem 0;
`