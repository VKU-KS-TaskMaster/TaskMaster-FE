import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '@features/hook'
import { setCreateModal } from '@features/slices/base'
import { Divider, Dropdown, MenuProps, Tooltip, TooltipProps } from 'antd'

import colors from '@constants/colors'
import UserAction from './UserAction'
import CreateModal from '@components/common/CreateModal'
import MenuLabelTranslItem from '@components/common/MenuLabelTranslItem'
import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { cn } from '@utils/base'
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
import { TAB_KEYS } from '@components/common/CreateModal'

export const HEADER_HEIGHT = '52px'

type MENU_BUTTON_TYPE = {
  key: string
  varient: ButtonVariant
  type: ButtonType
  icon: ReactNode
  tooltip: TooltipProps
}

const TRANSL_CONFIG = {
  ns: 'cms',
  prefix: 'layout.header'
}

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

const CREATE_ITEM_KEYS = {
  SPACE: 'spaceItem',
  PROJECT: 'projectItem',
  TASK: 'taskItem',
  TEAM: 'teamItem',
  INVITE: 'inviteItem'
}

const MENU_CREATE_ITEMS: MenuProps['items'] = [
  {
    key: CREATE_ITEM_KEYS.SPACE,
    type: 'item',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<SpaceIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='createAction.spaceItem'
      />
    ),
    onClick: () => {}
  },
  {
    key: CREATE_ITEM_KEYS.PROJECT,
    type: 'item',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<ProjectOverviewIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='createAction.projectItem'
      />
    ),
    onClick: () => {}
  },
  {
    key: CREATE_ITEM_KEYS.TASK,
    type: 'item',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<TaskIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='createAction.taskItem'
      />
    ),
    onClick: () => {}
  },
  {
    key: CREATE_ITEM_KEYS.TEAM,
    type: 'item',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<TeamIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='createAction.teamItem'
      />
    ),
    onClick: () => {}
  },
  {
    key: CREATE_ITEM_KEYS.INVITE,
    type: 'item',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<InviteIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='createAction.inviteItem'
      />
    ),
    onClick: () => {}
  }
]

function Header() {
  const dispatch = useAppDispatch()
  const { t } = useTranslation(['cms'], {
    keyPrefix: 'layout.header'
  })

  const handleShowCreateModal = (key: string) => {
    if ([CREATE_ITEM_KEYS.PROJECT, CREATE_ITEM_KEYS.TASK].includes(key))
      dispatch(setCreateModal({ key: TAB_KEYS.PROJECT_TASK, show: true }))
  }

  return (
    <div
      className={cn(
        'grid-col-12 mx-auto grid grid-flow-col gap-8 border-b-[1px] border-borderBottom bg-navigation-headerBg px-5 py-2',
        'h-[var(--header-height)]'
      )}
    >
      <div className='col-span-4 flex flex-row'>
        <Dropdown
          menu={{
            items: MENU_CREATE_ITEMS,
            onClick: (info) => handleShowCreateModal(info.key)
          }}
          trigger={['click']}
        >
          <Button variant={ButtonVariant.GHOST} type={ButtonType.PRIMARY} icon={<CreateIcon />}>
            {t('createBtn')}
          </Button>
        </Dropdown>
        <CreateModal />
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
        <Divider variant='solid' type='vertical' className='m-0 h-6' style={{ borderColor: colors.BG.DIVIDER }} />
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
