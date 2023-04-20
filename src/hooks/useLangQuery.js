import { useI18next } from 'gatsby-plugin-react-i18next'
import { stringify } from 'query-string'

const useLangQuery = () => {
  const { language } = useI18next()

  const addLangQuery = (url) =>
    `${url || process.env.GATSBY_SITE_URL}?${stringify({
      lang: language,
    })}`
  return addLangQuery
}

export default useLangQuery
