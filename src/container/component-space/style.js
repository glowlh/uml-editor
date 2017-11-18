import styled from 'styled-components';

export const Aside = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, .1);
  padding: 35px 25px;
  position: relative;
`;

export const Add = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    color: #ff981e;
  }
`;
