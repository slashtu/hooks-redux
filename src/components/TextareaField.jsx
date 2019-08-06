import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class TextareaField extends PureComponent {
  render() {
    const { label, error, ...restProps } = this.props;

    return (
      <StyledTextareaField>
        {label && <Label>{label}</Label>}
        <Textarea {...restProps} />
        {error && <Error>{error}</Error>}
      </StyledTextareaField>
    );
  }
}

TextareaField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
};

TextareaField.defaultProps = {};

const StyledTextareaField = styled.div`
  display: flex;
  margin: 8px 16px;
`;

const Textarea = styled.textarea`
  border: 1px solid black;
`;

const Label = styled.label`
  width: 60px;
`;

const Error = styled.div`
  color: red;
`;

export default TextareaField;
