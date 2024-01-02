import BreadCrumb from '~/components/BreadCrumb'
import classNames from 'classnames/bind'
import styles from './learningPath.module.scss'
import Heading from '~/components/Heading'
import Timeline from '~/components/Timeline'

import { learningPath } from '~/apis/mockData'

const cx = classNames.bind(styles)

const LearningPath = () => {
  return (
    <>
      <BreadCrumb title="Hành trình tìm hiểu lịch sử Việt Nam" />
      <div className={cx('learning-path')}>
        <Heading
          heading="Lộ trình học"
          subHeading="Để bắt đầu tìm hiểu về lịch sử Việt Nam một cách thuận lợi, bạn hãy tìm hiểu về những cột mốc trong lịch sử Việt Nam."
        />
        <div className={cx('time-line')}>
          <Timeline data={learningPath} />
        </div>
      </div>
    </>
  )
}

export default LearningPath
