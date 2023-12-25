import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <h2>Header</h2>
      {children}
      <h2>Footer</h2>
    </div>
  )
}

export default MainLayout
