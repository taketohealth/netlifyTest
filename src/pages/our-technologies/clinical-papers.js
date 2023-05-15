import React from 'react'
import { makeStyles, Box, Container, Typography } from '@material-ui/core'
import ClinicPaperItem from '@components/ClinicPaperItem'
import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import TitleDot from '@themes/components/TitleDot'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  insideRoot: {
    boxSizing: 'content-box',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(11.25),
      paddingBottom: theme.spacing(9),
      marginBottom: 0,
    },
  },
  bannerWrapper: {
    position: 'relative',
    marginLeft: theme.spacing(3),
  },
  banner: {
    height: 353,
    marginTop: theme.spacing(-3),
    [theme.breakpoints.down('xs')]: {
      height: 228,
      marginTop: theme.spacing(-5),
    },
  },
  bannerImg: {
    borderRadius: `12px 0 0 12px`,
  },
  bannerContent: {
    position: 'absolute',
    left: theme.spacing(12.5),
    bottom: theme.spacing(10),
    color: theme.palette.primary.contrastText,
    maxWidth: 578,
    fontSize: theme.typography.body1.fontSize,
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      left: theme.spacing(3),
      bottom: theme.spacing(3),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  bannerTitle: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
      fontSize: theme.typography.h6.fontSize,
    },
  },
  list: {
    maxWidth: 966,
    margin: '0 auto',
    padding: theme.spacing(0, 3),
  },
  htagTitle: {
    marginBottom: theme.spacing(4),
    display: 'flex',
    fontSize: theme.typography.h4.fontSize,
  },
}))

const ClinicalPapers = ({ data }) => {
  const classes = useStyles()
  const { t } = useI18next()
  const { nodes } = data?.allMdx

  return (
    <Box className={classes.root}>
      <Container className={classes.insideRoot} disableGutters maxWidth='md'>
        <Box className={classes.bannerWrapper}>
          <Box className={classes.bannerContent}>
            <Box className={classes.htagTitle}>
              <TitleDot />
              <Typography variant='h1'>
                {t('our_technologies.clinical_papers.title')}
              </Typography>
            </Box>
            <Box>{t('our_technologies.clinical_papers.detail')}</Box>
          </Box>
        </Box>
        <Box className={classes.list}>
          {nodes?.map((node) => (
            <ClinicPaperItem key={node.id} {...node?.frontmatter}></ClinicPaperItem>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default ClinicalPapers

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
      filter: { internal: { contentFilePath: { regex: "/clinical-papers/" } }, frontmatter: { hide: { ne: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          detail
          date
          href
          # pdf {
          #   publicURL
          # }
        }
      }
    }
  }
`


