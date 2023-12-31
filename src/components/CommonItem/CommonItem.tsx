import { IoIosArrowForward } from 'react-icons/io'
import { PiUsersThreeLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { FaEye } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'

import styles from './CommonItem.module.scss'
import { common } from '~/models'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

interface commonProps extends common {
  totalStudents?: number
  viewMore: string
  course?: boolean
  blog?: boolean
  video?: boolean
  data: {
    image: string
    title: string
    courseStudens?: number
    createdTime?: number
    link?: string
    views?: number
    likes?: number
    comments?: number
    authCreated?: {
      userName: string
      avatar: string
    }
  }[]
}

const CommonItem = (props: commonProps) => {
  const { name, to, totalStudents, data, viewMore, course, blog, video } = props

  return (
    <div className={cx('scrolllist_vertical')}>
      <div>
        {course && (
          <p className={cx('sub-heading')}>
            <strong>{totalStudents}+ </strong> người đã học
          </p>
        )}
        <div className={cx('heading-wrap')}>
          <h2 className={cx('heading')}>{name}</h2>
          <Link to={to} className={cx('view-all')}>
            {viewMore} <IoIosArrowForward />
          </Link>
        </div>
      </div>
      <div className={cx('common-list')}>
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <section className={cx('common-item')} key={index}>
                <Link to="" className={cx('common-link')}>
                  <img className={cx('common-img')} src={item.image} alt={item.title} />
                </Link>
                <h3 className={cx('common-title')}>
                  <Link to="">{item.title}</Link>
                </h3>
                {/* Action course */}
                {course && (
                  <div className={cx('course-student')}>
                    <PiUsersThreeLight className={cx('common-icon')} />
                    <span>{item.courseStudens}</span>
                  </div>
                )}

                {/* Action Post */}
                {blog && (
                  <div className={cx('post-auth')}>
                    <Link to="" className={cx('post-avatar')}>
                      <Image src={item.authCreated?.avatar} />
                    </Link>
                    <Link to="">
                      <span className={cx('post-user-name')}>{item.authCreated?.userName}</span>
                      <span className={cx('post-dot')}>.</span>
                      <span>{item.createdTime} phút đọc</span>
                    </Link>
                  </div>
                )}

                {/* Action Video */}
                {video && (
                  <div className={cx('video-stats')}>
                    <div>
                      <FaEye />
                      <span>{item.views}</span>
                    </div>
                    <div>
                      <AiFillLike />
                      <span>{item.likes}</span>
                    </div>
                    <div>
                      <FaComment />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                )}
              </section>
            )
          })}
      </div>
    </div>
  )
}

export default CommonItem
