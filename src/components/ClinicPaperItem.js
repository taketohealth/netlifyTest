import React from 'react'
import { makeStyles, Box, Grid } from '@material-ui/core'
import Link from '@components/Link'
import ArrowIcon from '@images/icons/arrow.svg'
import PdfIcon from '@images/icons/pdf.svg'
import { formatLocal } from '@utils/moment'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
    boxShadow: `0 1px 0 0 ${theme.palette.grey[300]}`,
    '&:last-child': {
      boxShadow: 'none',
    },
    '&:hover': {
      '& path': {
        fill: theme.palette.secondary.main,
      },
      '& $title': {
        color: theme.palette.secondary.main,
      },
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 0),
    },
  },
  date: {
    color: theme.palette.grey[600],
    fontSize: theme.typography.body2.fontSize,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
      marginBottom: theme.spacing(1.5),
    },
  },
  detail: {
    textOverflow: 'ellipsis',
    lineClamp: 2,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    color: theme.palette.text.primary,
    fontSize: theme.typography.body2.fontSize,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.caption.fontSize,
    },
  },
  detailWrapper: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none !important',
  },
  arrowIcon: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(-0.25),
    [theme.breakpoints.down('xs')]: {
      '& svg': {
        width: theme.spacing(2),
        height: theme.spacing(2),
      },
      marginLeft: theme.spacing(2),
      marginTop: 0,
    },
  },
  pdfWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    color: theme.palette.secondary.main,
    fontSize: theme.typography.body2.fontSize,
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1.5, 0),
      fontSize: theme.typography.caption.fontSize,
    },
  },
  pdfIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(0.5),
    '& path': {
      fill: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
}))

const ClinicPaperItem = ({ date, title, detail, href, pdf }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Link
        href={href || pdf?.publicURL}
        className={classes.link}
        isPdf={Boolean(pdf?.publicURL && !href)}
      >
        <Grid container>
          <Grid item sm={3}>
            <Box className={classes.date}>{formatLocal(date)}</Box>
            <Box className={classes.pdfWrapper}>
              <PdfIcon className={classes.pdfIcon}></PdfIcon>PDF
            </Box>
          </Grid>
          <Grid item sm={9}>
            <Box className={classes.title}>{title}</Box>
            <Box className={classes.detailWrapper}>
              <Box className={classes.detail}>{detail}</Box>
              <Box className={classes.arrowIcon}>
                <ArrowIcon></ArrowIcon>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Link>
    </Box>
  )
}

export default ClinicPaperItem
