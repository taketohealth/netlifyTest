import {
  object as yObject,
  string as yString,
  bool as yBool,
  array as yArray,
} from 'yup'

import { DIALING_CODES, QUIZ } from '@utils/constant'

export const oriSchema = (t) => {
  return yObject().shape(
    {
      requiredArea: yBool(),
      requiredName: yBool(),
      requiredEmailOrPhone: yBool(),
      companyName: yString()
        .nullable()
        .required(
          t('form.placeholder.enter', { field: t('form.company.label') })
        ),
      dialingCode: yString().nullable().required(),
      gender: yString()
        .nullable()
        .required(
          t('form.placeholder.select', { field: t('form.gender.label') })
        ),
      age: yString()
        .nullable()
        .required(t('form.placeholder.select', { field: t('form.age.label') })),
      quiz: yArray()
        .of(yString())
        .length(QUIZ.length)
        .required(t('form.validation.finish_quiz')),
      message: yString().nullable(),
      name: yString()
        .nullable()
        .when('requiredName', {
          is: true,
          then: yString().required(
            t('form.placeholder.enter', {
              field: t('form.contact.label'),
            })
          ),
        }),
      email: yString()
        .nullable()
        .email(
          t('form.validation.correct_form', { field: t('form.email.label') })
        )
        .when(
          ['phone', 'requiredEmailOrPhone'],
          (phoneArg, requiredEmailOrPhoneArg, schema) => {
            if (requiredEmailOrPhoneArg && phoneArg) return schema.notRequired()
            return schema.required(
              t('form.placeholder.enter', { field: t('form.email.label') })
            )
          }
        ),
      phone: yString()
        .nullable()
        .when(
          ['dialingCode', 'email', 'requiredEmailOrPhone'],
          (dialingCodeArg, emailArg, requiredEmailOrPhoneArg, schema) => {
            const activeDialingCode = DIALING_CODES.find(
              (dialingCode) => dialingCode.value === dialingCodeArg
            )
            if (requiredEmailOrPhoneArg && !emailArg)
              return schema
                .matches(
                  new RegExp(activeDialingCode?.regex),
                  t('form.validation.correct_form', {
                    field: t('form.phone.label'),
                  })
                )
                .required(
                  t('form.placeholder.enter', { field: t('form.phone.label') })
                )

            return schema
              .matches(
                new RegExp(activeDialingCode?.regex),
                t('form.validation.correct_form', {
                  field: t('form.phone.label'),
                })
              )
              .notRequired()
          }
        ),
      agreeTC: yBool().isTrue(t('form.validation.check_agreement')),
      area: yString()
        .nullable()
        .when('requiredArea', {
          is: true,
          then: yString().required(
            t('form.placeholder.select', { field: t('form.region.label') })
          ),
        }),
    },
    ['email', 'phone']
  )
}
