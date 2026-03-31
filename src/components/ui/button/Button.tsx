import { ButtonHTMLAttributes } from 'react';
import style from './button.module.css';
/**
 * Generic button to use. Props are same a normal button html 5.
 * @example
 * import Button from 'components/ui/button/Button'
 * <Button />
 */
const Button = (
  props: ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element => <button className={style.button} type='button' {...props} />;

export default Button;
