import React from 'react'
import classNames from 'classnames/bind'

import styles from './MainLayout.module.scss'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const cx = classNames.bind(styles)
interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <main className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
