import React, { useState } from 'react'
import { makeStyles, useMediaQuery, Grid, Container, alpha } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import useMenu from '@hooks/useMenu'
import useSiteMetadata from '@hooks/useSiteMetadata'
import PhoneIcon from '@images/icons/phone.svg'
import WhatsappIcon from '@images/icons/whatsapp.svg'
import EmailIcon from '@images/icons/mail.svg'
import SocialLinks from '@layouts/SocialLinks'
import { EAccordion, EAccordionSummary, EAccordionDetails } from '@themes/components/EAccordion'
import ArrowIcon from '@images/icons/arrow.svg'
import Link from '@components/Link'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import LanguageButton from '../LanguageButton'
import { T_AND_C } from '../../utils/constant'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(66.5),
    paddingBottom: theme.spacing(4),
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      padding: theme.spacing(3, 1),
      paddingTop: 0,
      paddingBottom: theme.spacing(10.5),
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(4.5),
      width: theme.spacing(16.25),
    },
  },
  container: {
    paddingTop: theme.spacing(10),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
    },
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      marginBottom: 0,
    },
  },
  arrowIcon: {
    transform: 'rotate(90deg)',
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  copyRight: {
    fontSize: theme.typography.caption.fontSize,
    display: 'flex',
    marginTop: 'auto',
    flexWrap: 'wrap',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(6),
    },
  },
  copyRightLink: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(3),
    },
  },
  infoWrapper: {
    height: '100%',
  },
  infoIcon: {
    paddingRight: theme.spacing(1),
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  accordionSummaryRoot: {
    [theme.breakpoints.down('xs')]: {
      minHeight: theme.spacing(9),
      borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
      padding: 0,
      '&.Mui-expanded': {
        minHeight: theme.spacing(9),
      },
    },
  },
  accordionSummaryContent: {
    flexGrow: 1,
  },
  accordionDetailsRoot: {
    paddingTop: 0,
    paddingBottom: 0,

    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(3),
    },
  },
  menuWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: theme.spacing(36),
    [theme.breakpoints.down('xs')]: {
      maxHeight: 'none',
    },
  },
  isEnMenuWrapper: {
    maxHeight: theme.spacing(50),
    [theme.breakpoints.down('xs')]: {
      maxHeight: 'none',
    },
  },
  menuItem: {
    width: '100%',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },

  languageBtn: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const Footer = () => {
  const classes = useStyles()
  const { language, t } = useI18next()
  const isEn = language === 'en'
  const matches = useMediaQuery((theme) => theme.breakpoints.down('xs'))
  const menu = useMenu()
  const { email, phone, whatsapp, whatsappAccount } = useSiteMetadata()
  const [panel, setPanel] = useState('')
  const date = new Date()
  const handleChange = (activePanel) => (e, isExpanded) => setPanel(isExpanded ? activePanel : '')

  const CopyRights = (params) => (
    <Box className={classes.copyRight}>
      <Box className={classes.copyRightLink} width={matches ? '100%' : 'auto'} mb={matches ? 2 : 0}>
        ©{date.getFullYear()} {t('common.take2_copy_right')}
      </Box>
      <Link className={classnames(classes.link, classes.copyRightLink)} to={T_AND_C.PRIVACY_POLICY.url}>
        {t(T_AND_C.PRIVACY_POLICY.label)}
      </Link>
      {/* <Link className={classnames(classes.link, classes.copyRightLink)} to='/'>
        服務條款
      </Link>
      <Link
        className={classnames(classes.link, classes.copyRightLink)}
        to='/terms-and-conditions/免責聲明'
      >
        免責聲明
      </Link> */}
      <Link className={classnames(classes.link, classes.copyRightLink)} to={T_AND_C.WEBSITE_TERMS_OF_USE.url}>
        {t(T_AND_C.WEBSITE_TERMS_OF_USE.label)}
      </Link>
      <Link
        className={classnames(classes.link, classes.copyRightLink)}
        to={T_AND_C.PERSONAL_INFORMATION_COLLECTION_STATEMENT.url}
      >
        {t(T_AND_C.PERSONAL_INFORMATION_COLLECTION_STATEMENT.label)}
      </Link>
      <LanguageButton className={classnames(classes.languageBtn, classes.copyRightLink)}></LanguageButton>
    </Box>
  )
  const menuItem = (index) => {
    const item = index === 1 ? { ...menu?.[index], sections: menu?.[index]?.sections.filter((ele)=>(ele.path === '/our-technologies/clinical-papers/'))} : menu?.[index]
    return item ? (
      <Box
        className={classnames(classes.menuWrapper, {
          [classes.isEnMenuWrapper]: isEn,
        })}
      >
        <Box key={index} className={classnames(classes.menuItem)}>
          <EAccordion
            expanded={!matches || item.path === panel}
            square
            onChange={handleChange(!matches || !item.sections?.length ? '' : item.path)}
          >
            <EAccordionSummary
              expandIcon={matches && item.sections?.length && <ArrowIcon className={classes.arrowIcon} />}
              aria-controls='panel1a-content'
              id='panel1a-header'
              classes={{
                root: classes.accordionSummaryRoot,
                content: classes.accordionSummaryContent,
              }}
            >
              {matches && item.sections?.length ? (
                <Box fontSize='body1.fontSize' fontWeight='fontWeightBold' className={classes.link}>
                  {t(item.title)}
                </Box>
              ) : (
                <Link className={classes.link} to={item.path}>
                  <Box fontSize='body1.fontSize' fontWeight='fontWeightBold'>
                    {t(item.title)}
                  </Box>
                </Link>
              )}
            </EAccordionSummary>
            {item.sections?.length && (
              <EAccordionDetails
                classes={{
                  root: classes.accordionDetailsRoot,
                }}
              >
                <Typography variant='body2' component='div'>
                  {item.sections.map((tab) => (
                    <Box
                      mt={1}
                      key={tab.title}
                      id={tab.title === 'menu.take2_clarity' ? 'RW_Product_Clarity_Menu' : ''}
                    >
                      <Link to={tab.path} className={classes.link}>
                        {t(tab.title)}
                      </Link>
                    </Box>
                  ))}
                </Typography>
              </EAccordionDetails>
            )}
          </EAccordion>
        </Box>
      </Box>
    ) : null
  }

  return (
    <Box className={classes.root}>
      <Container className={classes.container} maxWidth='md'>
        <Grid container>
          <Grid className={classes.infoWrapper} item xs={12} sm={3} md={4}>
            <Box width={matches ? 100 : 145}>
              <StaticImage src='../../assets/images/common/take2_white_orange.png' alt='Logo' placeholder='tracedSVG' />
            </Box>
            <Box mt={matches ? 4 : 5}>
              <a href={`tel:${phone}`} className={classes.link}>
                <Box display='flex' mb={matches ? 1 : 1.5} alignItems='center'>
                  <PhoneIcon className={classes.infoIcon}></PhoneIcon>
                  {phone}
                </Box>
              </a>
              <a href={whatsapp} className={classes.link} target='_blank' rel='noreferrer'>
                <Box display='flex' mb={matches ? 1 : 1.5} alignItems='center'>
                  <WhatsappIcon className={classes.infoIcon}></WhatsappIcon>
                  {whatsappAccount}
                </Box>
              </a>
              <a href={`mailto:${email}`} className={classes.link}>
                <Box display='flex' alignItems='center'>
                  <EmailIcon className={classes.infoIcon}></EmailIcon>
                  {email}
                </Box>
              </a>
            </Box>
            <Box mb={matches ? 5 : 0} display='inline-block'>
              <Divider className={classes.divider} />
              <Box mb={0.5}>{t('common.follow_us')}</Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={8} spacing={0} container>
              <Grid item xs={12} sm={4}>
                {menuItem(0)}
              </Grid>
              <Grid item xs={12} sm={4}>
                {menuItem(4)}
              </Grid>
              <Grid item xs={12} sm={4}>
                {menuItem(1)}
              </Grid>
          </Grid>
        </Grid>
        <CopyRights></CopyRights>
      </Container>
    </Box>
  )
}

export default Footer
