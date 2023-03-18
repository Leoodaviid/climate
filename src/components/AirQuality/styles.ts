import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  display: grid;
  font-weight: 700;
  .qualitative {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.teal};
  }
  > .number {
    margin-top: 0.25rem;
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    color: #e7e6fb;
  }

  .info {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    padding: 1rem 1rem;
  }

  .info .number {
    flex: 1;
  }

  .info p {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.teal};
  }
  .info small {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 400;
    color: #e7e6fb;
  }
`
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: #dad8f7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`
