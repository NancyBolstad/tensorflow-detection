import * as React from 'react';
import styled from 'styled-components';

interface Props {
  fontsize?: number;
  color?: string;
  label: string;
  onPress: (event: React.MouseEvent) => void;
}

const Button = ({label, onPress, fontsize = 12, color = '#67c5ff'}: Props) => {
  return (
    <StyledButton fontsize={fontsize} color={color} onClick={onPress}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{fontsize: number; color: string}>`
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  font-size: ${props => `${props.fontsize}px`}
  color: ${props => props.color};
  border: solid 2px ${props => props.color};
  border-radius: 3px;
  transition: .4s;
  &:hover {
    background: ${props => props.color};
    color: white;
  }
`;

export default Button;
