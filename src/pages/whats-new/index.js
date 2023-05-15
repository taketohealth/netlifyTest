import React from 'react'
import Promotions from '@views/promotions'
import { graphql } from 'gatsby'


const PromotionsPage = ({ data }) => {
  return <Promotions data={data}></Promotions>
}

export default PromotionsPage

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
        }
      }
    }
  }
`