import React from 'react'
import ReactDOM from 'react-dom'
// import { ReactQueryConfigProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { MamaProvider } from './state-management/context'

// const queryConfig = {
//   refetchAllOnWindowsFocus: true,
//   retry: 1,
//   staleTime: 60000,
// }

ReactDOM.render(
  <React.StrictMode>
    <MamaProvider>
      <App />
    </MamaProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
