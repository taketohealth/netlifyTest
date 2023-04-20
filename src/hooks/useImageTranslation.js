import { useStaticQuery, graphql } from 'gatsby'

const useImageTranslation = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "imagesTranslation" } }) {
        nodes {
          relativePath
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return data.allFile.nodes
}

export default useImageTranslation
