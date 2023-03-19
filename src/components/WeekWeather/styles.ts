import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2.5rem;
  display: flex;
  gap: 0.75rem;

  h2 {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .day {
    flex: 1;
    display: grid;
    justify-items: center;
    gap: 1rem;
  }

  .maxmin {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.base};
  }

  .maxmin span {
    color: #c2bff4;
  }

  @media (min-width: 1190px) {
    grid-column: 2/4;
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`
