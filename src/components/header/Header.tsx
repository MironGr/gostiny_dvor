import { useRef } from 'react'
import cx from 'classnames'

import styles from './Header.module.scss'

import { interTight } from '@/general/Fonts'

import { LogoDark, LogoLight } from '../../atoms/logo/Logo'
import { Button } from '../../atoms/button/Button'
import { Favorite } from '@/atoms/favorites/Favorites'
import { Cart } from '@/atoms/cart/Cart'
import { Burger } from '@/atoms/burger/Burger'
import { Search } from '@/atoms/search/Search'

export const Header = ({
  onClickBurger,
}: {
  onClickBurger: () => void,
}) => {

  const names = ['Женщины', 'Мужчины', 'Молодежь', 'Бренды']

  return <header
    key='headerRender'
    className={cx(
    styles.header,
    interTight.className
  )}>
    <>
    <div className={styles.wrapperHeader}>
      {/* FIXME: пример меню по ховеру которое не закрывается */}
      {/* <ul className={styles.ul}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li>
            <a href="#">Products ▾</a>
            <ul className={cx(styles.ul, styles.dropdown)}>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Monitors</a></li>
                <li><a href="#">Printers</a></li>
            </ul>
        </li>
        <li><a href="#">Contact</a></li>
      </ul> */}
      <ul className={styles.menuCatalog}>
        {names.map(item => <>
          <li className={styles.menuCatalogItem} key={item}>
            {item}
          </li>
          <div className={cx(styles.menuCatalogContent)}>
            Контент {item}
          </div>
        </>)}
      </ul>
      <div className={styles.wrapperLogo}>
        {/* FIXME: Нужны разные вариации лого с цветом */}
        <LogoDark />
      </div>
      <div className={styles.menu}>
        <div className={styles.menuRight}>
          <Search />
          <Favorite.FavoriteDark />
          <Cart />
          <Burger
            onClick={() => {
              onClickBurger()
            }}
          />
        </div>
        <Button className={styles.helpBtn}><span>Помощь</span></Button>
      </div>
    </div>
    {/* {console.log('isOpenMenu - ', isOpenMenu)}
    <div className={cx(styles.menuCatalogContent, { [styles.block]: isOpenMenu })}>
      Контент при ховере на хедере
    </div> */}
    </>
  </header>
}