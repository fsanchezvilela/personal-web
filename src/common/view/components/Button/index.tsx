import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { ButtonStyleTwClassMapping } from "./constant";
import { ButtonPropsType } from "./types";

const Button: FC<ButtonPropsType & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ children, buttonStyle = 'primary', href = '', ...props }) => {

  const RenderButton = () => {
    const DisableButton = <button disabled className={ButtonStyleTwClassMapping['disabled']}>
      {children}
    </button>

    if (props.disabled === true) { return DisableButton }

    return <button {...props} className={ButtonStyleTwClassMapping[buttonStyle]}>{children}</button>
  }

  const RenderAnchor = () => <a className={ButtonStyleTwClassMapping[buttonStyle]} href={href}>{children}</a>

  return (
    href ?
      RenderAnchor() :
      RenderButton()
    )
}


Button.displayName = 'Button';
export default Button
