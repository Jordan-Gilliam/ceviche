import React from 'react';

import styled, { keyframes, createGlobalStyle } from 'styled-components';

/* eslint-disable-next-line */
export interface InputProps {
  placeholder: string
}

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap');
    body {
      font-family: 'Montserrat', sans-serif;
      background: linear-gradient(130deg, #2193B0, #68D0E9);
      height: 100vh;
      width: 100vw;
    }
  `;

  const FadeIn = keyframes`
    from {
      opacity: 0
    }

    to {
      opacity: 100
    }
  `;

  const StyledInput = styled.input`
    // placeholder width to be assigned through props in actual production
    width: 30vw;

    padding: 18px 25px;
    margin: 8px 0;

    background: rgba(0, 0, 0, 0);
    color: white;
    font-size: 20px;

    border-style: solid;
    border-width: 3px;
    border-color: rgba(255, 255, 255, 0.33);
    border-radius: 5px;

    outline: none;

    transition: border-color 0.5s;
    animation: ${FadeIn} 0.5s linear;

    &::placeholder {
      color: rgba(255, 255, 255, 0.33);
      transition: color 0.5s;
      font-weight: 400;
    }

    &:hover {
      border-color: rgba(255, 255, 255, 0.66);
      transition: border-color 0.5s;

      &::placeholder {
        color: rgba(255, 255, 255, 0.66);
        transition: color 0.5s;
      }
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.99);
      transition: border-color 0.5s;
      filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.5));

      &::placeholder {
        color: rgba(255, 255, 255, 0);
        transition: color 0.5s;
      }
    }
  `;

  const StyledInputContainer = styled.div``;

export const Input = (props: InputProps) => {

  return (
    <StyledInputContainer>
      <GlobalStyles />
      <StyledInput placeholder={props.placeholder} />
    </StyledInputContainer>
  );
};

export default Input;
