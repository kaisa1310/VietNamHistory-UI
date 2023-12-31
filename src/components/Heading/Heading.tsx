interface HeadingProps {
  heading: string
  subHeading: string
}

const Heading = (props: HeadingProps) => {
  const { heading, subHeading } = props

  const containsHTML = /<[a-z][\s\S]*>/i.test(subHeading)

  return (
    <div style={{ marginBottom: '80px' }}>
      <h1>{heading}</h1>
      <div>{containsHTML ? <p dangerouslySetInnerHTML={{ __html: subHeading }} /> : <p>{subHeading}</p>}</div>
    </div>
  )
}

export default Heading
