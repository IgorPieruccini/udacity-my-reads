import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const flexStyled = `
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const borderStyled = `
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
`;

export const Lybrary = styled.div`
  ${flexStyled}
  flex-direction: column;
  margin-top: 50px;
`;

export const HeaderStyle = styled(Container)`
  position: fixed;
  top: 0;
  z-index: 1;
  margin: 0px;
  background-color: #343a40;
  color: white;
  box-shadow: -2px 11px 18px -9px rgba(0, 0, 0, 0.47);
  height: 50px;
`;
