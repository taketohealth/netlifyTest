import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultTitle
          siteUrl
          defaultDescription
          defaultImage
          titleTemplate
          whatsappAccount
          whatsapp
          linkedin
          youtube
          facebook
          messenger
          campaignPage
          phone
          email
        }
      }
    }
  `)
  return site.siteMetadata
}

export default useSiteMetadata
