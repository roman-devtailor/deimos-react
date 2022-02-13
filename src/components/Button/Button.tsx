import { FC } from 'react';
import cn from 'classnames';

import { ButtonProps } from './Button.props';

export const Button: FC<ButtonProps> = ({
  size = 'medium',
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(className, 'btn', {
        'btn--sm': size === 'small',
        'btn--lg': size === 'large',
        'btn--info': variant === 'info',
        'btn--warrning': variant === 'warrning',
        'btn--success': variant === 'success',
        'btn--secondary': variant === 'secondary',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
