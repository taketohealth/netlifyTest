import React from 'react'
import { makeStyles, Box, useTheme, useMediaQuery } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    position: 'relative',
    flexShrink: 0,
  },
  dot: {
    top: theme.spacing(0.5),
    left: (props) => theme.spacing(props.left || -3.75),
    position: 'absolute',
    // top: theme.spacing(0.5),
    width: (props) =>
      theme.spacing(props.matches ? 1 : props.size ? props.size : 1.75),
    height: (props) =>
      theme.spacing(props.matches ? 1 : props.size ? props.size : 1.75),
    [theme.breakpoints.down('xs')]: {
      left: (props) => theme.spacing((props.left || -3.75) * 0.6),
      top: theme.spacing(0.25),
    },
  },
}))
const TitleDot = ({ bgcolor, size, left }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({ size, matches, left })
  return (
    <Box className={classes.root}>
      <Box className={classes.dot} bgcolor={bgcolor || 'secondary.main'}></Box>
    </Box>
  )
}

export default TitleDot
