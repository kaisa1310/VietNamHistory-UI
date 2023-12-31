import SlideShow from '~/components/SlideShow'
import styles from './Home.module.scss'
import images from '~/assets/images'

import classNames from 'classnames/bind'
import CommonItem from '~/components/CommonItem'
import config from '~/config'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

const BANNER_SLIDE = [
  {
    url: images.bannerSlide1,
    to: ''
  }
]

interface courseData {
  image: string
  title: string
  courseStudens: number
  link?: string
}
interface blogData {
  image: string
  title: string
  createdTime: number
  link?: string
  authCreated: {
    userName: string
    avatar: string
  }
}

interface videoData {
  link: string
  image: string
  title: string
  views: number
  likes: number
  comments: number
}

const Home = () => {
  const [coursesData, setCoursesData] = useState<courseData[]>([])
  const [blogsData, setBlogsData] = useState<blogData[]>([])
  const [videosData, setVieosData] = useState<videoData[]>([])

  useEffect(() => {
    setCoursesData([
      {
        image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
        title: 'Kiến thức nhập môn IT',
        courseStudens: 120.821
      }
    ])

    setBlogsData([
      {
        image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
        title: 'Tổng hợp các sản phẩm của học viên tại F8',
        createdTime: 12,
        authCreated: { userName: 'Nguyễn Quang Huy', avatar: '' }
      }
    ])

    setVieosData([
      {
        link: '',
        image: 'https://i.ytimg.com/vi/YH-E4Y3EaT4/maxresdefault.jpg',
        title: 'Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?',
        views: 500,
        likes: 200,
        comments: 100
      }
    ])
  }, [coursesData, blogsData, videosData])

  return (
    <section className={cx('home')}>
      <div className={cx('home-inner')}>
        <SlideShow className={cx('home-slide')} data={BANNER_SLIDE} />

        <div className={cx('home-wrapper')}>
          {/* Course */}
          <CommonItem
            course
            name="Khóa học miễn phí"
            to={config.routes.learningPath}
            totalStudents={300.123}
            data={coursesData}
            viewMore="Xem lộ trình"
          />

          {/* Blogs */}
          <CommonItem
            blog
            name="Bài viết nổi bật"
            to={config.routes.blog}
            totalStudents={300.123}
            data={blogsData}
            viewMore="Xem tất cả"
          />

          {/* Vides */}
          <CommonItem
            video
            name="Videos nổi bật"
            to={config.routes.blog}
            totalStudents={300.123}
            data={videosData}
            viewMore="Xem tất cả"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
