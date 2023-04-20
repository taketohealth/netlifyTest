import { useStaticQuery, graphql } from 'gatsby'

const useMenu = () => {
  const data = useStaticQuery(graphql`
    {
      allMenuJson {
        nodes {
          banner
          mobileBanner
          path
          title
          titleColor
          sections {
            path
            title
          }
        }
      }
    }
  `)

  return data?.allMenuJson?.nodes
}

export default useMenu
