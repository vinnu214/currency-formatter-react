import React from 'react'

// import { ExampleComponent } from 'currency-formatter-react'

import CurrencyFormatter from 'currency-formatter-react'

import 'currency-formatter-react/dist/index.css'

const App = () => {
  return (
    <React.Fragment>
      <CurrencyFormatter value={-1257600.505} currency='JPY' isFloat={true} />
      <CurrencyFormatter
        value={1257856.85}
        thousandSeparator={false}
        currency='INR'
        isFloat={true}
      />
    </React.Fragment>
  )
}

export default App
