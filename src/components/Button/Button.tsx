import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'
import React from 'react'

const cx = classNames.bind(styles)

interface ButtonProps {
  to?: string
  href?: string
  primary?: boolean
  second?: boolean
  outline?: boolean
  text?: boolean
  disabled?: boolean
  small?: boolean
  large?: boolean
  children?: string
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  to,
  href,
  primary = false,
  second = false,
  outline = false,
  text = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick
}) => {
  let Comp: React.ElementType = 'button'
  const props: any = {
    onClick
  }

  // Remove event listener when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    [className!]: className,
    primary,
    second,
    outline,
    text,
    small,
    large,
    disabled
  })

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}

export default Button
