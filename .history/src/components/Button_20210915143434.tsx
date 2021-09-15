import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

    type ButtonProps = ButtonPropsHTMLAttributes<HTMLButtonElement>;

    function Button(props: ButtonProps) {
    return (
      <button className="button" {...props} />
    )
}