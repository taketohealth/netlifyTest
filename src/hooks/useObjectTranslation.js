import { useI18next } from 'gatsby-plugin-react-i18next'
import { omit } from 'lodash-es'
const { languagePrefixes } = require('../../languages')

const useObjectTranslation = () => {
  const { language } = useI18next()
  const tB = (key, obj) => {
    const finalKey = `${key}${languagePrefixes[language]}`
    const finalValue = obj[finalKey]
    if (finalValue) return finalValue

    let defaultValue = key
    const restLanguages = Object.keys(omit(languagePrefixes, language))

    for (let index = 0; index < restLanguages.length; index++) {
      const lang = restLanguages[index]
      const curKey = `${key}${languagePrefixes[lang]}`
      const value = obj[curKey]
      if (value) defaultValue = value
      break
    }

    return defaultValue
  }

  return { tB }
}

export default useObjectTranslation
