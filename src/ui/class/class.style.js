import styled from 'styled-components';

const Style = {};

Style.Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  position: absolute;
`;

Style.Block = styled.div`
  display: inline-flex;
  width: 80px;
  min-height: 40px;
  border: 2px solid #000;
  background-color: #fff;
  margin-bottom: 5px;
`;

export default Style;
