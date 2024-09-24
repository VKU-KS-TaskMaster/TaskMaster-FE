import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ChainedBackend from 'i18next-chained-backend'
import HttpBackend from 'i18next-http-backend'
import resourcesToBackend from 'i18next-resources-to-backend'

import enCms from '@constants/translations/en/cms.json'
import viCms from '@constants/translations/vi/cms.json'

//Client
// i18n.use(initReactI18next).init({
//   fallbackLng: 'vi',
//   lng: 'vi',
//   preload: ['vi', 'en'],
//   ns: ['cms'],
//   resources: {
//     en: {
//       cms: enCms
//     },
//     vi: {
//       cms: viCms
//     }
//   },
//   interpolation: {
//     escapeValue: false
//   }
// })

const loadTranslations = async (lng: string, ns: string) => {
  const translations = await import(`@constants/translations/${lng}/${ns}.json`)
  return translations.default
}

//Backend
i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    lng: 'vi',
    preload: ['vi', 'en'],
    ns: ['cms'],
    interpolation: {
      escapeValue: false
    },
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend((lng: string, ns: string) => import(`@constants/translations/${lng}/${ns}.json`))
      ],
      backendOptions: [
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
      ]
    }
  })

export default i18n
export { loadTranslations }
