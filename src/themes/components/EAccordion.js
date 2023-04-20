import { withStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'

export const EAccordion = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: theme.palette.primary.contrastText,
    padding: `0px !important`,
    height: 'auto !important',
    '&.Mui-expanded': {
      margin: 0,
    },
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.contrastText,
    },
    '&:before': {
      display: 'none',
    },
  },
}))(Accordion)

export const EAccordionSummary = withStyles((theme) => ({
  root: {
    minHeight: theme.spacing(6),
    '&.Mui-expanded': {
      minHeight: 'auto',
    },
    justifyContent: 'left',
    '&.Mui-disabled': {
      opacity: 1,
    },
  },
  content: {
    margin: 0,
    flexGrow: 0,
    '&.Mui-expanded': {
      margin: 0,
      minHeight: 'auto',
    },
  },
}))(AccordionSummary)

export const EAccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    marginBottom: 0,
  },
}))(AccordionDetails)
