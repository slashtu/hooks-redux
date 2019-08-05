import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class TextField extends PureComponent {
  render() {
    const { label, error, ...restProps } = this.props;

    return (
      <StyledTextField>
        <Label>{label}</Label>
        <Input {...restProps} />
        {error && <Error>{error}</Error>}
      </StyledTextField>
    );
  }
}

TextField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
};

TextField.defaultProps = {};

const StyledTextField = styled.div`
  display: flex;
  margin: 8px 16px;
`;

const Input = styled.input`
  border: 1px solid black;
`;

const Label = styled.label`
  width: 60px;
`;

const Error = styled.div`
  color: red;
`;

export default TextField;
