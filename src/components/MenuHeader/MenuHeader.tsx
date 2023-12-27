import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './MenuHeader.module.scss'

const cx = classNames.bind(styles)

interface Props {
  heading: string
}

const MenuHeader = (props: Props) => {
  const { heading } = props

  return (
    <div className={cx('header')}>
      <h6 className={cx('heading')}>{heading}</h6>
      <Link to="" className={cx('get-all')}>
        Xem tất cả
      </Link>
    </div>
  )
}

export default MenuHeader
