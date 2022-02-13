import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warrning';
  disabled?: boolean;
}
