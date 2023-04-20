import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core'
import RightIcon from '@images/icons/right.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(0.75),
    width: theme.spacing(6),
    height: theme.spacing(6),
    padding: theme.spacing(1),
    transition: 'background-color ease 0.3s',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '& svg': {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(3.75),
      height: theme.spacing(3.75),
      borderRadius: theme.spacing(0.5),
      padding: theme.spacing(0.5),
    },
  },
}))
const ViewButton = ({ slug }) => {
  const classes = useStyles()
  return (
    <IconButton
      className={classes.root}
      color='primary'
      aria-label='back button'
    >
      <RightIcon></RightIcon>
    </IconButton>
  )
}

export default ViewButton
