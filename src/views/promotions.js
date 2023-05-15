import React from 'react'
import PostList from '@components/WhatsNew/PostList'
import { useI18next } from 'gatsby-plugin-react-i18next'

const Promotions = ({ data }) => {
  const { t } = useI18next()

  return (
    <PostList
      title={t('whats_new.promotions.title')}
      caption={t('whats_new.promotions.detail')}
      nodes={data?.allMdx?.nodes}
    ></PostList>
  )
}

export default Promotions
