import React from 'react'
import PostCard from '@components/WhatsNew/PostCard'
import { useTheme, useMediaQuery, Box, makeStyles, ImageList, ImageListItem } from '@material-ui/core'
import ArrowIcon from '../images/arrow.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/css'
import 'swiper/css/navigation'
SwiperCore.use([Navigation])

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '& .swiper-container': {
      padding: theme.spacing(8, 0),
    },
    '& .swiper-slide': {
      width: theme.spacing(30),
      minWidth: 'auto',
    },
    '& .swiper-button-prev,.swiper-button-next': {
      top: theme.spacing(2),
      bottom: 'auto',
      '&:after': {
        content: '""',
        width: theme.spacing(4),
        height: theme.spacing(4),
        position: 'relative',
        background: `url(${ArrowIcon}) no-repeat center center `,
        backgroundSize: 'cover',
      },
    },
    '& .swiper-button-prev': {
      left: ({ progressRightWidth }) => `calc(100% - ${progressRightWidth}px + 8px)`,
      '&:after': {
        transform: `rotate(-180deg)`,
      },
    },
    '& .swiper-button-next': {
      left: ({ progressRightWidth }) => `calc(100% - ${progressRightWidth}px + 48px)`,
    },
  },
  imageList: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  imageListItem: {
    overflow: 'visible',
  },
}))

const PostWrapper = ({ nodes, name }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({
    progressRightWidth: 80,
  })

  const showNavigation = (isMobile && nodes?.length > 1) || (!isMobile && nodes?.length > 2)

  return (
    <Box className={classes.root}>
      {isMobile ? (
        <Swiper spaceBetween={theme.spacing(2)} slidesPerView={'auto'} navigation={showNavigation} initialSlide={0}>
          {nodes?.map((node, index) => {
            return (
              <SwiperSlide key={index}>
                <Box id={'ECP_' + name + '_' + (index + 1)}>
                  <PostCard
                    key={node.id}
                    slug={node.fields.slug}
                    {...node.frontmatter}
                    title={node.frontmatter.cpTitle || node.frontmatter.title}
                    detail={node.frontmatter.cpDetail || node.frontmatter.detail}
                    minHeight={20}
                  />
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      ) : (
        <ImageList className={classes.imageList} rowHeight='auto' cols={3} gap={32}>
          {nodes?.map((node, index) => (
            <ImageListItem
              key={node.id}
              classes={{
                item: classes.imageListItem,
              }}
              id={'ECP_' + name + '_' + (index + 1)}
            >
              <PostCard
                slug={node.fields.slug}
                {...node.frontmatter}
                title={node.frontmatter.cpTitle || node.frontmatter.title}
                detail={node.frontmatter.cpDetail || node.frontmatter.detail}
                minHeight={20}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  )
}

export default PostWrapper
