import styles from './Header.module.scss'
import Image from '~/components/Image'

import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import MenuHeader from '~/components/MenuHeader'

const cx = classNames.bind(styles)

const HeaderAction = () => {
  return (
    <div className={cx('header-actions')}>
      {/* My learn */}
      <div>
        <Tippy
          interactive
          offset={[-118, 10]}
          trigger="click"
          render={(attrs) => (
            <div className={cx('my-course')} {...attrs} tabIndex={-1}>
              <MenuHeader heading="Khóa học của tôi" />
              <div className={cx('course-list')}>
                <div className={cx('course-item')}>
                  <div className={cx('course-img')}>
                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/2.png" alt="" />
                  </div>
                  <div className={cx('course-info')}>
                    <h3 className={cx('course-name')}>HTML CSS từ Zero đến Hero</h3>
                    <p className={cx('course-last-completed')}>Học cách đây 10 giờ trước</p>
                    <div
                      className={cx('course-progress')}
                      style={{ '--progresst': '96%' } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        >
          <button className={cx('myLearn')}>Khóa học của tôi</button>
        </Tippy>
      </div>

      {/* Notification */}
      <div>
        <Tippy
          interactive
          offset={[0, 10]}
          trigger="click"
          render={(attrs) => (
            <div className={cx('notification')} {...attrs} tabIndex={-1}>
              <MenuHeader heading="Thông báo" />
              <div className={cx('noti-list')}>
                <div className={cx('noti-item')}>
                  <div className={cx('noti-img')}>
                    <img src="https://fullstack.edu.vn/assets/images/f8_avatar.png" alt="" />
                  </div>
                  <div className={cx('noti-info')}>
                    <div className={cx('noti-name')}>Bài học Mua áo F8 | Đăng ký học Offline mới được thêm vào.</div>
                    <div className={cx('noti-created')}>một tháng trước</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        >
          <Link to="">
            <FaBell className={cx('header-icon')} />
          </Link>
        </Tippy>
      </div>

      {/* Avatart */}
      <div>
        <Tippy
          interactive
          trigger="click"
          render={(attrs) => (
            <div className={cx('header-menu')} {...attrs} tabIndex={-1}>
              <div className={cx('user-account')}>
                <div className={cx('user-avatar')}>
                  <Image
                    src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                    alt="avatar"
                  />
                </div>
                <div className={cx('user-info')}>
                  <span className={cx('user-name')}>Nguyễn Quang Huy</span>
                  <div className={cx('user-nickname')}>@huynguyenquang</div>
                </div>
              </div>
              <hr />
              <div className={cx('user-menu')}>
                <ul className={cx('menu-list')}>
                  <li className={cx('menu-item')}>
                    <Link to="">Trang cá nhân</Link>
                  </li>
                </ul>
                <hr />
                <ul className={cx('menu-list')}>
                  <li className={cx('menu-item')}>
                    <Link to="">Viết blog</Link>
                  </li>
                  <li className={cx('menu-item')}>
                    <Link to="">Bài viết của tôi</Link>
                  </li>
                </ul>
                <hr />
                <ul className={cx('menu-list')}>
                  <li className={cx('menu-item')}>
                    <Link to="">Bài viết đã lưu</Link>
                  </li>
                </ul>
                <hr />
                <ul className={cx('menu-list')}>
                  <li className={cx('menu-item')}>
                    <Link to="">Cài đặt</Link>
                  </li>
                  <li className={cx('menu-item')}>
                    <Link to="">Đăng xuất</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        >
          <div className={cx('header-avatar')}>
            <Image src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" alt="avatar" />
          </div>
        </Tippy>
      </div>
    </div>
  )
}

export default HeaderAction
