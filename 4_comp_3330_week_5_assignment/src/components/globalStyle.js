import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  input{
    background-Color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
  }

  .taskForm > button,.listControl > button {
    border: 1px solid ${({ theme }) => theme.border};
    background-Color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
  }

  a{
      color:  ${({ theme }) => theme.color}
  }
  `;
