import React from 'react'
import {
  withStyles,
  makeStyles,
  useMediaQuery,
  useTheme,
  InputAdornment,
  InputBase,
  FormLabel,
  Select,
  Box,
  NativeSelect,
  MenuItem,
} from '@material-ui/core'
import { MOBILE_LABEL_WIDTH } from '../../utils/constant'
import classnames from 'classnames'
import CancelIcon from '@images/icons/cancel.svg'
import CheckCircleIcon from '@images/icons/check_circle.svg'

const useStyles = makeStyles((theme) => ({
  selectRoot: {
    paddingTop: 0,
    paddingBottom: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  selectOutLined: {
    paddingRight: `${theme.spacing(1)}px !important`,
  },
  selectInputBaseRoot: {
    paddingTop: `0 !important`,
    paddingBottom: `0 !important`,
    paddingRight: `${theme.spacing(3)}px !important`,
  },
  cancelIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '& svg': {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
    '& path': {
      fill: theme.palette.error.main,
    },
  },
  activeCancelIcon: {
    '& path': {
      fill: theme.palette.grey[400],
    },
  },
  successIcon: {
    '& path:first-child': {
      fill: theme.palette.success.main,
    },
    '& path:last-child': {
      fill: theme.palette.primary.contrastText,
    },
  },
}))

export const EInputBase = withStyles((theme) => ({
  root: {
    'label + &': {},
    borderRadius: theme.spacing(1),
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[300]}`,
    fontSize: theme.typography.body2.fontSize,
    padding: theme.spacing(0.5, 1.5),
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    color: theme.palette.supporting.supporting03,
    height: theme.spacing(7),
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.overline.fontSize,
      height: theme.spacing(5.625),
    },
    '&::placeholder': {
      color: 'red',
    },
  },
  focused: {
    boxShadow: ` ${theme.palette.primary.main} 0 0 0 1px`,
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
  },
  error: {
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main,
    boxShadow: 'none',
    '&:hover': {
      borderColor: theme.palette.error.main,
    },
  },
  input: {
    WebkitBoxShadow: '0 0 0 1000px white inset',
  },
}))(InputBase)

export const EFormLabel = withStyles((theme) => ({
  root: {
    fontWeight: 'bolder',
    fontSize: theme.typography.overline.fontSize,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      minWidth: theme.spacing(MOBILE_LABEL_WIDTH),
      fontSize: theme.typography.overline.fontSize,
    },
  },
}))(FormLabel)

const menuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: -12,
  },
  transformOrigin: {
    vertical: -8,
    horizontal: 'left',
  },
  getContentAnchorEl: null,
}

export const EMenuItem = ({ children, ...rest }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    noSsr: true,
  })

  return isMobile ? (
    <option {...rest}>{children}</option>
  ) : (
    <MenuItem {...rest}>{children}</MenuItem>
  )
}

export const ESelect = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return isMobile ? (
    <NativeSelect
      classes={{
        root: classes.selectRoot,
        outlined: classes.selectOutLined,
      }}
      input={<EInputBase classes={{ root: classes.selectInputBaseRoot }} />}
      {...props}
    >
      {props.children}
    </NativeSelect>
  ) : (
    <Select
      classes={{
        root: classes.selectRoot,
      }}
      MenuProps={menuProps}
      input={<EInputBase classes={{ root: classes.selectInputBaseRoot }} />}
      displayEmpty
      {...props}
    >
      {props.children}
    </Select>
  )
}

export const CancelButton = ({ values, touched, errors, field, onCancel }) => {
  const classes = useStyles()
  return values[field] ? (
    <InputAdornment position='end'>
      <Box
        className={classnames(
          classes.cancelIcon,
          !(touched[field] && errors[field]) && classes.activeCancelIcon,
          touched[field] && !errors[field] && classes.successIcon
        )}
        onClick={() => onCancel && onCancel(field)}
      >
        {touched[field] && !errors[field] ? (
          <CheckCircleIcon></CheckCircleIcon>
        ) : (
          <CancelIcon></CancelIcon>
        )}
      </Box>
    </InputAdornment>
  ) : null
}
