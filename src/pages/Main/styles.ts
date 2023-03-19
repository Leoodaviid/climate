import styled from 'styled-components'
import Bg from '../../assets/images/bg.jpg'

export const Container = styled.main`
  background: url(${Bg}) no-repeat center/cover;
  min-height: 100vh;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 1.5rem;

  form {
    margin: 0 auto;
    display: flex;
    gap: 0.25rem;
    width: 100%;
    padding: 2.5rem 2rem;

    label {
      position: absolute;
      top: 15px;
      margin-top: 1rem;
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.colors.purple};
    }

    input {
      font: 400 ${({ theme }) => theme.fontSize.base} / 1.5
        ${({ theme }) => theme.fontFamily.heading};
      background: ${({ theme }) => theme.colors.purple};
      border: transparent;
      border-radius: 0.25rem;
      width: 100%;
      height: 2rem;
      color: #e7e6fb;
      padding-left: 0.25rem;

      &::placeholder {
        color: #e7e6fb;
      }

      :focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.purple};
        background: ${({ theme }) => theme.colors.purple};
        box-shadow: 0 0 0 2px #e7e6fb;
      }
    }

    button {
      display: inline-block;
      padding: 0.25rem 1rem;
      border-radius: 0.25rem;
      border: none;
      cursor: pointer;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      color: ${({ theme }) => theme.colors.purple};
      background-color: #e7e6fb;
      max-width: max-content;
    }
  }

  @media (min-width: 1190px) {
    grid-template-columns: 30rem 17.31rem 17.31rem;
    grid-template-rows: auto 15.25rem 13.25rem;
    padding: 1rem 5rem;

    form {
      grid-column: 1/-1;

      label {
        top: 150px;
      }
    }
  }
`
