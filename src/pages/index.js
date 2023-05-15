import React from 'react'
import Homepage from '@components/Homepage'
import { graphql } from 'gatsby'

const Index = ({ data }) => {
  const { heroBannerNodes, promotionNodes, healthTipsNodes } = data

  return (
    <Homepage
      heroBannerNodes={heroBannerNodes?.nodes?.map((n) => n.childMdx)}
      promotionNodes={promotionNodes?.nodes}
      healthTipsNodes={healthTipsNodes?.nodes}
    ></Homepage>
  )
}

export default Index

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
    heroBannerNodes: allFile(
      filter: { absolutePath: { regex: "/hero-banners/" } }
      sort: { fields: childMdx___frontmatter___sort, order: ASC }
    ) {
      nodes {
        childMdx {
          id
          frontmatter {
            titleHk
            titleEn
            titleCn
            detailHk
            detailEn
            detailCn
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            mobileImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            reference
            sort
            theme
            buttons {
              variant
              color
              name
              link
              id
              internal
            }
          }
        }
      }
    }
    promotionNodes: allMdx(
      limit: 6
      filter: {
        fields: { slug: { regex: "/promotions/" } }
        frontmatter: { languages: { eq: $language }, hide: { ne: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
    healthTipsNodes: allMdx(
      limit: 6
      filter: {
        fields: { slug: { regex: "/health-tips/" } }
        frontmatter: { languages: { eq: $language }, hide: { ne: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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

