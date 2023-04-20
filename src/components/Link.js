import React from 'react'
import { makeStyles, Link as MuiLink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import { useI18next, Link as I18nLink } from 'gatsby-plugin-react-i18next'
import classnames from 'classnames'
import { formatStartsPath } from '@utils'

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    '&.none': {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    '&.hover': {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '&.always': {
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}))
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, language, className, underline, isPdf, ...other }) => {
  const classes = useStyles()
  const { language: curLanguage, routed } = useI18next()
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  const formatPath = formatStartsPath(`${routed ? curLanguage : ''}${to}`)

  if (internal && !isPdf) {
    if (other?.target) {
      return (
        <MuiLink
          className={className}
          href={`${process.env.GATSBY_WEBSITE_URL}${formatPath}`}
          rel='noopener noreferrer'
          underline={underline || 'none'}
          {...other}
        >
          {children}
        </MuiLink>
      )
    }
    return routed || language ? (
      <I18nLink
        className={classnames(classes.root, className, underline)}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        language={language || curLanguage}
        {...other}
      >
        {children}
      </I18nLink>
    ) : (
      <GatsbyLink
        className={classnames(classes.root, className, underline)}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <MuiLink className={className} href={to} target='_blank' rel='noopener noreferrer' underline={underline} {...other}>
      {children}
    </MuiLink>
  )
}

export default Link
