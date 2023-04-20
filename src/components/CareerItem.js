import React from 'react'
import { makeStyles, Box, alpha, Button, Hidden } from '@material-ui/core'
import Link from '@components/Link'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { formatLocal } from '@utils/moment'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(0.75),
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0 4px 20px -8px ${alpha(theme.palette.common.black, 0.08)}`,
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  type: {
    color: '#D2C7BC',
    fontSize: theme.typography.caption.fontSize,
    marginBottom: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(6.25),
    },
  },
  region: {
    backgroundColor: theme.palette.supporting.supporting01,
    padding: theme.spacing(0, 1.5),
    color: theme.palette.secondary.contrastText,
    fontSize: theme.typography.caption.fontSize,
    height: theme.spacing(3.5),
    borderRadius: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(3),
      fontSize: 11,
    },
  },
  date: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.palette.primary.main,
  },
  link: {
    textDecoration: 'none',
  },
  btn: {
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(5),
      padding: theme.spacing(0, 4),
    },
  },
}))
const CareerItem = ({ title, type, region, date, slug }) => {
  const classes = useStyles()
  const { t } = useI18next()

  return (
    <Box className={classes.root}>
      <Box className={classes.type}>
        {/* {type} */}
        <Hidden smUp>
          <Box className={classes.date}>{formatLocal(date)}</Box>
        </Hidden>
      </Box>
      <Box className={classes.title}>{title}</Box>
      <Box display='flex' justifyContent='space-between' alignItems='flex-end'>
        <Box>
          <Box className={classes.region}>
            {t(`options.career_regions.${region}`)}
          </Box>
          <Hidden xsDown>
            <Box className={classes.date}>{formatLocal(date)}</Box>
          </Hidden>
        </Box>
        <Link className={classes.link} to={slug}>
          <Button
            className={classes.btn}
            size='small'
            variant='outlined'
            color='primary'
          >
            {t('common.view_details')}
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default CareerItem
