import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

import styles from './Footer.module.scss'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer-wrapper')}>
      <div className={cx('footer-inner')}>
        <ul className={cx('footer-list')}>
          <li className={cx('footer-item')}>
            <h4 className={cx('footer-heading')}>
              <img src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="logo" />
              VIETNAM HISTORY
            </h4>
            <p className={cx('footer-text')}>
              <strong>Điện thoại</strong>: 0352223905
            </p>
            <p className={cx('footer-text')}>
              <strong>Email</strong>: huynqph37225@fpt.edu.vn
            </p>
            <p className={cx('footer-text')}>
              <strong>Địa chỉ</strong>: Cao đẳng FPT Phố Trịnh Văn Bô, Phường Phương Canh, Quận Nam Từ Liêm, Hà Nội
            </p>
          </li>
          <li className={cx('footer-item')}>
            <h4 className={cx('footer-heading')}>Về chúng tôi</h4>
            <Link to="" className={cx('footer-link')}>
              Giới thiệu
            </Link>
            <Link to="" className={cx('footer-link')}>
              Liên hệ
            </Link>
            <Link to="" className={cx('footer-link')}>
              Điều khoản
            </Link>
            <Link to="" className={cx('footer-link')}>
              Bảo mật
            </Link>
          </li>
          <li className={cx('footer-item')}>
            <h4 className={cx('footer-heading')}>Liên hệ với chúng tôi</h4>
            <Link to="" className={cx('footer-link')}>
              <FaFacebookSquare className={cx('footer-icon')} />
              Facebook
            </Link>
            <Link to="" className={cx('footer-link')}>
              <FaYoutube className={cx('footer-icon')} />
              Youtube
            </Link>
            <Link to="" className={cx('footer-link')}>
              <CgMail className={cx('footer-icon')} />
              Gmail
            </Link>
          </li>
          <li className={cx('footer-item')}>
            <h4 className={cx('footer-heading')}>Nhận thông báo</h4>
            <div className={cx('footer-input')}>
              <input placeholder="Nhập email của bạn" type="email" />
              <Button primary>Gửi</Button>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
