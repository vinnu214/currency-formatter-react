# currency-formatter-react

React component to format number in various currencies

### Installations

[![npm](https://img.shields.io/npm/dm/currency-formatter-react.svg)](https://www.npmjs.com/package/currency-formatter-react)

Through npm

```bash
npm install --save currency-formatter-react
```

## Usage

```jsx
import CurrencyFormatter from 'currency-formatter-react'
```

### Props

| Props             | Options | Default | Description                              |
| ----------------- | ------- | ------- | ---------------------------------------- |
| value             | number  | none    | Value which need to be format            |
| thousandSeparator | boolean | true    | Add thousand separators on number        |
| currency          | string  | USD     | Add Currency Code (INR , USD , GBP ..)   |
| isFloat           | boolean | false   | make this prop to true if value is float |

### Supported Currencies

| Currency Code | Currency           | Symbol |
| ------------- | ------------------ | ------ |
| CAD           | Canadian Dollar    | $      |
| EUR           | Euro               | €      |
| GBP           | Great Britan Pound | £      |
| INR           | Indian Rupee       | ₹      |
| JPY           | Japanese Yen       | ¥      |
| LKR           | Sri Lanka Rupee    | Rs     |
| NZD           | New Zealand Dollar | $      |
| SGD           | Singapore Dollar   | $      |
| THB           | Baht               | ฿      |
| USD           | US Dollar          | $      |
| ZAR           | Rand               | r      |

### Examples

```jsx
<CurrencyFormatter value={1257856} thousandSeparator={true} currency='USD' />
```

Output : $ 1,257,856

```jsx
<CurrencyFormatter value={1257856} currency='INR' />
```

Output : ₹ 1,257,856

```jsx
<CurrencyFormatter value={1257856} thousandSeparator={true} currency='GBP' />
```

Output : £ 1,257,856

```jsx
<CurrencyFormatter
  value={1257856.85}
  currency='INR'
  thousandSeparator={false}
  isFloat={true}
/>
```

Output : ₹ 12,57,856.85

## License

MIT © [vinnu214](https://github.com/vinnu214)
