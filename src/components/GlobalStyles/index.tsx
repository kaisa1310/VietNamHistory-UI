import React from 'react'
import './GlobalStyles.scss'

interface GlobalStylesProps {
  children: React.ReactNode
}

function GlobalStyles({ children }: GlobalStylesProps) {
  return <div>{children}</div>
}

export default GlobalStyles
