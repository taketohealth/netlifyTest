import { wrapRootElement, wrapPageElement } from './wrapElement'
import MenuData from './content/menu.json'
const { languages } = require('./languages')

const getOriginalPath = (pathname) => {
  const purePath = pathname
    ?.split('/')
    .filter((x) => !languages?.find((y) => y === x))
    ?.join('/')

  return purePath
}

const shouldUpdateScroll = ({ prevRouterProps, pathname }) => {
  // When user navigates between section pages should no update page scroll

  if (getOriginalPath(pathname) === '/whats-new/campaign/') return false

  const betweenSectionPage = MenuData?.find(
    (menu) =>
      menu?.sections?.find((section) => section.path === getOriginalPath(pathname)) &&
      menu?.sections?.find((section) => section.path === getOriginalPath(prevRouterProps?.location?.pathname))
  )
  return !Boolean(betweenSectionPage)
}

export { wrapRootElement, wrapPageElement, shouldUpdateScroll }
