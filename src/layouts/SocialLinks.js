import React from 'react'
import Linkedin from '@images/icons/linkedin.svg'
import Youtube from '@images/icons/youtube.svg'
import Facebook from '@images/icons/facebook.svg'
import useSiteMetadata from '@hooks/useSiteMetadata'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(-2),
  },
  btn: {
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      marginRight: theme.spacing(3.25),
    },
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
}))

const SocialLinks = () => {
  const classes = useStyles()
  const { linkedin, youtube, facebook } = useSiteMetadata()

  return (
    <Box className={classes.root} display='flex'>
      <Link href={facebook} target='_blank'>
        <IconButton className={classes.btn} aria-label='mfacebookenu'>
          <Facebook></Facebook>
        </IconButton>
      </Link>
      <Link href={youtube} target='_blank'>
        <IconButton className={classes.btn} aria-label='youtube'>
          <Youtube></Youtube>
        </IconButton>
      </Link>
      {/* <Link href={whatsapp} target='_blank'>
        <IconButton className={classes.btn} aria-label='whatsapp'>
          <Whatsapp></Whatsapp>
        </IconButton>
      </Link> */}
      <Link href={linkedin} target='_blank'>
        <IconButton className={classes.btn} aria-label='linkedin'>
          <Linkedin></Linkedin>
        </IconButton>
      </Link>
    </Box>
  )
}

export default SocialLinks
