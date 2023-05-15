import React from 'react'
import MdxLayout from '@layouts/MdxLayout'
import { graphql } from 'gatsby'
import { makeStyles, Typography, Container, Box } from '@material-ui/core'
import { formatLocal } from '@utils/moment'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
  },
  date: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  contentWrapper: {
    position: 'relative',
    padding: theme.spacing(0, 3),
  },
  content: {
    paddingBottom: theme.spacing(30),
    position: 'relative',
    zIndex: 2,
  },
  postBg: {
    width: '100%',
    height: 980,
    position: 'absolute',
    bottom: 0,
    left: 0,
    [theme.breakpoints.down('xs')]: {
      height: 400,
    },
  },
}))

export const TAndCTemplate = ({ date, title, children }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container disableGutters maxWidth='xl'>
        <Box className={classes.contentWrapper}>
          <Container className={classes.content} disableGutters maxWidth='sm'>
            <Box className={classes.header}>
              <Typography variant='h5' color='primary'>
                {title}
              </Typography>
              <Box className={classes.date}>{formatLocal(date)}</Box>
            </Box>
            <MdxLayout>{children}</MdxLayout>
          </Container>
          {/* <StaticImage
            className={classes.postBg}
            src='../assets/images/post_bg.png'
            alt='post background'
          ></StaticImage> */}
        </Box>
      </Container>
    </Box>
  )
}

const TAndC = ({ data, children }) => {
  if (!data?.mdx) return null

  const { date, title } = data?.mdx?.frontmatter
  return (
    <TAndCTemplate date={date} title={title}>
      {children}
    </TAndCTemplate>
  )
}

export default TAndC

export const query = graphql`
  query ($slug: String!, $language: String!) {
    locales: allLocale(filter: { ns: { in: ["translation"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mdx: mdx(fields: { slug: { eq: $slug } }, frontmatter: { languages: { eq: $language }, hide: { ne: true } }) {
      id
      frontmatter {
        date
        title
      }
    }
  }
`
