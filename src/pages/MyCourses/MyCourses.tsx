import classNames from 'classnames/bind'

import styles from './MyCourses.module.scss'
import Heading from '~/components/Heading'
import CommonItem from '~/components/CommonItem'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

interface myCourses {
  title: string
  image: string
  conpleted: string
  progressBar: string
}

const MyCourses = () => {
  const [myCourses, setMycourse] = useState<myCourses[]>([])

  useEffect(() => {
    setMycourse([
      {
        title: 'HTML CSS từ Zero đến Hero',
        image: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
        conpleted: 'Học cách đây 5 tháng trước',
        progressBar: '20%'
      },
      {
        title: 'Xây dựng Website với ReactJs',
        image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
        conpleted: 'Học cách đây 8 tháng trước',
        progressBar: '20%'
      }
    ])
  }, [myCourses])

  return (
    <div className={cx('my-course')}>
      <div className={cx('inner')}>
        <Heading heading="Khóa học của tôi" subHeading="Bạn đã hoàn thành <strong>1/9</strong> khóa học của bạn" />
        <div className="wrapper">
          <CommonItem data={myCourses} myCourse />
        </div>
      </div>
    </div>
  )
}

export default MyCourses
