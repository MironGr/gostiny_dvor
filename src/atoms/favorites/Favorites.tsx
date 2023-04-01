import Image from 'next/image'
import cx from 'classnames'

import styles from './Favorites.module.scss'


const FavoriteTemp = ({ 
  color,
  fill,
}: 
{
  color: 'black80' | 'white',
  fill?: boolean,
}) => {
  return <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8.5624 14.5966L8 14.2141L7.4376 14.5966L0.999999 18.9751L1 0.999999L15 1L15 18.9751L8.5624 14.5966ZM0.967014 18.9976C0.971172 18.9948 0.97238 18.9947 0.969951 18.9956L0.967014 18.9976ZM0.875742 19.0842L0.829261 19.1988L0.875742 19.0842Z" 
      strokeWidth="2"
      className={cx(styles[color], { [styles[`${color}Fill`]]: fill })}
    />
  </svg>
}

export const Favorite = {
  FavoriteDarkBorder: () => {
    return <FavoriteTemp color='black80' />
  },
  FavoriteDark: () => {
    return <FavoriteTemp color='black80' fill/>
  },
  FavoriteLightBorder: () => {
    return <FavoriteTemp color='white'/>
  },
  FavoriteLight: () => {
    return <FavoriteTemp color='white' fill/>
  },
}
