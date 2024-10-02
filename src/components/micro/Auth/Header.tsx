import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const Header = () => {
  const { t } = useTranslation('auth', {
    keyPrefix: 'signIn'
  })

  return (
    <div className='fixed flex w-full items-center justify-between px-5 py-5'>
      <img src='' alt='Logo' className='mr-5' />
    </div>
  )
}

export default Header
