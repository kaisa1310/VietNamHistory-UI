import { MenuItem } from '~/models'

import React from 'react'
import { IoMdHome } from 'react-icons/io'
import { FaRoad } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import config from '~/config'

export const SIDEBAR_MENU: MenuItem[] = [
  {
    name: 'Trang chủ',
    icon: React.createElement(IoMdHome),
    link: config.routes.home
  },
  {
    name: 'Lộ trình',
    icon: React.createElement(FaRoad),
    link: config.routes.learningPath
  },
  {
    name: 'Xếp hạng',
    icon: React.createElement(FaRankingStar),
    link: config.routes.rank
  },
  {
    name: 'Bài viết',
    icon: React.createElement(MdOutlineLibraryBooks),
    link: config.routes.blog
  }
]

export const USER_MENU = {
  profile: 'Trang cá nhân',
  write_blog: 'Viết blog',
  mePost: 'Bài viết của tôi',
  meBookMarkPost: 'Bài viết đã lưu',
  settings: 'Cài đặt',
  loggout: 'Đăng xuất'
}
