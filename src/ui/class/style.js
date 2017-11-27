import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  position: absolute;
`;

export const Block = styled.div`
  display: inline-flex;
  width: 80px;
  height: 40px;
  border: 2px solid #000;
  background-color: #fff;
  margin-bottom: 5px;
`;
