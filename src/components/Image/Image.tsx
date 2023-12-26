import { forwardRef, useState, Ref } from 'react'
import classNames from 'classnames'
import images from '~/assets/images'
import styles from './Image.module.scss'

interface ImageProps {
  src?: string
  alt?: string
  fallback?: string | undefined
  className?: string
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref: Ref<HTMLImageElement>) => {
    const [fallback, setFallback] = useState<string | undefined>('')

    const handleError = () => {
      setFallback(customFallback)
    }

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={src || fallback}
        alt={alt}
        {...props}
        onError={handleError}
      />
    )
  }
)

export default Image
