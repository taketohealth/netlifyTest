import React, { useContext, useMemo } from 'react'
import {
  makeStyles,
  Typography,
  Container,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Grid,
  alpha,
  Hidden,
} from '@material-ui/core'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Link from '@components/Link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { HeroThemeContext } from '@layouts/context'
import { useI18next } from 'gatsby-plugin-react-i18next'
import useObjectTranslation from '@hooks/useObjectTranslation'
import classnames from 'classnames'
import ImageTranslation from '@components/ImageTranslation'
import useLangQuery from '@hooks/useLangQuery'

SwiperCore.use([Autoplay, Pagination, Navigation])

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
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
  imageButtonWrapper: {
    transform: `translate(-50%,-50%)`,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: `${(2631 / 4320) * 100}vw`,
    maxWidth: (4320 / 2631) * 877,
    [theme.breakpoints.down('xs')]: {
      maxHeight: `100%`,
      maxWidth: (1125 / 1506) * 877,
    },
  },
  imageButton: {
    position: 'absolute',
    width: '30%',
    height: '30%',
    bottom: '16%',
    left: '35%',
    [theme.breakpoints.down('xs')]: {
      left: ' 52%',
      width: '43%',
      bottom: '44%',
      height: '22%',
    },
  },
  imageButton2: {
    position: 'absolute',
    width: '33%',
    height: '35%',
    bottom: '2%',
    left: '66%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '10%',
      left: '0%',
      bottom: '1%',
    },
  },
  containImgWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  promoBannerBg: {
    background: `radial-gradient(circle, rgba(127,177,210,1) 0%, rgba(159,194,239,1) 50%, rgba(201,243,224,1) 100%)`,
  },
  athletesBannerBg: {
    background: `linear-gradient(90deg, rgba(169,211,240,1) 0%, rgba(227,176,109,1) 100%)`,
  },
  anniversaryBannerWrapper: {
    background: `linear-gradient(90deg, rgba(51,54,79,1) 0%, rgba(51,54,79,1) 100%)`,
  },
  containImg: {
    maxHeight: '100%',
  },
  wrapper: {
    position: 'relative',
    gridArea: '1/1',
    display: 'grid',
    height: 877,
    transform: `translateZ(0px)`,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 6),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
      minHeight: 'auto',
      height: 'calc((502 / 375) * 100vw)',
      maxHeight: 877,
    },
  },
  contentWrapper: {
    height: '100%',
    maxWidth: ({ isEn }) => theme.spacing(isEn ? 80 : 60),
    paddingTop: theme.spacing(29),
    paddingBottom: theme.spacing(5.5),
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
      paddingTop: theme.spacing(3),
      paddingBottom: 0,
    },
  },
  titleWrapper: {
    marginRight: '-100%',
  },
  isEnTitleWrapper: {
    marginRight: 0,
    lineHeight: 1.2,
    fontSize: theme.typography.h3.fontSize,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  isEnDetailWrapper: {
    [theme.breakpoints.down('xs')]: {
      lineHeight: 1.4,
    },
  },
  reference: {
    fontSize: 9,
    lineHeight: 1,
    [theme.breakpoints.down('xs')]: {
      color: theme.palette.primary.main,
      fontSize: 6,
      // marginTop: 'auto',
      padding: theme.spacing(0, 3),
      paddingTop: theme.spacing(1),
    },
  },
  btnWrapper: {
    display: 'flex',
    marginTop: 'auto',
    '& a': {
      textDecoration: 'none',
    },
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(8),
    },
  },
  isEnBtnWrapper: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(4),
      justifyContent: 'space-between',
    },
  },
  btn: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 3.5),
    },
  },
  heroBannerWrapper: {
    display: 'grid',
    position: 'relative',
  },
  swiperWrapper: {
    width: '100%',
    '& .swiper-button-prev,.swiper-button-next': {
      '&:after': {
        fontSize: theme.spacing(5),
        color: alpha(theme.palette.common.black, 0.25),
        [theme.breakpoints.down('xs')]: {
          fontSize: theme.spacing(3),
        },
      },
    },
    '& .swiper-button-prev': {
      [theme.breakpoints.down('xs')]: {
        left: 0,
      },
    },
    '& .swiper-button-next': {
      [theme.breakpoints.down('xs')]: {
        right: 0,
      },
    },
    WebkitBackfaceVisibility: 'hidden',
    '& .swiper-slide': {
      // width: '100%',
      WebkitBackfaceVisibility: 'hidden',
    },
    '& .swiper-pagination-bullet': {
      opacity: 0.3,
    },
    '& .swiper-pagination-bullet-active': {
      opacity: 1,
      background: alpha(theme.palette.common.white, 0.9),
    },
    '& .swiper-pagination': {
      [theme.breakpoints.down('xs')]: {
        bottom: 'auto',
        top: `calc( 100% - ${theme.spacing(9)}px)`,
      },
    },
  },
}))

export const HeroBannerTemplate = ({ data }) => {
  const { t, language } = useI18next()
  const isEn = language === 'en'
  const classes = useStyles({ isEn })
  const { tB } = useObjectTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <>
      <Box className={classes.heroBannerWrapper}>
        {isMobile ? (
          <GatsbyImage
            className={classes.heroImgWrapper}
            image={data?.mobileImage && getImage(data?.mobileImage)}
            placeholder='blurred'
            alt={tB('title', data)}
            onError={(error) => console.log('GatsbyImage ERROR', error)}
          ></GatsbyImage>
        ) : (
          <GatsbyImage
            className={classes.heroImgWrapper}
            image={data?.image && getImage(data?.image)}
            placeholder='blurred'
            alt={tB('title', data)}
            onError={(error) => console.log('GatsbyImage ERROR', error)}
          ></GatsbyImage>
        )}
        <Container className={classes.wrapper} maxWidth='md'>
          <Box className={classes.contentWrapper}>
            <Typography variant={isMobile && isEn ? 'h3' : 'h2'} color='primary' component='div'>
              <Box
                className={classnames(classes.titleWrapper, {
                  [classes.isEnTitleWrapper]: isEn,
                })}
                mb={isMobile ? 1 : 2}
                lineHeight={1.5}
                dangerouslySetInnerHTML={{
                  __html: tB('title', data),
                }}
              ></Box>
              <Box
                className={classnames({
                  [classes.isEnDetailWrapper]: isEn,
                })}
                fontSize={isMobile ? 'caption.fontSize' : 'body1.fontSize'}
                fontWeight='fontWeightLight'
                lineHeight='1.5'
                textAlign='justify'
                whiteSpace='break-spaces'
                dangerouslySetInnerHTML={{
                  __html: tB('detail', data),
                }}
              ></Box>
            </Typography>
            <Grid
              className={classnames(classes.btnWrapper, {
                [classes.isEnBtnWrapper]: isEn,
              })}
              container
              spacing={2}
            >
              {data?.buttons?.length > 0 &&
                data?.buttons?.map((button) => (
                  <Grid key={button.name} item xs={isMobile && !isEn ? 12 : data?.buttons?.length === 1 ? 12 : 'auto'}>
                    <Link
                      id={button.id || ''}
                      underline='none'
                      to={button.link}
                      page_name='RW'
                      button_name={button.id || ''}
                      button_id={button.id || ''}
                    >
                      <Button
                        variant={button.variant}
                        color={button.color}
                        className={classes.btn}
                        fullWidth={!isMobile && data?.buttons?.length === 1}
                      >
                        {t(button.name)}
                      </Button>
                    </Link>
                  </Grid>
                ))}
            </Grid>
            <Hidden xsDown>
              <Box
                className={classes.reference}
                dangerouslySetInnerHTML={{
                  __html: data?.reference,
                }}
              ></Box>
            </Hidden>
          </Box>
        </Container>
      </Box>
      <Hidden smUp>
        <Box
          className={classes.reference}
          dangerouslySetInnerHTML={{
            __html: data?.reference,
          }}
        ></Box>
      </Hidden>
    </>
  )
}

const Banner = ({ nodes }) => {
  const { language } = useI18next()
  const isEn = language === 'en'
  const classes = useStyles({ isEn })
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const { toggleTheme } = useContext(HeroThemeContext)
  const addLangQuery = useLangQuery()
  const bannersTheme = useMemo(() => {
    const cmsBannersTheme = nodes?.map((node) => node?.frontmatter?.theme) || []
    return ['light', 'dark', 'light', ...cmsBannersTheme]
  }, [nodes])
  return (
    <Container disableGutters maxWidth='xl' className={classes.root}>
      <Swiper
        loop={bannersTheme?.length > 1}
        navigation={bannersTheme?.length > 1}
        pagination={{ clickable: true }}
        className={classes.swiperWrapper}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => {
          return toggleTheme?.(bannersTheme[swiper.realIndex], swiper.realIndex)
        }}
        initialSlide={0}
        speed={700}
        watchOverflow={true}
      >
        <SwiperSlide>
          <Box className={classes.heroBannerWrapper}>
            <Box
              className={classnames(classes.heroImgWrapper, classes.containImgWrapper, classes.athletesBannerBg)}
              position='relative'
            >
              <ImageTranslation
                filename='athletes_banner'
                alt='athletes banner'
                className={classes.containImg}
                objectFit='contain'
              ></ImageTranslation>
              <Box className={classes.imageButtonWrapper}>
                <Box
                  position='absolute'
                  right={isMobile ? '7.8%' : isEn ? '38.5%' : '32%'}
                  width={isMobile ? '22%' : isEn ? '14.5%' : '16%'}
                  height={isMobile ? '6%' : '8%'}
                  top={isMobile ? '38.5%' : 'auto'}
                  bottom={isMobile ? 'unset' : isEn ? '9%' : '12.5%'}
                  to={addLangQuery()}
                  target='_blank'
                  component={Link}
                  id='RW_HP_Top_Banner_Athlete_EHEALTH'
                  page_name='RW'
                  button_name='RW_HP_Top_Banner_Athlete_EHEALTH'
                  button_id='RW_HP_Top_Banner_Athlete_EHEALTH'
                >
                  <Box />
                </Box>
                <Box
                  position='absolute'
                  right={isMobile ? '7.8%' : isEn ? '3.5%' : '5.5%'}
                  width={isMobile ? '22%' : isEn ? '32%' : '23%'}
                  height={isMobile ? '3.5%' : '8%'}
                  top={isMobile ? '47.5%' : 'unset'}
                  bottom={isMobile ? 'unset' : isEn ? '9%' : '12.5%'}
                  to='/whats-new/updates/athletes-program/'
                  component={Link}
                  id='BannerRW_HP_Top_Banner_Athlete_KnowMore'
                  page_name='RW'
                  button_name='BannerRW_HP_Top_Banner_Athlete_KnowMore'
                  button_id='BannerRW_HP_Top_Banner_Athlete_KnowMore'
                >
                  <Box />
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        {nodes?.length &&
          nodes?.map((node) => (
            <SwiperSlide key={node.id}>
              <HeroBannerTemplate data={node.frontmatter} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default Banner
