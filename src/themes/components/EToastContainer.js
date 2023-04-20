import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  makeStyles,
  createStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { MOBILE_HEADER_HEIGHT } from '@utils/constant'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .Toastify__toast': {
        borderRadius: theme.spacing(1.5),
        minHeight: theme.spacing(7),
        color: theme.palette.common.white,
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('xs')]: {
          borderRadius: 0,
          minHeight: theme.spacing(MOBILE_HEADER_HEIGHT),
        },
      },
    },
  })
)

export const EToastContainer = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <ToastContainer
      theme='colored'
      position={matches ? 'top-center' : 'top-right'}
      className={classes.root}
      {...props}
    />
  )
}
