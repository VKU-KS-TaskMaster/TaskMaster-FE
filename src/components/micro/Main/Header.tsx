import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Divider, Dropdown, Tooltip, TooltipProps, MenuProps, Menu, Space } from 'antd'
import { t } from 'i18next'

import Button, { ButtonType, ButtonVarient } from '@components/base/Button'
import {
  CreateIcon,
  CreateReminderIcon,
  InviteIcon,
  OpenNotepadIcon,
  OpenQuickActionIcon,
  OpenTaskIcon,
  ProjectOverviewIcon,
  SearchIcon,
  SpaceIcon,
  TaskIcon,
  TeamIcon,
  UpgradeIcon
} from '@components/common/Icon'
import UserAction from './UserAction'
import colors from '@constants/colors'
import MenuDivider from 'antd/es/menu/MenuDivider'
import DropdownMenu, { DEFINE_MENU_TYPE } from '@components/common/DropdownMenu'

type MENU_BUTTON_TYPE = {
  key: string
  varient: ButtonVarient
  type: ButtonType
  icon: ReactNode
  tooltip: TooltipProps
}

const MENU_CREATE: DEFINE_MENU_TYPE[] = [
  {
    SPACE: {
      key: 'spaceItem',
      icon: <SpaceIcon />,
      title: 'createAction.spaceItem',
      onClick: () => {}
    },
    PROJECT: {
      key: 'projectItem',
      icon: <ProjectOverviewIcon />,
      title: 'createAction.projectItem',
      onClick: () => {}
    },
    TASK: {
      key: 'taskItem',
      icon: <TaskIcon />,
      title: 'createAction.taskItem',
      onClick: () => {}
    },
    TEAM: {
      key: 'teamItem',
      icon: <TeamIcon />,
      title: 'createAction.teamItem',
      onClick: () => {}
    }
  },
  {
    INVITE: {
      key: 'inviteItem',
      icon: <InviteIcon />,
      title: 'createAction.inviteItem',
      onClick: () => {}
    }
  }
]

const MENU_BUTTON: MENU_BUTTON_TYPE[] = [
  {
    key: 'taskBtnTooltip',
    varient: ButtonVarient.SQUARE,
    type: ButtonType.PRIMARY,
    icon: <OpenTaskIcon />,
    tooltip: {
      placement: 'bottom',
      title: 'taskBtnTooltip'
    }
  },
  {
    key: 'notepadBtnTooltip',
    varient: ButtonVarient.SQUARE,
    type: ButtonType.PRIMARY,
    icon: <OpenNotepadIcon />,
    tooltip: {
      placement: 'bottom',
      title: 'notepadBtnTooltip'
    }
  },
  {
    key: 'reminderBtnTooltip',
    varient: ButtonVarient.SQUARE,
    type: ButtonType.PRIMARY,
    icon: <CreateReminderIcon />,
    tooltip: {
      placement: 'bottom',
      title: 'reminderBtnTooltip'
    }
  },
  {
    key: 'appActionBtnTooltip',
    varient: ButtonVarient.SQUARE,
    type: ButtonType.PRIMARY,
    icon: <OpenQuickActionIcon />,
    tooltip: {
      placement: 'bottom',
      title: 'appActionBtnTooltip'
    }
  }
]

function Header() {
  const { t } = useTranslation(['cms'], {
    keyPrefix: 'layout.header'
  })

  return (
    <div className='grid-col-12 mx-auto grid grid-flow-col gap-8 border-b-[1px] border-borderBottom bg-navigation-headerBg px-5 py-2'>
      <div className='col-span-4 flex flex-row'>
        <DropdownMenu menus={MENU_CREATE} t={t}>
          <Button variant={ButtonVarient.GHOST} type={ButtonType.PRIMARY} icon={<CreateIcon />}>
            {t('createBtn')}
          </Button>
        </DropdownMenu>
      </div>
      <Button
        variant={ButtonVarient.GHOST}
        type={ButtonType.PRIMARY}
        icon={<SearchIcon />}
        className='col-span-6 w-full justify-start'
      >
        {t('searchBtn')}
      </Button>
      <div className='col-span-auto flex flex-row items-center justify-end gap-2'>
        <Button variant={ButtonVarient.STANDARD} type={ButtonType.PRIMARY} icon={<UpgradeIcon />}>
          {t('upgradeBtn')}
        </Button>
        <Divider variant='solid' type='vertical' className='m-0 h-6' style={{ borderColor: colors.DIVIDER_BG }} />
        {MENU_BUTTON.map((d) => (
          <Tooltip key={d.key} placement={d.tooltip.placement} title={t(`${d.tooltip.title}`)}>
            <Button variant={d.varient} type={d.type} icon={d.icon} />
          </Tooltip>
        ))}
        <UserAction />
      </div>
    </div>
  )
}

export default Header
