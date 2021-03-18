import React from 'react'
import styles from './styles.module.css'

const CurrencyFormatter = ({
  value,
  currency = 'USD',
  thousandSeparator = true,
  isFloat = false
}) => {
  const setCurrencyCode = (code) => {
    switch (code) {
      case 'INR':
        return '₹'
      case 'GBP':
        return '£'
      case 'EUR':
        return '€'
      case 'LKR':
        return 'Rs'
      case 'JPY':
        return '¥'
      case 'CNY':
        return '¥'
      case 'THB':
        return '฿'
      case 'ZAR':
        return 'R'
      default:
        return '$'
    }
  }

  const formatIntValue = (value, isThouSep) => {
    if (value > 999) {
      const strVal = value.toString().split('')
      const defaultSepInd = strVal.length - 3
      const sepGap = isThouSep ? 3 : 2
      strVal.splice(defaultSepInd, 0, ',')
      for (let i = defaultSepInd - sepGap; i > 0; i = i - sepGap) {
        strVal.splice(i, 0, ',')
      }
      return strVal.join('')
    } else if (value < -999) {
      const strVal = value.toString().replace('-', '').split('')
      const defaultSepInd = strVal.length - 3
      const sepGap = isThouSep ? 3 : 2
      strVal.splice(defaultSepInd, 0, ',')
      for (let i = defaultSepInd - sepGap; i > 0; i = i - sepGap) {
        strVal.splice(i, 0, ',')
      }
      strVal.unshift('-')
      return strVal.join('')
    } else {
      return value
    }
  }
  const formatFloatValue = (value, thousandSeparator) => {
    const [intValue, decimal] = value.toString().split('.')
    const intPart = formatIntValue(intValue, thousandSeparator)
    return intPart + '.' + decimal
  }
  const isUndefined = (value) => typeof value === 'undefined'
  const formattedCurrency = !isNaN(parseInt(value))
    ? setCurrencyCode(currency) +
      ' ' +
      (isUndefined(value)
        ? 0
        : isFloat
        ? formatFloatValue(value, thousandSeparator)
        : formatIntValue(value, thousandSeparator))
    : ''

  return <div className={styles.test}>{formattedCurrency}</div>
}

export default CurrencyFormatter
