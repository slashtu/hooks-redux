import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends PureComponent {
  render() {
    const { size, ...restProps } = this.props;

    return <StyledButton size={size} {...restProps} />;
  }
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
};
Button.defaultProps = {
  size: 'medium',
};

const StyledButton = styled.button`
  margin: ${({ size }) => (size === 'small' ? '4px 8px' : '8px 16px')};
  padding: ${({ size }) => (size === 'small' ? '5px 8px' : '10px 16px')};
  border: 1px solid black;
`;

export default Button;
