import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryDevtools } from 'react-query-devtools'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { MamaProvider } from './state-management/context'

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
    <MamaProvider>
      <App />
    </MamaProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
