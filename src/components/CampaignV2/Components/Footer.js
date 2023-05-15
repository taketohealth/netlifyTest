import React from 'react'
import { useTheme, useMediaQuery, Box, makeStyles } from '@material-ui/core'
import { useI18next } from 'gatsby-plugin-react-i18next'
import LocationIcon from '../images/location.svg'
import PhoneIcon from '../images/phone.svg'
import MailIcon from '../images/mail.svg'
import Logo from '../images/take2_full_color.png'
import Link from '@components/Link'

import { SERVICE_PHONE, SERVICE_INFO_EMAIL } from '../utils/constant'

const useStyles = makeStyles((theme) => ({
  icon: {
    '& svg': {
      width: theme.spacing(3),
      height: theme.spacing(3),
      '& path': {
        fill: theme.palette.primary.main,
      },
    },
  },
}))
const Footer = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const date = new Date()

  const INFO_LIST = [
    {
      icon: <LocationIcon />,
      title: t('cp_v2.footer.paragraphs.0'),
    },
    {
      icon: <PhoneIcon />,
      title: '(852) 3613 0533',
      href: `tel:${SERVICE_PHONE}`,
      id: 'ECP_Footer_Telephone',
    },
    {
      icon: <MailIcon />,
      title: SERVICE_INFO_EMAIL,
      href: `mailto:${SERVICE_INFO_EMAIL}`,
      id: 'ECP_Footer_Email',
    },
  ]

  return (
    <Box pt={isMobile ? 3 : 5} pb={isMobile ? 3.5 : 6.5} px={2.5} bgcolor='#F6F6F6'>
      <Box mx='auto' maxWidth={1192}>
        <Box mb={4} width={isMobile ? 108 : 173}>
          <img width='100%' height='100%' src={Logo} alt='logo' />
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'
          mt={4}
          fontSize='body2.fontSize'
          fontWeight='fontWeightBold'
          color='grey.900'
        >
          {INFO_LIST.map((item, index) => (
            <Link to={item.href} target='_blank' key={index}>
              <Box mr={5} mb={1.5} alignItems='center' display='flex' id={item.id}>
                <Box mr={1} className={classes.icon}>
                  {item.icon}
                </Box>
                <Box fontWeight='500' display='inline-block' color='grey.900'>
                  {item.title}
                </Box>
              </Box>
            </Link>
          ))}
          <Box
            width={isMobile ? '100%' : 'auto'}
            fontWeight='500'
            display='inline-block'
            color='grey.900'
            pt={isMobile ? 0 : 0.5}
          >
            ©{date.getFullYear()} {t('common.take2_copy_right')}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
