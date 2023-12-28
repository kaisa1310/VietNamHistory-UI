import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Sidebar.module.scss'
import { MENU } from '~/constants'
import { MenuItem } from '~/models'

const Sidebar = () => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('sidebar-wrapper')}>
      <div className={cx('sidebar-inner')}>
        <ul className={cx('sidebar-list')}>
          {MENU.map((item: MenuItem, index: number) => (
            <li className={cx('sidebar-item')} key={index}>
              <Link to={item.link} className={cx('sidebar-link')}>
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
