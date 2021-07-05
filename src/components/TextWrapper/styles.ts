import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  svg {
    transition: color 0.3 ease-in-out;
  }

  &:hover {
    svg {
      color: var(--higlight);
    }
  }
`
