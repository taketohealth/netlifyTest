import React from 'react'
import { makeStyles, Box, Typography, Link, Container } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.grey[800],
  },
  header: {
    textAlign: 'center',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 0),
      fontSize: theme.typography.h6.fontSize,
      textAlign: 'left',
    },
  },
  subHeader: {
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  subTitle: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      textAlign: 'left',
    },
  },
  content: {
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(6),
    },
  },
  imageWrapper: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      marginBottom: theme.spacing(1),
    },
  },
  image: {
    maxWidth: '100%',
  },
}))

const RehealthPrevaccinationPlans = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth='md' target='_blank'>
      <Typography variant='body1' component='div'>
        <Box className={classes.header}>
          Take2 Health聯乘 re:HEALTH推出《接種疫苗前全面心臟功能體檢計劃》
          <Box className={classes.subHeader}>
            期間限定、欲購從速！
            <br />
            {`請即按<點擊查看優惠>以獲取更多測試詳情。`}
          </Box>
        </Box>
        <Link className={classes.image} href='https://bit.ly/rehealthplatinumplan' target='_blank'>
          <Container className={classes.imageWrapper} maxWidth='sm'>
            <StaticImage
              className={classes.image}
              src='../../../assets/images/campaign/rehealth_plan_01.jpg'
              alt='rehealth plan 01'
            ></StaticImage>
          </Container>
        </Link>
        <Box className={classes.subTitle}>計劃一：白金級無創心臟全功能及早期鼻咽癌篩查計劃</Box>
        <Box className={classes.content}>
          適合所有關注心臟和鼻咽健康的人士。引入獲美國太空總署NASA為宇航員作心臟表現測試的HOTMAN
          System，只需平臥放鬆即可收集心血管數據，得出是否有高血壓、中風或心臟衰竭等循環系統問題及提供全面心臟功能評估。Take2
          Prophecy™ 早期鼻咽癌篩查由頂尖大學研發，準確度高達97%，助你了解鼻咽健康狀態。
        </Box>
        <Link href='https://bit.ly/rehealthdiamondplan' target='_blank'>
          <Container className={classes.imageWrapper} maxWidth='sm'>
            <StaticImage
              className={classes.image}
              src='../../../assets/images/campaign/rehealth_plan_02.jpg'
              alt='rehealth plan 02'
            ></StaticImage>
          </Container>
        </Link>

        <Box className={classes.subTitle}>計劃二：鑽石級高階心血管造影及早期鼻咽癌篩查計劃</Box>
        <Box className={classes.content}>
          適合30歲或以上、對心血管和鼻咽健康有更深入了解需求的人士。此計劃為有家族史、懷疑有心血管疾病或有鼻咽癌病徵等高風險人士提供全面而精確的篩查服務。利用電腦掃描冠狀動脈造影，有效協助診斷冠狀動脈病變；計劃包括Take2
          Prophecy™ 早期鼻咽癌篩查，準確度高達97%。完成檢查後，有醫生作專業分析和評估。{' '}
        </Box>
      </Typography>
    </Container>
  )
}

export default RehealthPrevaccinationPlans

// export async function config() {
//   // Optionally use GraphQL here

//   return ({ params }) => {
//     return {
//       defer: true,
//     }
//   }
// }
