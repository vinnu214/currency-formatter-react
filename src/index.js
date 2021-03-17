import React from 'react'
import styles from './styles.module.css'

const CurrencyFormatter = ({ value, currency, thousandsSeparator }) => {
  const currencies = {
    INR: '₹',
    USD: '$',
    CAD: '$',
    SGD: '$',
    GBP: '£',
    EUR: '€',
    LKR: 'Rs',
    JPY: '¥',
    CNY: '¥',
    THB: '฿',
    ZAR: 'R'
  }
  const formatValue = (value, isThouSep = false) => {
    if (value > 999) {
      const strVal = value.toString().split('')
      var defaultSepInd = strVal.length - 3
      var sepGap = isThouSep ? 3 : 2
      strVal.splice(defaultSepInd, 0, ',')
      for (let i = defaultSepInd - sepGap; i > 0; i = i - sepGap) {
        strVal.splice(i, 0, ',')
      }
      return strVal.join('')
    } else {
      return value
    }
  }
  const isUndefined = (value) => typeof value === 'undefined'
  const formattedCurrency =
    parseInt(value) >= 0
      ? currencies[currency] +
        ' ' +
        (isUndefined(value) ? 0 : formatValue(value, thousandsSeparator))
      : ''

  return <div className={styles.test}>{formattedCurrency}</div>
}

export default CurrencyFormatter
