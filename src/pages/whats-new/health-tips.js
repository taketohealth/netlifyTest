import React from 'react'
import PostList from '@components/WhatsNew/PostList'
import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

const HealthTips = ({ data }) => {
  const { t } = useI18next()
  return (
    <PostList
      // title={t('whats_new.health_tips.title')}
      title={t('menu.health_tips')}
      caption={t('whats_new.health_tips.detail')}
      nodes={data.allMdx.nodes}
    ></PostList>
  )
}

export default HealthTips

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["translation"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMdx(
      limit: 1000
      filter: {
        fields: { slug: { regex: "/health-tips/" } }
        frontmatter: { languages: { eq: $language }, hide: { ne: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date
          type
          href
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2)
            }
          }
          # pdf {
          #   publicURL
          # }
        }
      }
    }
  }
`
