import { Fragment, ReactNode } from 'react'
import { TFunction } from 'i18next'
import { Dropdown, Menu, DropDownProps, MenuProps, MenuItemProps } from 'antd'

export type DEFINE_MENU_ITEM_TYPE = {
  key: string
  icon?: ReactNode
  title: string
  onClick?: (data: DEFINE_MENU_ITEM_TYPE) => void
}

export type DEFINE_MENU_TYPE = {
  [key: string]: DEFINE_MENU_ITEM_TYPE
}

export interface DropdownMenuProps {
  menus: DEFINE_MENU_TYPE[]
  t: TFunction<string>
  dropdownProps?: DropDownProps
  menuProps?: MenuProps
  menuItemProps?: MenuItemProps
  children: ReactNode
}

function DropdownMenu({ menus, t, children, dropdownProps, menuProps, menuItemProps }: DropdownMenuProps) {
  const renderMenuItems = (menu: DEFINE_MENU_TYPE) => {
    return Object.values(menu).map((item) => (
      <Menu.Item
        key={item.key}
        icon={item.icon}
        title={t(item.title)}
        className='mx-1 rounded-md text-textWeak hover:bg-bg-active hover:text-text'
        onClick={() => item.onClick?.(item)}
        {...menuItemProps}
      >
        {t(item.title)}
      </Menu.Item>
    ))
  }

  return (
    <Dropdown
      placement='topRight'
      dropdownRender={() => (
        <Menu className='bg-bg-weak px-0'>
          {menus.map((m, index) => {
            const isLast = index === menus.length - 1

            return (
              <Fragment key={index}>
                {renderMenuItems(m)}
                {!isLast && <Menu.Divider className='bg-bg-divider my-1 h-[1px]' />}
              </Fragment>
            )
          })}
        </Menu>
      )}
      {...dropdownProps}
    >
      {children}
    </Dropdown>
  )
}

export default DropdownMenu
