import classNames from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'

import { SIDEBAR_MENU } from '~/constants'
import { MenuItem } from '~/models'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className={cx('sidebar-wrapper')}>
      <div className={cx('sidebar-inner')}>
        <ul className={cx('sidebar-list')}>
          {SIDEBAR_MENU.map((item: MenuItem, index: number) => (
            <li className={cx('sidebar-item')} key={index}>
              <Link
                to={item.link}
                className={location.pathname === item.link ? cx('sidebar-link-active') : cx('sidebar-link')}
              >
                <div className={cx('sidebar-icon')}>{item.icon}</div>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
