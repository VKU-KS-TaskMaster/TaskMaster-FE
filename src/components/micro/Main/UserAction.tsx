import { Avatar, Typography } from 'antd'

import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { ExpandIcon } from '@components/common/Icon'

const { Text } = Typography

function UserAction() {
  return (
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
  )
}

export default UserAction
