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
    'group border-btn-border text-textWeak hover:bg-btn-bgHover hover:text-text active:bg-btn-bgActive active:border-btn-borderHover',
  [`${ButtonType.PRIMARY}_${ButtonVarient.GHOST}`]:
    'border-btn-border text-text hover:bg-btn-bgHover active:bg-btn-bgActive active:border-btn-borderHover',
  [`${ButtonType.DEFAULT}_${ButtonVarient.SQUARE}`]:
    'group justify-center bg-transparent border-transparent shadow-none hover:bg-btn-bgHover active:bg-btn-bgActive active:border-btn-borderHover',
  [`${ButtonType.PRIMARY}_${ButtonVarient.SQUARE}`]:
    'justify-center bg-transparent border-transparent shadow-none hover:bg-btn-bgHover active:bg-btn-bgActive active:border-btn-borderHover'
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
  const DEFAULT_PROPS: { [key: string]: boolean | string } = {}

  if (variant === ButtonVarient.GHOST || variant === ButtonVarient.DANGEROUS) DEFAULT_PROPS[variant] = true
  else DEFAULT_PROPS['shape'] = variant

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
