import { Fragment } from 'react/jsx-runtime'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import paths from '@constants/paths'
import colors from '@constants/colors'
import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { useAppSelector } from '@features/hook'
import { Divider, Form, Input, Typography } from 'antd'
import { GoogleOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

const { Title } = Typography

function Register() {
  const themeMode = useAppSelector((state) => state.theme.mode)
  const navigate = useNavigate()
  const { t } = useTranslation('auth', {
    keyPrefix: 'signUp'
  })

  return (
    <Fragment>
      <div className='fixed right-5 top-5 flex items-center space-x-2'>
        <Title level={5} className='text-text-active mb-0 hidden font-normal md:block'>
          {t('signInTitle')}
        </Title>
        <Button type={ButtonType.PRIMARY} variant={ButtonVariant.STANDARD} onClick={() => navigate(paths.LOGIN)}>
          {t('signInBtn')}
        </Button>
      </div>
      <div className='flex w-full items-center justify-center rounded-lg bg-white p-6 shadow-[0_2px_64px_#26214a1a]'>
        <div className='flex flex-col gap-4'>
          <Title level={4} className='text-center uppercase'>
            {t('title')}
          </Title>
          <div className='w-full'>
            <Form layout='vertical'>
              <Form.Item label={t('fullNameTitle')} className='mb-4'>
                <Input
                  placeholder={t('fullNamePlaceholder')}
                  size='large'
                  prefix={<UserOutlined className='text-[#b9bec7]' />}
                />
              </Form.Item>
              <Form.Item label={t('usernameTitle')} className='mb-4'>
                <Input
                  placeholder={t('usernamePlaceholder')}
                  size='large'
                  prefix={<MailOutlined className='text-[#b9bec7]' />}
                />
              </Form.Item>
              <Form.Item label={t('password')} className='mb-4'>
                <Input.Password
                  placeholder={t('passwordPlaceholder')}
                  size='large'
                  prefix={<LockOutlined className='text-[#b9bec7]' />}
                />
              </Form.Item>
              <Form.Item label={t('rePassword')} className='mb-4'>
                <Input.Password
                  placeholder={t('rePasswordPlaceholder')}
                  size='large'
                  prefix={<LockOutlined className='text-[#b9bec7]' />}
                />
              </Form.Item>
            </Form>
          </div>
          <Button
            type={ButtonType.PRIMARY}
            variant={ButtonVariant.STANDARD}
            className='w-full py-5 text-center text-lg'
          >
            {t('submitBtn')}
          </Button>
          <Divider className='m-0' style={{ borderColor: colors[themeMode].BORDER.BTN }}>
            {t('signUpWith')}
          </Divider>
          <Button
            type={ButtonType.PRIMARY}
            variant={ButtonVariant.GHOST}
            className='text-text-active w-full text-center'
          >
            <GoogleOutlined className='absolute left-3 mr-2 w-4 text-red-600' />
            <span className='text-sm font-medium'>{t('googleBtn')}</span>
          </Button>
        </div>
      </div>
    </Fragment>
  )
}

export default Register
