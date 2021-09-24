import { ButtonHTMLAttributes } from 'react';
import * as css from './button.module.css';
/**
 * Generic button to use. Props are same a normal button html 5.
 * @example
 * import Button from 'components/ui/button/Button'
 * <Button />
 */
const Button = (
  props: ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element => <button className={css['button']} {...props} />;

export default Button;
