import React from 'react'

interface loginProps {
  children: React.ReactNode
}

const LoginLayout: React.FC<loginProps> = ({ children }) => {
  return (
    <div>
      <div className="container">{children}</div>
      <h2>Footer</h2>
    </div>
  )
}

export default LoginLayout
