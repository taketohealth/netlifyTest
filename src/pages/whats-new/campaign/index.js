import React from 'react'
import { graphql } from 'gatsby'
import Campaign from '@components/CampaignV2'

const CampaignRoot = ({ data }) => {
  const { storyNodes, healthTipsNodes, athleteNodes } = data
  return (
    <Campaign
      storyNodes={storyNodes?.nodes}
      healthTipsNodes={healthTipsNodes?.nodes}
      athleteNodes={athleteNodes?.nodes}
    ></Campaign>
  )
}

export default CampaignRoot

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["translation", "campaignPageV2"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    storyNodes: allMdx(
      limit: 6
      filter: {
        frontmatter: {
          languages: { eq: $language }
          postType: { eq: "campaignStory" }
          isCampaign: { ne: false }
          hide: { ne: true }
        }
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
          detail
          date
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
        frontmatter: {
          languages: { eq: $language }
          postType: { eq: "campaignNews" }
          isCampaign: { ne: false }
          hide: { ne: true }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          cpTitle
          cpDetail
          title
          detail
          date
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
    athleteNodes: allMdx(
      limit: 6
      filter: { frontmatter: { languages: { eq: $language }, postType: { eq: "campaignAthlete" }, hide: { ne: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          detail
          date
          athleteType
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
// export async function config() {
//   // Optionally use GraphQL here

//   return ({ params }) => {
//     return {
//       defer: true,
//     }
//   }
// }
