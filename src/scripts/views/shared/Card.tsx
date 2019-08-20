import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: JSX.Element;
}

const Card = (props: IProps) => {
  return <StyledCard>{props.children}</StyledCard>;
};

const StyledCard = styled.div`
  display: inline-block;
  background: #fff;
  padding: 36px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
`;

export default Card;
