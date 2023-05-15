import React from 'react'
import './src/app.css'
import Layout from './src/layouts/Layout'
import { ThemeProvider } from '@material-ui/core/styles'
import getTheme from './src/themes'
import CssBaseline from '@material-ui/core/CssBaseline'
import { EToastContainer } from './src/themes/components/EToastContainer'

const DEFAULT_THEME = 'light'
// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => {
  /**
   * newElement logic is for layout losing translations fixing;
   * https://andremonteiro.pt/gatsby-i18next-wrap-page-element/
   */
  const newElement = React.cloneElement(
    element, // I18nextProvider
    element.props,
    React.cloneElement(
      element.props.children, // I18nextContext.Provider
      element.props.children.props,
      React.createElement(Layout, props, element.props.children.props.children)
    )
  )
  return newElement
}

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={getTheme(DEFAULT_THEME)}>
      <CssBaseline></CssBaseline>
      {element}
      <EToastContainer autoClose={3000} hideProgressBar />
    </ThemeProvider>
  )
}

export { wrapRootElement, wrapPageElement }
