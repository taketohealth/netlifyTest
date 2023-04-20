import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Audio from './Audio'
import '../cms/css/customEditorComponents.css'

const shortCodes = { Audio }

const MdxLayout = ({ children }) => {
  return <MDXProvider components={shortCodes}>{children}</MDXProvider>
}

export default MdxLayout
