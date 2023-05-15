import React, { useState } from 'react'
import PostCard from '@components/WhatsNew/PostCard'
import { useTheme, useMediaQuery, Box, makeStyles, alpha } from '@material-ui/core/'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Button from '@material-ui/core/Button'
import RightIcon from '@images/icons/right.svg'
import Link from '@components/Link'
import { useI18next } from 'gatsby-plugin-react-i18next'
SwiperCore.use([Pagination, Navigation])

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '& .swiper-wrapper': {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(13.5),
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(8),
      },
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(4.5),
      },
    },
    '& .swiper-slide': {
      width: '28%',
      minWidth: 328,
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(30),
        minWidth: 'auto',
      },
    },
    '& .swiper-pagination-progressbar': {
      top: 'auto',
      bottom: 0,
    },
    '& .swiper-button-prev,.swiper-button-next': {
      top: 'auto',
      bottom: theme.spacing(0.75),
      height: theme.spacing(3.75),
      '&:after': {
        fontSize: 24,
        fontWeight: 'bolder',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
          fontSize: 16,
        },
      },
      [theme.breakpoints.down('xs')]: {
        bottom: theme.spacing(9.75),
      },
    },
    '& .swiper-button-prev': {
      left: ({ progressRightWidth, matches }) => `calc(100% - ${progressRightWidth}px + ${matches ? 16 : 24}px)`,
    },
    '& .swiper-button-next': {
      left: ({ progressRightWidth, matches }) => `calc(100% - ${progressRightWidth}px + ${matches ? 48 : 72}px)`,
    },
  },
  linearProgressWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingRight: theme.spacing(4),
  },
  linearProgressRoot: {
    width: ({ progressRightWidth }) => `calc(100% - ${progressRightWidth}px)`,
    borderRadius: 5,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    [theme.breakpoints.down('xs')]: {
      height: 2,
    },
  },
  linearProgressBar: {
    borderRadius: 5,
  },
  viewBtnLink: {
    marginLeft: 'auto',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(6),
      marginRight: 'auto',
    },
  },
  viewBtn: {
    padding: theme.spacing(1.25, 3),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5, 6),
    },
  },
}))

const PostSwiper = ({ nodes, morePath = '/whats-new/', withViewBtn }) => {
  const { t } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({
    progressRightWidth: matches ? 80 : 316,
    matches,
  })
  const [activeSlide, setActiveSlide] = useState(0)

  const showNavigation = (matches && nodes?.length > 1) || (!matches && nodes?.length > 2)

  return (
    <Box className={classes.root}>
      <Swiper
        spaceBetween={matches ? theme.spacing(2) : theme.spacing(3)}
        slidesPerView={'auto'}
        loop={nodes?.length > (matches ? 1 : 3)}
        navigation={showNavigation}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex)
        }}
        initialSlide={0}
      >
        {nodes?.map((node, index) => {
          return (
            <SwiperSlide key={index}>
              <PostCard key={node.id} slug={node.fields.slug} withViewBtn={withViewBtn} {...node.frontmatter}/>
            </SwiperSlide>
          )
        })}
        {showNavigation && (
          <Box className={classes.linearProgressWrapper}>
            <LinearProgress
              classes={{
                root: classes.linearProgressRoot,
                bar: classes.linearProgressBar,
              }}
              color='primary'
              variant='determinate'
              value={Math.round(((activeSlide + 1) / nodes?.length) * 100)}
            />
            <Link className={classes.viewBtnLink} to={morePath}>
              <Button
                className={classes.viewBtn}
                variant='outlined'
                color='primary'
                size='small'
                endIcon={!matches && <RightIcon />}
              >
                {t('common.view_more')}
              </Button>
            </Link>
          </Box>
        )}
      </Swiper>
    </Box>
  )
}

export default PostSwiper
