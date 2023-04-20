import React from 'react'
import PostCard from './PostCard'
import {
  makeStyles,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Container,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 0,
    },
  },
  title: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(0),
    },
  },
  imageList: {
    overflow: 'initial',
  },
  imageListItem: {
    height: 'auto',
  },
  imageListItemItem: {
    overflow: 'initial',
  },
}))

const MorePosts = ({ title, nodes }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Box className={classes.root}>
      <Container disableGutters maxWidth='md'>
        <Typography className={classes.title} variant='h5' color='primary'>
          {title}
        </Typography>
        <ImageList
          className={classes.imageList}
          rowHeight='auto'
          cols={matches ? 1 : 3}
          gap={matches ? 0 : 24}
        >
          {nodes?.length &&
            nodes.map((node) => (
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
                />
              </ImageListItem>
            ))}
        </ImageList>
      </Container>
    </Box>
  )
}

export default MorePosts
