import { styled } from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.green};
  padding: 2.5rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 7px 15px;
`

export const Content = styled.div`
  max-width: 114rem;
  margin: 0 auto;

  > div {
    width: fit-content;
    display: flex;
    gap: 1rem;
    align-items: center;

    > svg {
      font-size: 4rem;
      color: ${({ theme }) => theme.fontAndLogoGreen};
    }

    > p {
      margin-top: 1rem;
      font-family: 'Lalezar', system-ui;
      font-size: 4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.fontAndLogoGreen};
      line-height: 3rem;
    }
  }
`
