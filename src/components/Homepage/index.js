import React from 'react'
import { makeStyles } from '@material-ui/core/'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import TitleDot from '@themes/components/TitleDot'
import Typography from '@material-ui/core/Typography'
import LazyLoad from '@components/LazyLoad'
import loadable from '@loadable/component'
import { useI18next } from 'gatsby-plugin-react-i18next'
import BannerPlaceholder from './BannerPlaceholder'

const Banner = loadable(() => import('./Banner'))
const PostSwiper = loadable(() => import('./PostSwiper'))

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
    },
  },
  title: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    display: 'flex',
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2.5),
    },
  },
  h1Title:{
    justifyContent: 'center'
  },
  healthTipsBanner: {
    backgroundColor: theme.palette.primary.main,
    height: 416,
    borderRadius: `16px 16px 0 0`,
    marginTop: theme.spacing(15),
    marginBottom: -384,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(10),
    },
  },
  healthTipsWrapper: {
    color: theme.palette.primary.contrastText,
  },
  containerWrapper: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  promotionsSwiperWrapper: {
    marginRight: theme.spacing(-4),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(-3),
    },
  },
  swiperWrapper: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(3),
    },
  },
}))
const Homepage = ({ heroBannerNodes, promotionNodes, healthTipsNodes }) => {
  const classes = useStyles()
  const { t } = useI18next()
  return (
    <>
      <Banner nodes={heroBannerNodes} fallback={<BannerPlaceholder />}></Banner>
      <Box className={classes.containerWrapper}>
        <Container disableGutters className={classes.root} maxWidth='md'>
          <Box className={classes.title}>
            <TitleDot></TitleDot>
            <Typography variant='h4' color='primary'>
              {t('whats_new.promotions.title')}
            </Typography>
          </Box>
          <Box className={classes.promotionsSwiperWrapper}>
            <LazyLoad>
              <PostSwiper nodes={promotionNodes} morePath='/whats-new/promotions/' withViewBtn></PostSwiper>{' '}
            </LazyLoad>
          </Box>
        </Container>
      </Box>
      <Container disableGutters maxWidth='lg'>
        <Box className={classes.healthTipsBanner} />
        <Box className={classes.swiperWrapper}>
          <Container disableGutters maxWidth='md' className={classes.healthTipsWrapper}>
            <Box className={classes.title}>
              <TitleDot></TitleDot>
              <Typography variant='h4'>{t('whats_new.health_tips.title')}</Typography>
            </Box>
            <Box fontSize='caption.fontSize'>{t('whats_new.health_tips.detail')}</Box>
            <LazyLoad>
              <PostSwiper nodes={healthTipsNodes} morePath='/whats-new/health-tips/'></PostSwiper>
            </LazyLoad>
          </Container>
        </Box>
      </Container>
    </>
  )
}

export default Homepage
