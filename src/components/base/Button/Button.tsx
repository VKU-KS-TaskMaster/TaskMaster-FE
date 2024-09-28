import type { ButtonProps } from 'antd'
import { Button as BaseButton } from 'antd'

export enum ButtonType {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  DASHED = 'dashed',
  LINK = 'link',
  TEXT = 'text'
}

export enum ButtonVariant {
  GHOST = 'ghost',
  SQUARE = 'square',
  CIRCLE = 'circle',
  STANDARD = 'standard',
  DANGEROUS = 'dangerous'
}

type ButtonCombination = `${ButtonType}_${ButtonVariant}`

type DefineButtonColorType = Partial<Record<ButtonCombination, string>>

export const DEFINE_BUTTON_CLASS_NAME: DefineButtonColorType = {
  [`${ButtonType.DEFAULT}_${ButtonVariant.GHOST}`]:
    'group border-btn-border text-textWeak hover:bg-btn-bgHover hover:text-text active:bg-btn-bgActive active:border-btn-borderHover',
  [`${ButtonType.PRIMARY}_${ButtonVariant.GHOST}`]:
    'border-btn-border text-text hover:bg-btn-bgHover active:bg-btn-bgActive active:border-btn-borderHover',
  [`${ButtonType.DEFAULT}_${ButtonVariant.SQUARE}`]:
    'group justify-center bg-transparent border-transparent hover:text-text text-textWeak shadow-none hover:bg-btn-bgHover active:bg-btn-bgActive active:border-btn-borderHover',
  [`${ButtonType.PRIMARY}_${ButtonVariant.SQUARE}`]:
    'justify-center bg-transparent border-transparent shadow-none hover:bg-btn-bgHover active:bg-btn-bgActive active:border-btn-borderHover'
}

export const DEFINE_BUTTON_ICON_CLASS_NAME: DefineButtonColorType = {
  [`${ButtonType.DEFAULT}_${ButtonVariant.GHOST}`]:
    'text-icon transition-colors duration-200 group-hover:text-iconActive group-active:text-iconActive',
  [`${ButtonType.PRIMARY}_${ButtonVariant.GHOST}`]: '',
  [`${ButtonType.DEFAULT}_${ButtonVariant.SQUARE}`]:
    'text-icon transition-colors duration-200 group-hover:text-iconActive group-active:text-iconActive',
  [`${ButtonType.PRIMARY}_${ButtonVariant.SQUARE}`]: 'text-iconActive'
}

interface ButtonCustomProps extends Omit<ButtonProps, 'variant'> {
  variant?: ButtonVariant
}

const Button: React.FC<ButtonCustomProps> = ({
  type = ButtonType.PRIMARY,
  variant = ButtonVariant.GHOST,
  className,
  ...props
}) => {
  const key: `${ButtonType}_${ButtonVariant}` = `${type}_${variant}`
  const DEFAULT_CLASS_NAME = DEFINE_BUTTON_CLASS_NAME[key]
  const DEFAULT_ICON_CLASS_NAME = DEFINE_BUTTON_ICON_CLASS_NAME[key] || ''
  const COMBINED_CLASS_NAME = `${DEFAULT_CLASS_NAME} ${className || ''}`.trim()
  const DEFAULT_PROPS: { [key: string]: boolean | string } = {}

  if (variant === ButtonVariant.GHOST || variant === ButtonVariant.DANGEROUS) DEFAULT_PROPS[variant] = true
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
