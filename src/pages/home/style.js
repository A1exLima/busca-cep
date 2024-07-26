import { styled } from 'styled-components'
import city from '../../images/background.png'

export const ContainerHome = styled.div`
  background-image: url(${city});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: ${(props) =>
    Object.keys(props.$data).length > 0 ? 'auto' : '100vh'};
`

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 2.5rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.article`
  max-width: 114rem;
  margin: 0 auto;
`

export const CepBox = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background: rgba(15, 61, 57, 0.8);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 7px 15px;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  .container-title {
    max-width: 76rem;

    > h2 {
      max-width: 56rem;
      color: ${({ theme }) => theme.fontAndLogoGreen};
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    }
  }

  .search-cep {
    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      > input {
        width: 100%;
        border-radius: 1rem;
        padding: 2rem;
        background-color: ${({ theme }) => theme.inputAndFormWhite};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 7px 15px;
        color: ${({ theme }) => theme.green};
        font-size: 2.1rem;
        font-weight: 600;

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: ${({ theme }) => theme.green};
          opacity: 75%;
        }
      }

      > input[type='number']::-webkit-inner-spin-button,
      input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      > button {
        border: none;
        background: none;
        cursor: pointer;

        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }

        > svg {
          display: flex;
          font-size: 4rem;
          color: ${({ theme }) => theme.inputAndFormWhite};
        }
      }
    }
  }

  .container-data-cep {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    border-radius: 1rem;
    padding: 2rem;
    background: ${({ theme }) => theme.inputAndFormWhite};

    .data-display-screen {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${({ theme }) => theme.green};
      border-bottom: 1px solid ${({ theme }) => theme.border};
      padding: 0.8rem 0;

      > p:first-child {
        font-size: 1.8rem;
        font-weight: 600;
      }

      > p:last-child {
        margin-top: 0.1rem;
        width: 100%;
        font-size: 1.6rem;
        font-weight: 500;
      }
    }

    .noData-display-screen {
      height: 35rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      animation: fadeIn 1.5s forwards;

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      > svg {
        margin-top: -3rem;
        font-size: 10rem;
        color: ${({ theme }) => theme.green};
      }

      > span {
        margin-left: 0.5rem;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.green};
      }
    }
  }
`
