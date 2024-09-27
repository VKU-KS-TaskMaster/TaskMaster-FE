import { Avatar, Dropdown, MenuProps, Typography } from 'antd'

import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import {
  ExpandIcon,
  InviteIcon,
  MuteNotificationIcon,
  SettingIcon,
  SignOutIcon,
  UserIcon
} from '@components/common/Icon'
import MenuLabelTranslItem from '@components/common/MenuLabelTranslItem'

const { Text } = Typography

const TRANSL_CONFIG = {
  ns: 'cms',
  prefix: 'layout.header.userAction'
}

const MENU_ITEMS: MenuProps['items'] = [
  {
    key: 'muteNotiItem',
    type: 'submenu',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<MuteNotificationIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='muteNotiItem'
      />
    ),
    expandIcon: '',
    children: [
      {
        key: 'muteNotiItemLev1',
        className: 'group',
        label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='muteNotiLv1' />
      },
      {
        key: 'muteNotiItemLev2',
        className: 'group',
        label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='muteNotiLv2' />
      },
      {
        key: 'muteNotiItemLev3',
        className: 'group',
        label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='muteNotiLv3' />
      },
      {
        key: 'muteNotiItemLev4',
        className: 'group',
        label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='muteNotiLv4' />
      },
      {
        key: 'muteNotiItemLev5',
        className: 'group',
        label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='muteNotiLv5' />
      }
    ]
  },
  {
    key: 'inviteItem',
    type: 'item',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<InviteIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='inviteItem'
      />
    )
  },
  {
    type: 'divider'
  },
  {
    key: 'profileItem',
    type: 'item',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<UserIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='profileItem'
      />
    )
  },
  {
    key: 'settingItem',
    type: 'item',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<SettingIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='settingItem'
      />
    )
  },
  {
    key: 'signOutItem',
    type: 'item',
    className: 'group',
    label: (
      <MenuLabelTranslItem
        icon={<SignOutIcon className='mr-2' />}
        ns={TRANSL_CONFIG.ns}
        prefix={TRANSL_CONFIG.prefix}
        i18nKey='signOutItem'
      />
    )
  }
]

function UserAction() {
  return (
    <Dropdown menu={{ items: MENU_ITEMS }} trigger={['click']}>
      <Button
        icon={<ExpandIcon className='h-3 w-3' />}
        iconPosition='end'
        variant={ButtonVariant.GHOST}
        type={ButtonType.PRIMARY}
        className='w-12 gap-1 rounded-3xl p-1'
      >
        <Avatar
          shape='circle'
          style={{
            backgroundColor: 'navajowhite'
          }}
          className='flex h-5 w-5 items-center justify-center'
        >
          <Text type='danger' className='text-xs font-semibold'>
            U
          </Text>
        </Avatar>
      </Button>
    </Dropdown>
  )
}

export default UserAction
