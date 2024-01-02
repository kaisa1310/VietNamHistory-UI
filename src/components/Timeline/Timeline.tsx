import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { MdOutlineHistoryToggleOff } from 'react-icons/md'
import 'react-vertical-timeline-component/style.min.css'
import './Timeline.scss'

interface timeLineProps {
  data: {
    name: string
    desc: string[]
  }[]
}

const Timeline = (props: timeLineProps) => {
  const { data } = props

  return (
    <VerticalTimeline>
      {data.map((item, index) => {
        return (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3498db', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={item.name}
            iconStyle={{ background: '#95a5a6', color: '#fff' }}
            icon={<MdOutlineHistoryToggleOff />}
          >
            <h3 className="vertical-timeline-element-title">{item.name}</h3>
            {item.desc.map((item, index) => {
              return (
                <p className="time-line-content" key={index}>
                  {item}
                </p>
              )
            })}
          </VerticalTimelineElement>
        )
      })}
    </VerticalTimeline>
  )
}

export default Timeline
