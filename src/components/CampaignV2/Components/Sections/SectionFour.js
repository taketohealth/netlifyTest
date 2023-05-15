import React from 'react'
import { useTheme, useMediaQuery, Box, makeStyles } from '@material-ui/core/'
import PostWrapper from '../PostWrapper'
import Button from '@material-ui/core/Button'
import { useI18next } from 'gatsby-plugin-react-i18next'
import ImageTranslation from '../ImageTranslation'
import classnames from 'classnames'
import Link from '@components/Link'
import useLangQuery from '@hooks/useLangQuery'

const useStyles = makeStyles((theme) => ({
  outlineButton: {
    whiteSpace: 'nowrap',
    color: theme.palette.prophecyPrimary.main,
    borderColor: theme.palette.prophecyPrimary.main,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: theme.spacing(1.5),
    },
  },
  postWrapperTitle: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
      paddingRight: theme.spacing(10),
    },
  },
}))

const SectionFour = ({ storyNodes, healthTipsNodes }) => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const addLangQuery = useLangQuery()

  return (
    <>
      <ImageTranslation filename='section_banner_04' alt='section banner 04'></ImageTranslation>
      <Box
        color='prophecyPrimary.main'
        fontWeight='fontWeightBold'
        fontSize='h5.fontSize'
        mx='auto'
        maxWidth={1192}
        pt={10}
        pb={15}
        px={2.5}
      >
        <Box className={classnames(classes.postWrapperTitle, 'gsap-fade-in-8-trigger gsap-fade-in-8')}>
          {t('cp_v2.news.paragraphs.0')}
        </Box>
        <Box className='gsap-fade-in-8'>
          <PostWrapper nodes={storyNodes} name={'Story'} morePath='/whats-new/promotions/'></PostWrapper>
        </Box>
        <Box className={classnames(classes.postWrapperTitle, 'gsap-fade-in-9-trigger gsap-fade-in-9')}>
          {t('cp_v2.news.paragraphs.1')}
        </Box>
        <Box className='gsap-fade-in-9'>
          <PostWrapper nodes={healthTipsNodes} name={'Article'} morePath='/whats-new/health-tips/'></PostWrapper>
        </Box>
        <Box
          className='gsap-fade-in-9'
          mt={1.25}
          flexWrap={isMobile ? 'wrap' : 'nowrap'}
          display='flex'
          width='100%'
          mx='auto'
          maxWidth={isMobile ? 'auto' : 480}
        >
          <Button
            fullWidth
            href={addLangQuery()}
            variant='contained'
            color='secondary'
            target='_blank'
          >
            {t('common.book_now')}
          </Button>
          <Box width='100%' target='_blank' component={Link} to='/service-location/'>
            <Button
              className={classes.outlineButton}
              fullWidth
              variant='outlined'
            >
              {t('cp_v2.common.view_service_location')}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SectionFour
