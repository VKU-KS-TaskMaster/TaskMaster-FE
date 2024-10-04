import { DownOutlined, FileOutlined, PlusOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import {
  AssignMemberIcon,
  CloseIcon,
  DashboardIcon,
  ExpandIcon,
  HelpIcon,
  HomeIcon,
  InboxIcon,
  MoreActionIcon,
  ProjectBoardIcon,
  SearchIcon
} from '@components/common/Icon'
import MenuLabelTranslItem from '@components/common/MenuLabelTranslItem'
import ProjectList from '@components/micro/Sidebar/ProjectList'
import TopWorkspaceLabel from '@components/micro/Sidebar/TopWorkSpaceLabel'
import colors from '@constants/colors'
import { useAppSelector } from '@features/hook'
import type { MenuProps } from 'antd'
import { Avatar, ConfigProvider, Divider, Dropdown, Input, Menu } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const TRANSL_CONFIG = {
  ns: 'cms',
  prefix: 'layout.sidebar'
}

// Constants
const MENU_ITEMS_CLASS_NAME =
  'hover:bg-light-bg-btnHover dark:hover:bg-bg-btnHover active:bg-light-bg-btnActive dark:active:bg-bg-btnActive'

const MENU_WORKSPACE: MenuProps['items'] = [
  { key: '1', label: <TopWorkspaceLabel />, className: MENU_ITEMS_CLASS_NAME },
  { type: 'divider' },
  { key: '2', label: 'Profile', className: MENU_ITEMS_CLASS_NAME, extra: '⌘P' },
  { key: '3', label: 'Billing', className: MENU_ITEMS_CLASS_NAME, extra: '⌘B' },
  { key: '4', label: 'Settings', className: MENU_ITEMS_CLASS_NAME, icon: <SettingOutlined />, extra: '⌘S' }
]

const TOP_ITEMS: MenuProps['items'] = [
  {
    key: '1',
    icon: <HomeIcon />,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='homeBtn' />
  },
  {
    key: '2',
    icon: <InboxIcon />,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='inboxBtn' />
  },
  {
    key: '3',
    icon: <FileOutlined />,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='docsBtn' />
  },
  {
    key: '4',
    icon: <DashboardIcon />,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='dashboardBtn' />
  },
  {
    key: '5',
    icon: <MoreActionIcon />,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='moreBtn' />
  }
]

const PROJECT_DATA = ['Project 1', 'Project 2', 'Project 3', 'Project 4']
// Main Component
const Sidebar: React.FC = () => {
  const themeMode = useAppSelector((state) => state.theme.mode)
  const [isSearch, setIsSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { t } = useTranslation(['cms'], { keyPrefix: 'layout.sidebar' })

  return (
    <div className='flex h-full w-56 flex-col overflow-hidden bg-light-bg-navigationSidebar text-light-text-weak dark:bg-bg-navigationSidebar dark:text-text-weak'>
      <div className='gap-4 border-b border-light-border-bottom p-2 dark:border-border-bottom'>
        <Dropdown
          menu={{ items: MENU_WORKSPACE }}
          trigger={['click']}
          overlayClassName='w-64'
          className='overflow-hidden'
        >
          <Button
            variant={ButtonVariant.SQUARE}
            type={'primary'}
            onClick={(e) => e.preventDefault()}
            className='p-1 text-light-text-active dark:text-text-active'
          >
            <Avatar shape='square' size={24} className='flex bg-[#215256]' icon={<UserOutlined />} />
            <span className='overflow-hidden truncate text-sm font-medium leading-snug'>Work Space</span>
            <DownOutlined size={10} />
          </Button>
        </Dropdown>
      </div>
      <Menu className='bg-transparent p-2' defaultSelectedKeys={['1']} items={TOP_ITEMS} />
      <Divider type='horizontal' variant='solid' className='my-2 bg-light-border-bottom dark:bg-border-bottom' />
      <div className='flex flex-1 flex-col gap-2 overflow-hidden py-[6px] pl-[10px] pr-6'>
        <div className='flex items-center justify-between font-bold text-light-text-active dark:text-text-active'>
          {isSearch ? (
            <>
              <Button
                variant={ButtonVariant.SQUARE}
                type={ButtonType.PRIMARY}
                onClick={() => setIsSearch(false)}
                icon={<SearchIcon />}
                size='small'
              />
              <ConfigProvider
                theme={{
                  token: {
                    lineWidth: 0,
                    colorText: colors[themeMode].TEXT.ACTIVE,
                    colorTextPlaceholder: colors[themeMode].TEXT.WEAK
                  }
                }}
              >
                <Input
                  className='bg-transparent focus:border-none'
                  placeholder='Search...'
                  autoFocus
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onBlur={() => searchValue === '' && setIsSearch(false)}
                  suffix={
                    <Button
                      icon={<CloseIcon className='text-[12px] text-light-text-weak dark:text-text-weak' />}
                      size='small'
                      onClick={() => setSearchValue('')}
                    />
                  }
                />
              </ConfigProvider>
            </>
          ) : (
            <>
              <span className='select-none text-sm'>{t('projectListTitle')}</span>
              <Button
                variant={ButtonVariant.SQUARE}
                type={ButtonType.PRIMARY}
                onClick={() => setIsSearch(true)}
                icon={<SearchIcon />}
                size='small'
              />
            </>
          )}
        </div>
        <ProjectList data={PROJECT_DATA} />

        <Button
          className='group justify-start px-1'
          variant={ButtonVariant.SQUARE}
          type={ButtonType.PRIMARY}
          // icon={<ProjectBoardIcon />}
          size='small'
        >
          <ProjectBoardIcon className='mr-1 text-light-icon-weak group-hover:text-light-icon-active dark:text-light-icon-weak dark:group-hover:text-icon-active' />
          <span className='text-sm text-light-text-weak group-hover:text-light-text-active dark:text-text-weak dark:group-hover:text-text-active'>
            {t('projectListBtn')}
          </span>
        </Button>
        <Button
          className='group justify-start px-1'
          variant={ButtonVariant.SQUARE}
          type={ButtonType.PRIMARY}
          size='small'
        >
          <PlusOutlined className='mr-1 text-light-icon-weak group-hover:text-light-icon-active dark:text-light-icon-weak dark:group-hover:text-icon-active' />
          <span className='text-sm text-light-text-weak group-hover:text-light-text-active dark:text-text-weak dark:group-hover:text-text-active'>
            {t('projectCreateBtn')}
          </span>
        </Button>
      </div>

      <div className='flex items-center justify-between border-t border-light-border-bottom px-2 py-2 dark:border-border-bottom'>
        <Button icon={<AssignMemberIcon />}>{t('inviteBtn')}</Button>
        <Divider
          type='vertical'
          variant='solid'
          className='my-2 h-[22px] bg-light-border-bottom dark:bg-border-bottom'
        />
        <Button icon={<HelpIcon />}>{t('helpBtn')}</Button>
      </div>
    </div>
  )
}

export default Sidebar
