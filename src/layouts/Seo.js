import React from 'react'
import useSiteMetadata from '@hooks/useSiteMetadata'

export const SEO = ({ title, description, image, pathname, children, languages }) => {
  const { defaultTitle, defaultDescription, defaultImage, titleTemplate, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || `${defaultTitle}${titleTemplate}`,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
  }

  const links = ()=>{
    const langs = languages || ['zh-HK','zh-CN','en']
    langs.push('')
    let linkDoms
    if(pathname){
      linkDoms =  langs.map(lang=>{
        return (
          <link key={lang} rel="alternate" href={`${siteUrl}/${lang}${pathname}`} hrefLang={lang||'x-default'} />
        )
      })
    }
    return <>{linkDoms}</>

  }
  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      {links()}

      {children}
    </>
  )
}
