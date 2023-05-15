import React from 'react'
import { Box } from '@material-ui/core'
import SectionFour from './SectionFour'

const Sections = ({ storyNodes, healthTipsNodes, athleteNodes }) => {
  return (
    <>
      <Box id='gsap-scroll-to-section-four'>
        <SectionFour storyNodes={storyNodes} healthTipsNodes={healthTipsNodes}></SectionFour>
      </Box>
    </>
  )
}

export default Sections
