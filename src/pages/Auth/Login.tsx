import { Fragment } from 'react/jsx-runtime'
import { useNavigate } from 'react-router-dom'
import { getIdToken, signInWithPopup } from 'firebase/auth'
import { Typography, Divider, Form, Input } from 'antd'

import paths from '@constants/paths'
import colors from '@constants/colors'
import AuthAPI from '@apis/auth.api'
import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { useTranslation } from 'react-i18next'
import { auth, provider } from '@configs/firebase.config'
import { GoogleOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { useAppSelector } from '@features/hook'

const { Title } = Typography

function Login() {
  const navigate = useNavigate()
  const themeMode = useAppSelector((state) => state.theme.mode)
  const { t } = useTranslation('auth', {
    keyPrefix: 'signIn'
  })

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const idToken = await getIdToken(result.user)
      localStorage.setItem('token', idToken)
      const res = await AuthAPI.loginWithGoogle(idToken)
      console.log('🚀 ~ loginWithGoogle ~ res:', res)
    } catch (error) {
      console.log('🚀 ~ loginWithGoogle ~ error:', error)
    }
  }

  const logout = async () => {
    await auth.signOut()
    localStorage.removeItem('token')
  }

  return (
    <Fragment>
      <div className='fixed right-5 top-5 flex items-center space-x-2'>
        <Title level={5} className='text-text-active mb-0 hidden font-normal md:block'>
          {t('signUpTitle')}
        </Title>
        <Button type={ButtonType.PRIMARY} variant={ButtonVariant.STANDARD} onClick={() => navigate(paths.REGISTER)}>
          {t('signUpBtn')}
        </Button>
      </div>
      <div className='flex w-full max-w-[440px] items-center justify-center rounded-lg bg-white p-6 shadow-[0_2px_64px_#26214a1a]'>
        <div className='h-[412px] w-[360px]'>
          <Title level={3} className='mb-8 text-center uppercase'>
            {t('title')}
          </Title>
          <Button
            type={ButtonType.PRIMARY}
            variant={ButtonVariant.GHOST}
            className='text-text-active w-full text-center'
          >
            <GoogleOutlined className='absolute left-3 mr-2 w-4 text-red-600' />
            <span className='text-sm font-medium'>{t('googleBtn')}</span>
          </Button>
          <Divider className='my-4' style={{ borderColor: colors[themeMode].BORDER.BTN }}>
            {t('signInWith')}
          </Divider>

          <div className='h-[214px] w-full'>
            <Form layout='vertical'>
              <Form.Item label={<span className='text-text-active'>{t('usernameTitle')}</span>} className='mb-4'>
                <Input
                  placeholder={t('usernamePlaceholder')}
                  size='large'
                  prefix={<MailOutlined className='text-text-weak' />}
                />
              </Form.Item>
              <Form.Item
                label={<span className='text-text-active'>{t('password')}</span>}
                className='mb-4 text-text-weak'
              >
                <Input.Password
                  placeholder={t('passwordPlaceholder')}
                  size='large'
                  prefix={<LockOutlined className='text-text-weak' />}
                />
              </Form.Item>
            </Form>

            <Button type='link' className='mb-4 text-left' size='small'>
              {t('forgotPasswordBtn')}
            </Button>
          </div>
          <Button
            type={ButtonType.PRIMARY}
            variant={ButtonVariant.STANDARD}
            className='w-full py-5 text-center text-lg'
          >
            {t('submitBtn')}
          </Button>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
