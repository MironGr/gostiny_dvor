import cx from 'classnames'
import styles from './Button.module.scss'

export const Button = ({
  children,
  className,
} : 
{ 
  children: JSX.Element,
  className?: string
}) => {

  return <button className={cx(styles.buttonMain, className)}>
    {children}
  </button>
}