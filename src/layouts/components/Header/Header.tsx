import styles from './Header.module.scss'
import Button from '~/components/Button'

import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import { getAccessTokenFromLocalStorage } from '~/utils'
import Search from '../Search'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

const Header = () => {
  const currentUser = getAccessTokenFromLocalStorage

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header-logo')}>
          <Link to="/">
            <img src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="logo" />
          </Link>
          <h4 className={cx('header-heading')}>Học Lịch Sử Trực Tuyến</h4>
        </div>

        {/* Search */}
        <Search />

        {currentUser ? (
          <div className={cx('header-actions')}>
            <Button className={cx('myLearn')}>Khóa học của tôi</Button>
            <FaBell className={cx('header-icon')} />
            <div className={cx('header-avatar')}>
              <Image
                src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                alt="avatar"
              />
            </div>
          </div>
        ) : (
          <div className={cx('header-auth')}>
            <Button>Đăng nhập</Button>
            <Button primary>Đăng ký</Button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
