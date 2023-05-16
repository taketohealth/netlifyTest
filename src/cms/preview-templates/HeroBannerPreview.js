import React from 'react'
import { HeroBannerTemplate } from '@components/Homepage/Banner'

const TAndCPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return data ? <HeroBannerTemplate data={data}></HeroBannerTemplate> : null
}

export default TAndCPreview
