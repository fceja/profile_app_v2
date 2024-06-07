import React from 'react'
import ReactDOM from 'react-dom/client'

import Root from '@components/Root.tsx'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  )
}
