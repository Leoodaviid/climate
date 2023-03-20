import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  display: grid;
  font-weight: 700;

  > .number {
    margin-top: 0.25rem;
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    color: #e7e6fb;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-top: 1rem;
    padding: 0.5rem 0.2rem;
  }

  .info .number {
    flex: 1;
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

interface QualitativeProps {
  color: string
}
export const Qualitative = styled.p<QualitativeProps>`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${(props) => props.color};
`

interface ComponentProps {
  color: string
}
export const P = styled.p<ComponentProps>`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${(props) => props.color};
`
