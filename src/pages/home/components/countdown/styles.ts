import styled from 'styled-components'

export const CountdownContainer = styled.div`
  color: ${(props) => props.theme.gray[100]};
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(4rem, 17vw, 10rem);
  line-height: 0.8;

  display: flex;
  gap: clamp(0.5rem, 2vw, 1rem);

  span {
    background-color: ${(props) => props.theme.gray[700]};
    border-radius: 8px;
    padding: clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem);
  }

  @media (min-width: 768px) {
    font-size: 10rem;
    line-height: 8rem;

    gap: 1rem;

    span {
      border-radius: 8px;
      padding: 2rem 1rem;
    }
  }
`

export const Separator = styled.div`
  color: ${(props) => props.theme.green[500]};

  display: flex;
  justify-content: center;

  overflow: hidden;

  padding: 1rem 0;
  width: clamp(2rem, 8vw, 4rem);

  @media (min-width: 768px) {
    padding: 2rem 0;
    width: 4rem;
  }
`
