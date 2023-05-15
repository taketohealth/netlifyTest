import React, { useContext, useEffect } from 'react'
import { makeStyles, Container, Box } from '@material-ui/core'
import Link from '@components/Link'
import { HeroThemeContext } from '@layouts/context'
import classnames from 'classnames'
import ImageTranslation from '@components/ImageTranslation'
import useLangQuery from '@hooks/useLangQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
  },
  heroBannerWrapper: {
    display: 'grid',
    position: 'relative',
  },
  heroImgWrapper: {
    gridArea: '1/1',
    height: 877,
    [theme.breakpoints.down('xs')]: {
      minHeight: 'auto',
      height: 'calc((502 / 375) * 100vw)',
      maxHeight: 877,
    },
  },
  containImgWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  promoBannerBg: {
    background: `radial-gradient(circle, rgba(127,177,210,1) 0%, rgba(159,194,239,1) 50%, rgba(201,243,224,1) 100%)`,
  },
  anniversaryBannerWrapper: {
    background: `linear-gradient(90deg, rgba(51,54,79,1) 0%, rgba(51,54,79,1) 100%)`,
  },
  containImg: {
    maxHeight: '100%',
  },
}))

const BannerPlaceholder = () => {
  const classes = useStyles()
  const { toggleTheme } = useContext(HeroThemeContext)
  const addLangQuery = useLangQuery()

  useEffect(() => {
    toggleTheme?.('dark', 0)
  }, [])

  return (
    <Container disableGutters maxWidth='xl' className={classes.root}>
      <Box
        className={classes.heroBannerWrapper}
        id='RW_HP_Top_Banner_OctPromo_EHEALTH'
        to={addLangQuery()}
        target='_blank'
        component={Link}
      >
        <Box
          className={classnames(
            classes.heroImgWrapper,
            classes.anniversaryBannerWrapper,
            classes.containImgWrapper,
            classes.promoBannerBg
          )}
          position='relative'
        >
          <ImageTranslation filename='Chris' alt='Chris banner' className={classes.containImg} objectFit='contain' />
        </Box>
      </Box>
    </Container>
  )
}

export default BannerPlaceholder
