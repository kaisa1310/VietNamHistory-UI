import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './MenuHeader.module.scss'

const cx = classNames.bind(styles)

interface Props {
  heading: string
  to?: string
}

const MenuHeader = (props: Props) => {
  const { heading, to } = props

  return (
    <div className={cx('header')}>
      <h6 className={cx('heading')}>{heading}</h6>
      {to ? (
        <Link to={to} className={cx('get-all')}>
          Xem tất cả
        </Link>
      ) : (
        <span className={cx('get-all')}>Xem tất cả</span>
      )}
    </div>
  )
}

export default MenuHeader
