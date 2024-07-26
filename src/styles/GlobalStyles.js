import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;

    @media (max-width: 768px) {
    font-size: 52.5%;  
  }
  }

  body {
  background-color: ${(props) => props.theme.lightGreen};
  color: ${(props) => props.theme.inputAndFormWhite};
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;

}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;

    @media (max-width: 768px) {
      width: 4px;
      height: 4px;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.green};
    border-radius: 5px;
  }

`
