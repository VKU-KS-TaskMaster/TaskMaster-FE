import { FileOutlined, PlusOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
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
const MENU_WORKSPACE: MenuProps['items'] = [
  { key: '1', label: <TopWorkspaceLabel /> },
  { type: 'divider' },
  { key: '2', label: 'Profile', extra: '⌘P' },
  { key: '3', label: 'Billing', extra: '⌘B' },
  { key: '4', label: 'Settings', icon: <SettingOutlined />, extra: '⌘S' }
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
    <div className='bg-bg-navigationSidebar flex h-full w-56 flex-col overflow-hidden text-text-weak'>
      <div className='border-border-bottom gap-4 border-b p-2'>
        <Dropdown
          menu={{ items: MENU_WORKSPACE }}
          trigger={['click']}
          overlayClassName='w-64'
          className='overflow-hidden'
        >
          <Button variant={ButtonVariant.SQUARE} type={'primary'} onClick={(e) => e.preventDefault()} className='p-1'>
            <Avatar shape='square' size={24} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <span className='overflow-hidden truncate text-sm font-medium leading-snug'>Work Space</span>
            <ExpandIcon className='text-[10px]' />
          </Button>
        </Dropdown>
      </div>
      <Menu className='bg-transparent p-2' defaultSelectedKeys={['1']} items={TOP_ITEMS} />
      <Divider type='horizontal' variant='solid' className='bg-border-bottom my-2' />
      <div className='flex flex-1 flex-col gap-2 overflow-hidden py-[6px] pl-[10px] pr-6'>
        <div className='text-text-active flex items-center justify-between font-bold'>
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
                      icon={<CloseIcon className='text-[12px] text-text-weak' />}
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
          className='hover:text-text-active justify-start p-0 text-text-weak'
          variant={ButtonVariant.SQUARE}
          type={ButtonType.PRIMARY}
          icon={<ProjectBoardIcon />}
          size='small'
        >
          <span className='text-sm'>{t('projectListBtn')}</span>
        </Button>
        <Button
          className='hover:text-text-active justify-start p-0 text-text-weak'
          variant={ButtonVariant.SQUARE}
          type={ButtonType.PRIMARY}
          icon={<PlusOutlined />}
          size='small'
        >
          <span className='text-sm'>{t('projectCreateBtn')}</span>
        </Button>
      </div>

      <div className='border-border-bottom flex items-center justify-between border-t px-2 py-2'>
        <Button icon={<AssignMemberIcon />}>{t('inviteBtn')}</Button>
        <div className='bg-border-bottom h-[22px] w-px' />
        <Button icon={<HelpIcon />}>{t('helpBtn')}</Button>
      </div>
    </div>
  )
}

export default Sidebar
