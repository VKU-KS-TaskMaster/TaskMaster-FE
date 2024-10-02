import { ReactNode } from 'react'
import { Trans } from 'react-i18next'

export type MenuLabelTranslItemProps = {
  icon?: ReactNode
  className?: string
  ns: string
  prefix: string
  i18nKey: string
}

function MenuLabelTranslItem({ icon, className, ns, prefix, i18nKey }: MenuLabelTranslItemProps) {
  const DEFAULT_CLASS_NAME = `group-hover:text-text-light`
  className = `${DEFAULT_CLASS_NAME} ${className?.trim()}`

  return (
    <span className={className}>
      {icon}
      <Trans ns={ns} i18nKey={`${prefix}.${i18nKey}`} />
    </span>
  )
}

export default MenuLabelTranslItem
