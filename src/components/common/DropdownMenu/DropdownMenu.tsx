import { Fragment, ReactNode } from 'react'
import { TFunction } from 'i18next'
import { Dropdown, Menu, DropDownProps, MenuProps, MenuItemProps } from 'antd'

export type DEFINE_MENU_ITEM_TYPE = {
  key: string
  icon?: ReactNode
  title: string
  children?: DEFINE_MENU_TYPE[]
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
  const renderDropdown = (menus: DEFINE_MENU_TYPE[], children: ReactNode) => {
    return (
      <Dropdown
        placement='bottomLeft'
        dropdownRender={() => (
          <Menu className='bg-bg-weak px-0' {...menuProps}>
            {menus.map((m, index) => {
              const isLast = index === menus.length - 1

              return (
                <Fragment key={index}>
                  {renderMenuItems(m)}
                  {!isLast && <Menu.Divider className='my-1 h-[1px] bg-bg-divider' />}
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

  const renderMenuItems = (menu: DEFINE_MENU_TYPE) => {
    return Object.values(menu).map((item) => {
      const MenuItem = (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          title={t(item.title)}
          className='hover:text-text-active mx-1 rounded-md text-text-weak hover:bg-bg-active'
          onClick={() => item.onClick?.(item)}
          {...menuItemProps}
        >
          {t(item.title)}
        </Menu.Item>
      )

      if (item.children) return renderDropdown(item.children, MenuItem)

      return MenuItem
    })
  }

  return renderDropdown(menus, children)
}

export default DropdownMenu
