import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ColorChanger } from './ColorChanger/ColorChanger.jsx'
import { Counter } from './Counter/Counter.jsx'
import { ButtonWithLimit } from './ButtonWithLimit/ButtonWithLimit.jsx'
import { DataLoader } from './DataLoader/DataLoader.jsx'
import { OptimizedCounter } from './OptimizedCounter/OptimizedCounter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorChanger />
    <hr />
    <Counter />
    <hr />
    <ButtonWithLimit />
    <hr />
    <DataLoader />
    <hr />
    <OptimizedCounter />
  </StrictMode>,
)
