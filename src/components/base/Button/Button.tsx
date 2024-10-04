import { cn } from '@utils/base'
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
    'group border-light-border-btn dark:border-border-btn text-light-text-weak dark:text-text-weak bg-light-bg-btn dark:bg-bg-btn hover:bg-light-bg-btnHover dark:hover:bg-bg-btnHover hover:text-light-text-active dark:hover:text-text-active active:bg-light-bg-btnActive dark:active:bg-bg-btnActive active:border-light-border-btnHover dark:active:border-border-btnHover',
  [`${ButtonType.PRIMARY}_${ButtonVariant.GHOST}`]:
    'border-light-border-btn dark:border-border-btn text-light-text-active dark:text-text-active bg-light-bg-btn dark:bg-bg-btn hover:bg-light-bg-btnHover dark:hover:bg-bg-btnHover active:bg-light-bg-btnActive dark:active:bg-bg-btnActive active:border-light-border-btnHover dark:active:border-border-btnHover',
  [`${ButtonType.DEFAULT}_${ButtonVariant.SQUARE}`]:
    'group justify-center bg-transparent dark:bg-transparent border-transparent dark:border-transparent hover:text-light-text-active dark:hover:text-text-active text-light-text-weak dark:text-text-weak shadow-none hover:bg-light-bg-btnHover dark:hover:bg-bg-btnHover active:bg-light-bg-btnActive dark:active:bg-bg-btnActive active:border-light-border-btnHover dark:active:border-border-btnHover',
  [`${ButtonType.PRIMARY}_${ButtonVariant.SQUARE}`]:
    'justify-center bg-transparent dark:bg-transparent border-transparent dark:border-transparent shadow-none hover:bg-light-bg-btnHover dark:hover:bg-bg-btnHover active:bg-light-bg-btnActive dark:active:bg-bg-btnActive active:border-light-border-btnHover dark:active:border-border-btnHover'
}

export const DEFINE_BUTTON_ICON_CLASS_NAME: DefineButtonColorType = {
  [`${ButtonType.DEFAULT}_${ButtonVariant.GHOST}`]:
    'text-light-icon-weak dark:text-icon-weak transition-colors duration-200 group-hover:text-light-icon-active dark:group-hover:text-icon-active group-active:text-light-icon-active dark:group-active:text-icon-active',
  [`${ButtonType.PRIMARY}_${ButtonVariant.GHOST}`]: '',
  [`${ButtonType.DEFAULT}_${ButtonVariant.SQUARE}`]:
    'text-light-icon-weak dark:text-icon-weak transition-colors duration-200 group-hover:text-light-icon-active dark:group-hover:text-icon-active group-active:text-light-icon-active dark:group-active:text-icon-active',
  [`${ButtonType.PRIMARY}_${ButtonVariant.SQUARE}`]: 'text-light-icon-active dark:text-icon-active'
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
  const DEFAULT_PROPS: { [key: string]: boolean | string } = {}

  if (variant === ButtonVariant.GHOST || variant === ButtonVariant.DANGEROUS) DEFAULT_PROPS[variant] = true
  else DEFAULT_PROPS['shape'] = variant

  return (
    <BaseButton
      type={type}
      {...DEFAULT_PROPS}
      {...props}
      className={cn(DEFAULT_CLASS_NAME, className)}
      classNames={{ icon: DEFAULT_ICON_CLASS_NAME }}
    ></BaseButton>
  )
}

export default Button
