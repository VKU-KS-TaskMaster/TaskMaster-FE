import { Divider, Tooltip, TooltipProps } from 'antd'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import DropdownMenu, { DEFINE_MENU_TYPE } from '@components/common/DropdownMenu'
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
import colors from '@constants/colors'
import UserAction from './UserAction'

type MENU_BUTTON_TYPE = {
  key: string
  varient: ButtonVariant
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
    varient: ButtonVariant.SQUARE,
    type: ButtonType.PRIMARY,
    icon: <OpenTaskIcon />,
    tooltip: {
      placement: 'bottom',
      title: 'taskBtnTooltip'
    }
  },
  {
    key: 'notepadBtnTooltip',
    varient: ButtonVariant.SQUARE,
    type: ButtonType.PRIMARY,
    icon: <OpenNotepadIcon />,
    tooltip: {
      placement: 'bottom',
      title: 'notepadBtnTooltip'
    }
  },
  {
    key: 'reminderBtnTooltip',
    varient: ButtonVariant.SQUARE,
    type: ButtonType.PRIMARY,
    icon: <CreateReminderIcon />,
    tooltip: {
      placement: 'bottom',
      title: 'reminderBtnTooltip'
    }
  },
  {
    key: 'appActionBtnTooltip',
    varient: ButtonVariant.SQUARE,
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
          <Button variant={ButtonVariant.GHOST} type={ButtonType.PRIMARY} icon={<CreateIcon />}>
            {t('createBtn')}
          </Button>
        </DropdownMenu>
      </div>
      <Button
        variant={ButtonVariant.GHOST}
        type={ButtonType.PRIMARY}
        icon={<SearchIcon />}
        className='col-span-6 w-full justify-start'
      >
        {t('searchBtn')}
      </Button>
      <div className='col-span-auto flex flex-row items-center justify-end gap-2'>
        <Button variant={ButtonVariant.STANDARD} type={ButtonType.PRIMARY} icon={<UpgradeIcon />}>
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
