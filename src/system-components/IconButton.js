/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../components/theme';
import { pSBC } from '../utils/color';

const Button = ({
  children,
  className,
  id,
  onClick,
  link,
  color,
  variant = '',
  size,
  circle,
  customStyles,
  disabled,
}) => (
  <span>
    {link ? (
      <a className="no-styling" href={link}>
        <StyledButton
          className={className}
          id={id}
          color={color}
          circle={circle}
          size={size}
          variant={variant}
          onClick={onClick || null}
          link
          customStyles={customStyles}
          disabled={disabled}
        >
          {children}
        </StyledButton>
      </a>
    ) : (
      <StyledButton
        className={className}
        id={id}
        color={color}
        circle={circle}
        size={size}
        variant={variant}
        onClick={onClick || null}
        customStyles={customStyles}
        disabled={disabled}
      >
        {children}
      </StyledButton>
    )}
  </span>
);

const StyledButton = styled.button`
  box-shadow: ${(props) =>
    props.variant === 'secondary' ? props.theme.shadow.two : 'none'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  // font-weight: 500;
  letter-spacing: 1.1px;
  padding: 0;
  height: ${(props) =>
    props.size === 'small' ? '36px' : props.size === 'large' ? '53px' : '46px'};
    width: ${(props) =>
      props.size === 'small'
        ? '36px'
        : props.size === 'large'
        ? '53px'
        : '46px'};
  font-size: ${(props) =>
    props.size === 'small' ? '14px' : props.size === 'large' ? '18px' : '16px'};
  border-radius: ${(props) =>
    props.circle ? '999px' : props.theme.radius.one};
  cursor: pointer;
  transition: all 0.25s;
  :active {
    box-shadow: none !important;
  }

        background: ${(props) =>
          props.color === 'primary'
            ? props.theme.color.primary
            : props.color === 'secondary'
            ? props.theme.color.secondary
            : props.color === 'success'
            ? props.theme.color.success
            : props.color === 'error'
            ? props.theme.color.error
            : props.color === 'white'
            ? 'white'
            : props.theme.color.gray.two};      
    color: ${(props) =>
      props.color === 'white'
        ? ''
        : props.color === 'primary' ||
          props.color === 'secondary' ||
          props.color === 'success' ||
          props.color === 'error'
        ? 'white'
        : null};
      border: 1px solid transparent;
      :hover {
        background: ${(props) =>
          pSBC(
            `${
              props.color === 'primary'
                ? props.theme.color.primary
                : props.color === 'secondary'
                ? props.theme.color.secondary
                : props.color === 'success'
                ? props.theme.color.success
                : props.color === 'error'
                ? props.theme.color.error
                : props.color === 'white'
                ? 'white'
                : props.theme.color.gray.two
            }`,
            -25,
          )};
        // color: ${(props) => (props.color === 'white' ? 'initial' : 'white')};
      }


  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
      color: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'white'
        ? 'white'
        : ''};
      border: 1px solid
        ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.theme.color.gray.two};
      :hover {
        background: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.theme.color.gray.two};
        color: ${props.color === 'white'
          ? 'initial'
          : props.color
          ? 'white'
          : ''};
      }
    `};

  ${(props) =>
    props.variant === 'plain' &&
    css`
      background: transparent;
      color: ${
        props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : ''
      };
      border: 1px solid transparent;
      :hover {
        background: ${
          props.color === 'primary'
            ? props.theme.color.primary
            : props.color === 'secondary'
            ? props.theme.color.secondary
            : props.color === 'success'
            ? props.theme.color.success
            : props.color === 'error'
            ? props.theme.color.error
            : props.color === 'white'
            ? props.theme.color.gray.two
            : '#666666'
        }15;
        // color: ${props.color === 'white' ? 'initial' : 'white'};
      }
    `};
  ${(props) => props.customStyles};
  ${(props) =>
    props.disabled &&
    css`
      background: transparent;
      color: #888;
      :hover {
        background: transparent;
        cursor: default;
      }
    `};
`;

Button.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
