import React from 'react'

// import { ExampleComponent } from 'currency-formatter-react'

import CurrencyFormatter from 'currency-formatter-react'

import 'currency-formatter-react/dist/index.css'

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  return <CurrencyFormatter value={1257600} currency='INR' />
}

export default App
