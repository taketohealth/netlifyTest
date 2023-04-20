import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 800,
    position: 'absolute',
    bottom: 0,
    left: 0,
    [theme.breakpoints.down('xs')]: {
      height: 400,
    },
  },
}))

const PostBg = () => {
  const classes = useStyles()
  return <StaticImage className={classes.root} src='../assets/images/post_bg.png' alt='post background'></StaticImage>
}

export default PostBg
