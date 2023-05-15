import React from 'react'
import { wrapRootElement, wrapPageElement } from './wrapElement'

import { languages } from './languages'

const siteUrl = "https://take2health.net"


languages.push('')
const headComponents = languages.map((locale) => {
    const hrefString = `${siteUrl}/${locale}`
    const hreflangString = locale === '' ? 'x-default' : locale
  return(
    <link rel="alternate" href={hrefString} hrefLang={hreflangString} />
  )
})

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};

export { wrapRootElement, wrapPageElement, onRenderBody }
