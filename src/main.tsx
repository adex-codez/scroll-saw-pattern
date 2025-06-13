import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('app')!

import { RouterProvider } from '@tanstack/react-router'
import { createRouter } from './router'
const router = createRouter()

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}