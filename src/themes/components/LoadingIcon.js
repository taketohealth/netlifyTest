import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core'
import Loading from '@images/common/loading.png'

const useStyles = makeStyles((theme) =>
  createStyles({
    loading: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      animation: `$spinner 600ms linear infinite`,
      display: 'block',
    },
    '@keyframes spinner': {
      to: {
        transform: `rotate(360deg)`,
      },
    },
  })
)

const LoadingIcon = () => {
  const classes = useStyles()

  return <img className={classes.loading} src={Loading} alt='loading' />
}

export default LoadingIcon
