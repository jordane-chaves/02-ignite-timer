import styled from 'styled-components'

export const CountdownContainer = styled.div`
  color: ${(props) => props.theme.gray[100]};
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme.gray[700]};
    border-radius: 8px;
    padding: 2rem 1rem;
  }
`

export const Separator = styled.div`
  color: ${(props) => props.theme.green[500]};

  display: flex;
  justify-content: center;

  overflow: hidden;

  padding: 2rem 0;
  width: 4rem;
`
