import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import advancedFormat from '../../src/plugin/advancedFormat'

dayjs.extend(advancedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format empty string', () => {
  expect(dayjs().format()).toBe(moment().format())
})

it('Format Quarter Q', () => {
  expect(dayjs().format('Q')).toBe(moment().format('Q'))
})

it('Format Timestamp X x', () => {
  expect(dayjs().format('X')).toBe(moment().format('X'))
  expect(dayjs().format('x')).toBe(moment().format('x'))
})

it('Format Day of Month Do 1 - 31', () => {
  expect(dayjs().format('Do')).toBe(moment().format('Do'))
  let d = '2018-05-02 00:00:00.000'
  expect(dayjs(d).format('Do')).toBe(moment(d).format('Do'))
  d = '2018-05-01 00:00:00.000'
  expect(dayjs(d).format('Do')).toBe(moment(d).format('Do'))
  d = '2018-05-03 00:00:00.000'
  expect(dayjs(d).format('Do')).toBe(moment(d).format('Do'))
  d = '2018-05-04 00:00:00.000'
  expect(dayjs(d).format('Do')).toBe(moment(d).format('Do'))
  d = '2018-05-11'
  expect(dayjs(d).format('Do')).toBe(moment(d).format('Do'))
  d = '2018-05-12'
  expect(dayjs(d).format('Do')).toBe(moment(d).format('Do'))
  d = '2018-05-13'
  expect(dayjs(d).format('Do')).toBe(moment(d).format('Do'))
  d = '2018-05-22'
  expect(dayjs(d).format('Do')).toBe(moment(d).format('Do'))
})

it('Format Hour k kk 24-hour 1 - 24', () => {
  expect(dayjs().format('k')).toBe(moment().format('k'))
  expect(dayjs().format('kk')).toBe(moment().format('kk'))
  let d = '2018-05-02 00:00:00.000'
  expect(dayjs(d).format('k')).toBe('24')
  expect(dayjs(d).format('k')).toBe(moment(d).format('k'))
  expect(dayjs(d).format('kk')).toBe('24')
  expect(dayjs(d).format('kk')).toBe(moment(d).format('kk'))
  d = '2018-05-02 01:00:00.000'
  expect(dayjs(d).format('k')).toBe('1')
  expect(dayjs(d).format('k')).toBe(moment(d).format('k'))
  expect(dayjs(d).format('kk')).toBe('01')
  expect(dayjs(d).format('kk')).toBe(moment(d).format('kk'))
  d = '2018-05-02 23:59:59.999'
  expect(dayjs(d).format('k')).toBe('23')
  expect(dayjs(d).format('k')).toBe(moment(d).format('k'))
  expect(dayjs(d).format('kk')).toBe('23')
  expect(dayjs(d).format('kk')).toBe(moment(d).format('kk'))
})
