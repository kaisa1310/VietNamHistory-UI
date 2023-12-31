import styles from './Header.module.scss'
import { getAccessTokenFromLocalStorage } from '~/utils'
import Search from '../Search'

import classNames from 'classnames/bind'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import 'tippy.js/dist/tippy.css'
import HeaderAction from './HeaderAction'
import HeaderAuth from './HeaderAuth'
import { MdArrowBackIos } from 'react-icons/md'

const cx = classNames.bind(styles)

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const currentUser = getAccessTokenFromLocalStorage

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header-logo')}>
          <Link to="/">
            <img src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="logo" />
          </Link>
          {location.pathname !== '/' ? (
            <p className={cx('header-back')} onClick={handleBack}>
              <MdArrowBackIos />
              Quay lại
            </p>
          ) : (
            <h4 className={cx('header-heading')}>Học Lịch Sử Trực Tuyến</h4>
          )}
        </div>

        {/* Search */}
        <Search />

        {currentUser ? <HeaderAction /> : <HeaderAuth />}
      </div>
    </header>
  )
}

export default Header
