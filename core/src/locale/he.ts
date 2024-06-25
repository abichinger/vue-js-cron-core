import type { Localization } from './types'

const locale: Localization = {
  '*': {
    prefix: 'בכל',
    suffix: '',
    text: 'לא ידוע',
    '*': {
      empty: { text: 'בכל {{field.id}}' },
      value: { text: '{{value.text}}' },
      range: { text: '{{start.text}}-{{end.text}}' },
      everyX: { text: 'בכל {{every.value}}' },
    },
    month: {
      '*': { prefix: 'ב' },
      value: { text: '{{value.alt}}' },
      range: { text: '{{start.alt}}-{{end.alt}}' },
    },
    day: {
      '*': { prefix: 'ב' },
      noSpecific: {
        text: 'ללא יום מוגדר',
      },
    },
    dayOfWeek: {
      '*': { prefix: 'ב' },
      empty: { text: 'כל יום מימות השבוע' },
      value: { text: '{{value.alt}}' },
      range: { text: '{{start.alt}}-{{end.alt}}' },
      noSpecific: {
        text: 'ללא יום בשבוע מוגדר',
      },
    },
    hour: {
      '*': { prefix: 'ב' },
    },
    minute: {
      '*': { prefix: ':' },
    },
    second: {
      '*': { prefix: ':' },
    },
  },
  minute: {
    text: 'דקה',
  },
  hour: {
    text: 'שעה',
    minute: {
      '*': {
        prefix: 'ב',
        suffix: 'דקות',
      },
      empty: { text: 'בכל' },
    },
  },
  day: {
    text: 'יום',
  },
  week: {
    text: 'שבוע',
  },
  month: {
    text: 'חודש',
    dayOfWeek: {
      '*': { prefix: 'ו' },
    },
  },
  year: {
    text: 'Year',
    dayOfWeek: {
      '*': { prefix: 'ו' },
    },
  },

  //quartz format
  'q-second': {
    text: 'שניה',
  },
  'q-minute': {
    text: 'דקה',
    second: {
      '*': {
        prefix: 'ב',
        suffix: 'שניות',
      },
      empty: { text: 'בכל' },
    },
  },
  'q-hour': {
    text: 'שעה',
    minute: {
      '*': {
        prefix: 'ב',
      },
    },
  },
}

export default locale
