import { Button as BaseButton } from 'antd'
import type { ButtonProps } from 'antd/lib/button'

export enum ButtonType {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  DASHED = 'dashed',
  LINK = 'link',
  TEXT = 'text'
}

export enum ButtonVarient {
  GHOST = 'ghost',
  SQUARE = 'square',
  CIRCLE = 'circle',
  STANDARD = 'standard',
  DANGEROUS = 'dangerous'
}

type ButtonCombination = `${ButtonType}_${ButtonVarient}`

type DEFINE_BUTTON_COLOR_TYPE = {
  [key in ButtonCombination]?: string
}

export const DEFINE_BUTTON_CLASS_NAME: DEFINE_BUTTON_COLOR_TYPE = {
  [`${ButtonType.DEFAULT}_${ButtonVarient.GHOST}`]:
    'group text-textWeak border-btn-border hover:text-text hover:bg-btn-bgHover active:border-btn-borderHover active:bg-btn-bgActive',
  [`${ButtonType.PRIMARY}_${ButtonVarient.GHOST}`]:
    'text-text border-btn-border hover:bg-btn-bgHover active:border-btn-borderHover active:bg-btn-bgActive',
  [`${ButtonType.DEFAULT}_${ButtonVarient.SQUARE}`]:
    'group border-transparent bg-transparent hover:bg-btn-bgHover active:border-btn-borderHover active:bg-btn-bgActive',
  [`${ButtonType.PRIMARY}_${ButtonVarient.SQUARE}`]:
    'border-transparent bg-transparent hover:bg-btn-bgHover active:border-btn-borderHover active:bg-btn-bgActive'
}

export const DEFINE_BUTTON_ICON_CLASS_NAME: DEFINE_BUTTON_COLOR_TYPE = {
  [`${ButtonType.DEFAULT}_${ButtonVarient.GHOST}`]:
    'text-icon transition-colors duration-200 group-hover:text-iconActive group-active:text-iconActive',
  [`${ButtonType.PRIMARY}_${ButtonVarient.GHOST}`]: '',
  [`${ButtonType.DEFAULT}_${ButtonVarient.SQUARE}`]:
    'text-icon transition-colors duration-200 group-hover:text-iconActive group-active:text-iconActive',
  [`${ButtonType.PRIMARY}_${ButtonVarient.SQUARE}`]: 'text-iconActive'
}

interface ButtonCustomProps extends ButtonProps {
  variant: ButtonVarient
}

const Button: React.FC<ButtonCustomProps> = ({
  type = ButtonType.PRIMARY,
  variant = ButtonVarient.GHOST,
  ...props
}) => {
  const key: `${ButtonType}_${ButtonVarient}` = `${type}_${variant}`
  const DEFAULT_CLASS_NAME = DEFINE_BUTTON_CLASS_NAME[key]
  const DEFAULT_ICON_CLASS_NAME = DEFINE_BUTTON_ICON_CLASS_NAME[key] || ''
  const COMBINED_CLASS_NAME = `${DEFAULT_CLASS_NAME} ${props.className || ''}`.trim()
  const DEFAULT_PROPS = {
    [variant]: true
  }

  return (
    <BaseButton
      type={type}
      {...DEFAULT_PROPS}
      {...props}
      className={COMBINED_CLASS_NAME}
      classNames={{ icon: DEFAULT_ICON_CLASS_NAME }}
    ></BaseButton>
  )
}

export default Button
