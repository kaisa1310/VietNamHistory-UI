import { MenuItem } from '~/models'

import React from 'react'
import { IoMdHome } from 'react-icons/io'
import { FaRoad } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { MdOutlineLibraryBooks } from 'react-icons/md'

export const MENU: MenuItem[] = [
  {
    name: 'Trang chủ',
    icon: React.createElement(IoMdHome),
    link: '/'
  },
  {
    name: 'Lộ trình',
    icon: React.createElement(FaRoad),
    link: '/'
  },
  {
    name: 'Xếp hạng',
    icon: React.createElement(FaRankingStar),
    link: '/'
  },
  {
    name: 'Bài viết',
    icon: React.createElement(MdOutlineLibraryBooks),
    link: '/'
  }
]
