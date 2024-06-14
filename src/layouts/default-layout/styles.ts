import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.gray[800]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  height: calc(100dvh - 10rem);
  max-width: 74rem;
  margin: 5rem auto;
  padding: 2.5rem;

  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
