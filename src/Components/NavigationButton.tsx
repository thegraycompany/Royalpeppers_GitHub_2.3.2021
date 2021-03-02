import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  block?: true; // Your some custom prop
}

export const Button: React.FunctionComponent<IProps> = ({ block, children, ...shared }) => {
  return <button {...shared}>{children}</button>;
}

Button.defaultProps = {
  type: 'button',
}

export default Button;