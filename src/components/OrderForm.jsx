import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';

import TextField from './TextField.jsx';

import TextareaField from './TextareaField.jsx';
import Button from './Button.jsx';
class OrderForm extends Component {
  handleCancel = () => {
    this.props.close();
  };

  render() {
    const { order, onChange, close } = this.props;
    const { name = '', price = 0, notes = '' } = order;

    return (
      <StyledOrderForm>
        <Close onClick={this.handleCancel} />
        <Title>Daily Drinks</Title>
        <Formik
          initialValues={{ name, price, notes }}
          validate={values => {
            let errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }

            if (!values.price) {
              errors.price = 'Required';
            }
            return errors;
          }}
          onSubmit={values => {
            onChange({ ...values, id: order.id });
            close();
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors.name}
              />
              <TextField
                label="Price"
                name="price"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                error={errors.price}
              />
              <TextareaField
                label="Notes"
                name="notes"
                row={3}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.notes}
              />
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </StyledOrderForm>
    );
  }
}

OrderForm.propTypes = {
  order: PropTypes.object,
  close: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

OrderForm.defaultProps = {
  close: () => null,
  order: {},
};

const StyledOrderForm = styled.div`
  position: relative;
  width: 90vw;
  margin: 30px auto;
  padding: 20px 0;
  border: 1px solid black;
  background-color: white;
  text-align: center;

  @media (min-width: 400px) {
    width: 350px;
  }
`;

const Form = styled.form``;

const Title = styled.h4``;

const Close = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 32px;
  height: 32px;
  opacity: 0.8;

  cursor: pointer;

  :hover {
    opacity: 1;
  }

  ::before,
  ::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 16px;
    height: 33px;
    width: 1px;
    background-color: #333;
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(-45deg);
  }
`;

export default OrderForm;
