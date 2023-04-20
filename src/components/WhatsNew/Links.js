import React from 'react'
import WhatsappIcon from '@images/icons/whatsapp.svg'
import FacebookIcon from '@images/icons/facebook.svg'
import LinkIcon from '@images/icons/link.svg'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { useI18next } from 'gatsby-plugin-react-i18next'

const useStyles = makeStyles((theme) => ({
  btn: {
    '& path': {
      fill: theme.palette.primary.main,
    },
    '& svg': {
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
      },
    },
  },
}))

const Links = ({ href, whatsapp, facebook }) => {
  const classes = useStyles()
  const { t } = useI18next()

  const links = [
    {
      Icon: FacebookIcon,
      type: 'link',
      link: facebook,
    },
    {
      Icon: WhatsappIcon,
      type: 'link',
      link: whatsapp,
    },
    {
      Icon: LinkIcon,
      type: 'copy',
      link: href,
    },
  ]

  const handleCopy = () => toast.success(t('status.copy.success'))

  return (
    <Box display='flex' mr={-1.5}>
      {links.map(({ Icon, type, link }, index) => (
        <Box key={index}>
          {type === 'link' && (
            <Link href={link} target='_blank'>
              <IconButton className={classes.btn}>
                <Icon></Icon>
              </IconButton>
            </Link>
          )}
          {type === 'copy' && (
            <CopyToClipboard text={link} onCopy={handleCopy}>
              <IconButton className={classes.btn}>
                <Icon></Icon>
              </IconButton>
            </CopyToClipboard>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default Links
