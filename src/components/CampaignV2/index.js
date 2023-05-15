import React, { useRef } from 'react'
import { makeStyles, createStyles, Box, Container } from '@material-ui/core'
import Sections from './Components/Sections'
import ContactReference from './Components/ContactReference'
import Footer from './Components/Footer'
import LazyLoad from '@components/LazyLoad'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& sup': {
        fontSize: theme.typography.caption.fontSize,
      },
    },
  })
)

const Page = ({ storyNodes, healthTipsNodes, imagesTranslation, athleteNodes }) => {
  const classes = useStyles()
  const el = useRef()

  return (
    <Box
      className={classes.root}
      id='scroll-to-top'
      ref={(current) => {
        el.current = current
      }}
      bgcolor='#FAFFFF'
    >
      <Container disableGutters maxWidth='lg'>
        <Sections storyNodes={storyNodes} healthTipsNodes={healthTipsNodes} athleteNodes={athleteNodes}></Sections>
        <LazyLoad>
          <ContactReference></ContactReference>
        </LazyLoad>
        <LazyLoad>
          <Footer></Footer>
        </LazyLoad>
      </Container>
    </Box>
  )
}

export default Page
