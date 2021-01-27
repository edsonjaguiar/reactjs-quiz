import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
    position: relative;
    top: -22px;
    background: none;
    border: 1px solid #0288d1;
    border-radius: 4px;
    width: 100%;
    height: 38px;
    color: ${({ theme }) => theme.colors.contrastText};
    padding-left: 16px;
    outline: none;
    transition: all .2s;

    &:focus{
      border: 1px solid #37789b;
    }

`;

export default function InputName({ onChange, placeholder, ...props }) {
  return (
    <div>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

InputName.defaultProps = {
  value: '',
};

InputName.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
