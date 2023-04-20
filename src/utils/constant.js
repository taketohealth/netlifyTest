import { MOBILE_REGEX_HK, MOBILE_REGEX_CN, MOBILE_REGEX_MO } from './regex'
export const HEADER_HEIGHT = 10.5
export const MOBILE_HEADER_HEIGHT = 7.5
export const POST_TIME_FORMAT = 'DD/MM/YYYY'
export const POST_TYPES = [
  { label: 'options.post_types.all_updates', value: '', color: '' },
  {
    label: 'options.post_types.company_trends',
    value: 'company_trends',
    color: 'supporting.supporting01',
  },
  {
    label: 'options.post_types.company_awards_and_achievements',
    value: 'company_awards_and_achievements',
    color: 'secondary.main',
  },
  {
    label: 'options.post_types.industry_information',
    value: 'industry_information',
    color: 'prophecySupporting.supporting01',
  },
]

export const DIALING_CODES = [
  {
    label: '+852',
    value: '852',
    regex: MOBILE_REGEX_HK,
  },
  {
    label: '+086',
    value: '086',
    regex: MOBILE_REGEX_CN,
  },
  {
    label: '+853',
    value: '853',
    regex: MOBILE_REGEX_MO,
  },
]

const QUIZ_ANSWERS = {
  type01: ['no', 'unclear', 'yes'],
  typeO2: ['never', 'rarely', 'sometimes', 'often'],
}

export const QUIZ = [
  {
    question: 'quiz.questions.0',
    answers: QUIZ_ANSWERS.type01,
  },
  {
    question: 'quiz.questions.1',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: 'quiz.questions.2',
    answers: QUIZ_ANSWERS.type01,
  },
  {
    question: 'quiz.questions.3',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: 'quiz.questions.4',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: 'quiz.questions.5',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
]

export const CAREER_REGIONS = [
  {
    label: 'options.career_regions.all',
    value: '',
  },
  {
    label: 'options.career_regions.hongkong_special_administrative_region',
    value: 'hongkong_special_administrative_region',
  },
  {
    label: 'options.career_regions.mainland_china',
    value: 'mainland_china',
  },
]

export const MOBILE_LABEL_WIDTH = 12