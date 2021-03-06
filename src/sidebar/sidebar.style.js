import styled from 'styled-components';

const Style = {};

Style.Aside = styled.aside`
  width: 30%;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, .1);
  padding: 35px 25px;
  position: relative;
`;

Style.Add = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    color: #ff981e;
  }
`;

export default Style;
