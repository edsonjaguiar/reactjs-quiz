import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    width: 100%;
    height: 34px;
    color: #fff;
    text-transform: uppercase;
    background: #03a9f4;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    outline: none;
    transition: 0.3s;

    &:hover{
        background: #0276aa;
    }

    &:disabled{
        background: #979797;
        cursor: not-allowed;
    }

`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
