import { useEffect } from 'react'

interface props {
  title: string
}

const BreadCrumn = (props: props) => {
  const { title } = props
  useEffect(() => {
    document.title = title
  }, [title])

  return null
}

export default BreadCrumn
