import { ChangeEvent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlineClear } from 'react-icons/md'
import Tippy from '@tippyjs/react/headless'
import { IoIosSearch } from 'react-icons/io'
import 'tippy.js/dist/tippy.css'

import styles from './Search.module.scss'
import SearchItem from './SearchItem'

const cx = classNames.bind(styles)

interface searchResultData {
  image: string
  name: string
  link: string
}

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [showSearchHeader, setShowSearchHeader] = useState(false)
  const [searchResult, setSearchResult] = useState<searchResultData[]>([])

  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setSearchResult([
      {
        image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
        name: 'Xây Dựng Website với ReactJS',
        link: ''
      },
      {
        image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
        name: 'Xây Dựng Website với ReactJS',
        link: ''
      },
      {
        image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
        name: 'Xây Dựng Website với ReactJS',
        link: ''
      }
    ])
  }, [])

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue)
      setShowSearchHeader(true)
      setShowResult(true)
    }

    if (searchValue.trim() === '') {
      setShowResult(false)
    }
  }

  const handleFocus = () => {
    if (!searchValue.startsWith(' ')) {
      setShowResult(true)
    }
  }

  const handleClear = () => {
    setSearchValue('')
    setShowResult(false)
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  const handleHideResult = () => {
    setShowResult(false)
    setShowSearchHeader(false)
  }

  return (
    <div>
      <Tippy
        visible={showSearchHeader}
        interactive
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={cx('search-wrapper')} tabIndex={-1} {...attrs}>
            <div className={cx('search-header')}>
              <IoIosSearch className={cx('search-icon')} />
              <span className={cx('search-heading')}>Kết quả cho {searchValue}</span>
            </div>

            {searchResult && searchResult.length > 0 && showResult && (
              <div className={cx('search-result')}>
                <SearchItem name="Khóa Học" searchData={searchResult} />
                <SearchItem name="Bài Viết" searchData={searchResult} />
                <SearchItem name="Videos" searchData={searchResult} />
              </div>
            )}
          </div>
        )}
      >
        <div className={cx('header-with-search')}>
          <IoMdSearch className={cx('search-icon')} />
          <input
            value={searchValue}
            onChange={handleChangeSearch}
            onFocus={handleFocus}
            ref={searchInputRef}
            className={cx('header-input')}
            spellCheck="false"
            placeholder="Tìm kiếm khóa học, bài viết, video, ..."
          />
          {searchValue.trim().length > 0 ? <MdOutlineClear className={cx('icon-clear')} onClick={handleClear} /> : ''}
        </div>
      </Tippy>
    </div>
  )
}

export default Search
