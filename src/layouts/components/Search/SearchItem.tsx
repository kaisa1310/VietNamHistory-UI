import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

interface Props {
  name: string
  searchData: {
    name: string
    image: string
    link: string
  }[]
}

const SearchItem = (props: Props) => {
  const { name, searchData } = props
  return (
    <div className={cx('search-item')}>
      <div className={cx('search-title')}>
        <h5 className={cx('search-name')}>{name}</h5>
        <span className={cx('search-more')}>Xem thêm</span>
      </div>

      {searchData &&
        searchData.length > 0 &&
        searchData.map((item, index) => {
          return (
            <Link to={item.link} className={cx('search-info')} key={index}>
              <div className={cx('search-image')}>
                <img src={item.image} alt="" />
              </div>
              <span>{item.name}</span>
            </Link>
          )
        })}
    </div>
  )
}

export default SearchItem
