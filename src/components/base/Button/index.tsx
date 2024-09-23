import { cn } from '@utils/base'

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  GHOST = 'ghost'
}

export enum ButtonSize {
  XS = 'xs',
  MD = 'md'
}

type DEFINE_BUTTON_COLOR_TYPE = {
  [key in ButtonType]: {
    borderColor: string
    textColor: string
    backgroundColor: string
    shadowColor: string
    grainColor?: string
    lineColor?: string
  }
}

// Define button color
export const DEFINE_BUTTON_COLOR: DEFINE_BUTTON_COLOR_TYPE = {
  [ButtonType.PRIMARY]: {
    borderColor: 'border-primary',
    textColor: 'text-white',
    backgroundColor: 'bg-primary',
    shadowColor: 'shadow-primary',
    grainColor: 'grain-primary',
    lineColor: 'line-primary'
  },
  [ButtonType.SECONDARY]: {
    borderColor: 'border-secondary',
    textColor: 'text-secondary',
    backgroundColor: 'bg-secondary',
    shadowColor: 'shadow-secondary',
    grainColor: 'grain-secondary',
    lineColor: 'line-secondary'
  },
  [ButtonType.TERTIARY]: {
    borderColor: 'border-tertiary',
    textColor: 'text-tertiary',
    backgroundColor: 'bg-tertiary',
    shadowColor: 'shadow-tertiary',
    grainColor: 'grain-tertiary',
    lineColor: 'line-tertiary'
  },
  [ButtonType.GHOST]: {
    borderColor: 'border-ghost',
    textColor: 'text-ghost',
    backgroundColor: 'bg-transparent',
    shadowColor: 'shadow-ghost'
  }
}

// Define button size
export const DEFINE_BUTTON_SIZE: DEFINE_BUTTON_SIZE_TYPE = {
  [ButtonSize.XS]: {
    paddingY: 'py-1',
    paddingX: 'px-2',
    fontSize: 'text-xs',
    rounded: 'rounded-xs',
    shadowHeight: 'h-2'
  },
  [ButtonSize.MD]: {
    paddingY: 'py-2',
    paddingX: 'px-4',
    fontSize: 'text-sm',
    rounded: 'rounded-md',
    shadowHeight: 'h-3'
  }
}

type DEFINE_BUTTON_SIZE_TYPE = {
  [key in ButtonSize]: {
    paddingY: string
    paddingX: string
    fontSize: string
    rounded: string
    shadowHeight: string
  }
}

interface ButtonProps {
  className?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  style?: React.CSSProperties
  disabled?: boolean
  variant?: ButtonType
  size: ButtonSize
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  onClick = () => {},
  style = {},
  disabled = false,
  variant = ButtonType.PRIMARY,
  size = ButtonSize.MD,
  ...props
}) => {
  const DEFINE_TYPE = disabled ? DEFINE_BUTTON_COLOR[ButtonType.GHOST] : DEFINE_BUTTON_COLOR[variant]
  const DEFINE_SIZE = DEFINE_BUTTON_SIZE[size]
  const styled = {
    '--border-color': DEFINE_TYPE?.borderColor,
    '--background-color': DEFINE_TYPE?.backgroundColor,
    '--shadow-color': DEFINE_TYPE?.shadowColor,
    '--text-color': DEFINE_TYPE?.textColor,

    '--padding-y': DEFINE_SIZE?.paddingY,
    '--padding-x': DEFINE_SIZE?.paddingX,
    '--font-size': DEFINE_SIZE?.fontSize,
    '--rounded': DEFINE_SIZE?.rounded,
    '--shadow-height': DEFINE_SIZE?.shadowHeight
  } as React.CSSProperties

  return (
    <button
      className={cn(className)}
      onClick={(e) => onClick(e)}
      style={{
        backgroundColor: DEFINE_TYPE.backgroundColor,
        color: DEFINE_TYPE.textColor,
        boxShadow: `0 ${DEFINE_SIZE?.shadowHeight} ${DEFINE_TYPE?.shadowColor}`,
        ...styled,
        ...style
      }}
      {...props}
    ></button>
  )
}

export default Button
