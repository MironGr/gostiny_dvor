
import cx from 'classnames'

import styles from './Footer.module.scss'

import { interTight } from '@/general/Fonts'

export const Footer = () => {
  // TODO: получать по апи?
  const footerMap = [
    {
      name: 'Каталог',
      links: [
        'Бренды',
        'Новые поступления',
        'Часы',
        'Ювелирные украшения',
        'Аксессуары',
        'Одежда',
        'Обувь',
        'Белье',
        'Бижутерия',
        'Sale',
      ]
    },
    {
      name: '',
      links: []
    },
    {
      name: 'Связь с нами',
      links: [
        'Новостная рассылка',
        'Запросить изделие',
        'Обратная связь',
        'Заказать звонок',
      ],
      connect: [
        'почта',
        'ВК',
        'Инст',
        'Ютуб',
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
      ]
    },
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
  ]

  const date = new Date()

  const renderLinks = (section: any) => {
    return <div key={section.name}>
      <h3>{section.name}</h3>
      {section.links.map((item: any) => <span key={item}>{item}</span>)}
      {section?.connect && <span></span>}
      {section?.connect && section.connect.map((item: any) => <span key={item}>{item}</span>)}
    </div>
  }
  
  return <footer className={cx(styles.footer, interTight.className)}>
    <section className={styles.section}>{footerMap.map(section => renderLinks(section))}</section>
    <section className={styles.copyright}>
      <span>{date.getFullYear()} Гостинный двор &#8211; Все права защищены</span>
      <span>Сделано в ZG</span>
    </section>
  </footer>
}