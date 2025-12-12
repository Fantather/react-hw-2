import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ColorChanger } from './ColorChanger/ColorChanger.jsx'
import { Counter } from './Counter/Counter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorChanger />
    <hr />
    <Counter />
    <hr />
  </StrictMode>,
)
