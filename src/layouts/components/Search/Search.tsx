import { ChangeEvent, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineClear } from 'react-icons/md'

import styles from './Search.module.scss'

const cx = classNames.bind(styles)

const Search = () => {
  const [searchValue, setSearchValue] = useState('')

  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue)
    }
  }

  const handleClear = () => {
    setSearchValue('')
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  return (
    <div className={cx('header-with-search')}>
      <IoMdSearch className={cx('search-icon')} />
      <input
        value={searchValue}
        onChange={handleChangeSearch}
        ref={searchInputRef}
        className={cx('header-input')}
        spellCheck="false"
        placeholder="Tìm kiếm khóa học, bài viết, video, ..."
      />
      {searchValue.trim().length > 0 ? <MdOutlineClear className={cx('icon-clear')} onClick={handleClear} /> : ''}
    </div>
  )
}

export default Search
