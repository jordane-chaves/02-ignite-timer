import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 3.5rem;

  h1 {
    color: ${(props) => props.theme.gray[100]};
    font-size: 1.5rem;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    border-collapse: collapse;

    min-width: 600px;
    width: 100%;

    th {
      background-color: ${(props) => props.theme.gray[600]};

      color: ${(props) => props.theme.gray[100]};
      font-size: 0.875rem;
      line-height: 1.6;
      text-align: left;

      padding: 1rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme.gray[700]};
      border-top: 4px solid ${(props) => props.theme.gray[800]};

      font-size: 0.875rem;
      line-height: 1.6;

      padding: 1rem;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  green: 500,
  red: 500,
  yellow: 500,
} as const

interface StatusProps {
  $statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';

    background-color: ${(props) =>
      props.theme[props.$statusColor][STATUS_COLORS[props.$statusColor]]};
    border-radius: 50%;

    height: 0.5rem;
    width: 0.5rem;
  }
`
