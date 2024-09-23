import { ReactNode, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { loadTranslations } from '@utils/i18n'

function AuthContainer({ children }: { children: ReactNode }) {
  // const { i18n } = useTranslation()

  // useEffect(() => {
  //   const language = localStorage.getItem('language') || 'vi'

  //   const loadAuthTranslations = async () => {
  //     i18n.re
  //   }

  //   loadAuthTranslations()
  // }, [i18n])

  return children
}

export default AuthContainer
