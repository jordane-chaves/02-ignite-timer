import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      color: ${(props) => props.theme.gray[100]};

      display: flex;
      align-items: center;
      justify-content: center;

      height: 3rem;
      width: 3rem;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.green[500]};
      }

      &.active {
        color: ${(props) => props.theme.green[500]};
      }
    }
  }
`
