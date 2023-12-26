import React from 'react'
import classNames from 'classnames/bind'

import styles from './MainLayout.module.scss'
import Header from '../components/Header'

const cx = classNames.bind(styles)
interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <main className={cx('container')}>
        <h2>Sidebar</h2>
        <div className={cx('content')}>{children}</div>
      </main>
      <h2>Footer</h2>
    </div>
  )
}

export default MainLayout
