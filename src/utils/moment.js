import moment from 'moment'
import { POST_TIME_FORMAT } from './constant'

export const formatLocal = (date) => moment(date)?.local()?.format(POST_TIME_FORMAT)
