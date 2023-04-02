import React, { RefObject, useState, useMemo, useEffect, useRef} from 'react';
import cx from 'classnames';

import styles from './NavBar.module.scss'

import { interTight } from '@/general/Fonts'

import { BurgerClose } from '@/atoms/burger/Burger';


const listMenu = [
  {
    id: 'women',
    name: 'Женщины',
  },
  {
    id: 'mens',
    name: 'Мужчины',
  },
  {
    id: 'young',
    name: 'Молодежь',
  },
]

const contentMenu: {[key: string] : string[]} = {
  women: [
    'Новые поступления',
    'Часы',
    'Ювелирные украшения',
    'Аксессуары',
    'Одежда',
    'Обувь',
    'Белье',
    'Бижутерия',
    'Sale',
  ],
  mens: [
    'Новые поступления',
    'Часы',
  ],
  young: [
    'Новые поступления',
    'Часы',
    'Обувь',
  ]
}

const addedMenu: {
  name: string,
  links: string[],
  connect?: string[],
}[] = [
  {
    name: 'Гостинный двор',
    links: [
      'О компании',
      'Контактная информация',
      'Путеволитель по комплексу',
      'Новости',
      'Карьера',
      'Программа лояльности',
      'Подарочные сертификаты',
    ]
  },
  {
    name: 'Клиентская служба',
    links: [
      'Контакты поддержки',
      'Руководство по размерам',
      'Оплата и доставка',
      'Обмен и возврат',
      'Частые вопросы',
      'Политика конфиденциальности',
    ],
  },
  {
    name: 'Связь с нами',
    links: [
      'Новостная рассылка',
      'Запросить изделие',
      'Обратная связь',
      'Заказать звонок',
      '',
    ],
    connect: [
      'почта',
      'ВК',
      'Инст',
      'Ютуб',
    ],
  },
]

export const NavBar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean,
  onClose: () => void,
}) => {

  const [isClick, setIsClick] = useState<boolean>(true)

  const wrapperBurgerRef = useRef<HTMLDivElement>(null)
  const glassRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // открытие навбара при нажатии на бургер в хедере
    if (isOpen) {
      const wrapper = wrapperBurgerRef.current;
      wrapper?.classList.add(styles.isNavOpen)

      const glass = glassRef.current
      glass?.classList.add(styles.glass)
      glass?.classList.add(styles.isGlass)
    }
  }, [isOpen])

  // закрытие навбара при клике вне навбара
  const onClickGlass = () => {
    const wrapper = wrapperBurgerRef.current;
    wrapper?.classList.remove(styles.isNavOpen)
    onClose()

    const glass = glassRef.current
    if (glass?.classList.contains(styles.glass)) {
        glass.classList.add(styles.visuallyhidden)
        glass?.classList.toggle(styles.isGlass)
        setIsClick(false)
      setTimeout(() => {
        glass.classList.remove(styles.visuallyhidden)
        glass?.classList.toggle(styles.glass)
        setIsClick(true)
        // задержка равна длительности анимации в transition
      }, 500)
    } else {
      glass?.classList.toggle(styles.glass)
      glass?.classList.toggle(styles.isGlass)
      setIsClick(true)
    }
  }

  const onCloseBurger = () => {
    onClose()
    const wrapper = wrapperBurgerRef.current;
    wrapper?.classList.toggle(styles.isNavOpen)
    // закрытие перекрывающего контент окна
    onClickGlass()
  }
  
  const [selectedCategory, setSelectedCategory] = useState<string>('women')


  return (<>
    <div 
      ref={glassRef}
      onClick={() => {
        isClick && onClickGlass()
      }}
    />
    <div 
      ref={wrapperBurgerRef} 
      className={cx(styles.wrapper, interTight.className)}
    >
      <section className={styles.nav}>
        <div className={styles.navHeader}>
          <h3>Каталог</h3><BurgerClose onClick={onCloseBurger}/>
        </div>
        <div className={styles.navContent}>
          <ul className={styles.navMenu}>
            {listMenu.map(item => (
              <li 
                key={item.name}
                onClick={() => {
                  setSelectedCategory(item.id)
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>

          <ul className={styles.navList}>
            {contentMenu[selectedCategory].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>

        </div>
      </section>
    </div>
  </>);
}
