import React, { useState, useMemo } from 'react'
import PostCard from './PostCard'
import {
  Box,
  makeStyles,
  Container,
  alpha,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  ImageList,
  ImageListItem,
} from '@material-ui/core'
import { POST_PAGE_SIZE } from '@utils/constant'
import { useI18next } from 'gatsby-plugin-react-i18next'
import RightIcon from '@images/icons/right.svg'
import TitleDot from '@themes/components/TitleDot'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8.75),
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
  },
  imageList: {
    overflow: 'initial',
  },
  imageListItem: {
    height: 'auto',
  },
  imageListItemItem: {
    overflow: 'initial',
    paddingBottom: theme.spacing(2.25),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(3.5),
    },
  },
  moreBtnWrapper: {
    marginTop: theme.spacing(12.5),
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(0.5),
      textAlign: 'center',
    },
  },
  moreBtn: {
    paddingLeft: theme.spacing(3.25),
    paddingRight: theme.spacing(3.25),
    color: '#fff',
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  },
  bottomSpace: {
    height: 550,
    marginTop: -350,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {
      height: 0,
      marginTop: theme.spacing(10),
    },
  },
  htagTitle: {
    display: 'flex',
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(2),
    },
  },
}))
const PostList = ({ title, caption, nodes }) => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const numberOfPages = Math.ceil(nodes?.length / POST_PAGE_SIZE)
  const [humanPageNumber, setHumanPageNumber] = useState(1)
  const curNodes = useMemo(
    () => nodes.slice(0, humanPageNumber * POST_PAGE_SIZE),
    [humanPageNumber, nodes]
  )

  const handleMoreViews = () => setHumanPageNumber((status) => status + 1)

  return (
    <Box className={classes.root}>
      <Container maxWidth='md'>
        <Box className={classes.htagTitle}>
          <TitleDot />
          <Typography variant='h1' color='primary'>
            {title}
          </Typography>
        </Box>
        <Box mt={2} mb={12}>
          <Typography variant='body1' color='textPrimary'>
            {caption}
          </Typography>
        </Box>
        <Box>
          <ImageList
            className={classes.imageList}
            rowHeight='auto'
            cols={matches ? 1 : 3}
            gap={matches ? 0 : 24}
          >
            {curNodes?.length > 0 &&
              curNodes.map((node) => (
                <ImageListItem
                  className={classes.imageListItem}
                  classes={{
                    item: classes.imageListItemItem,
                  }}
                  key={node.id}
                >
                  <PostCard
                    slug={node.fields.slug}
                    withViewBtn={matches}
                    {...node.frontmatter}
                  ></PostCard>
                </ImageListItem>
              ))}
          </ImageList>
        </Box>
        {numberOfPages > 1 && humanPageNumber < numberOfPages && (
          <Box className={classes.moreBtnWrapper}>
            <Button
              className={classes.moreBtn}
              size='small'
              variant='contained'
              color='primary'
              onClick={handleMoreViews}
              endIcon={<RightIcon />}
            >
              {t('common.view_more')}
            </Button>
          </Box>
        )}
      </Container>
      <Box className={classes.bottomSpace}></Box>
    </Box>
  )
}

export default PostList
