import Button from '~/components/Button'
import styles from './Header.module.scss'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const HeaderAuth = () => {
  return (
    <div className={cx('header-auth')}>
      <Button>Đăng nhập</Button>
      <Button primary>Đăng ký</Button>
    </div>
  )
}

export default HeaderAuth
