import React from "react"

import styles from './Layout.module.scss'
import { interTight } from '@/general/Fonts'

import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"

export const Layout = ({ 
  children
}: 
{
  children: JSX.Element,
}
  ) => {
  return <div className={styles.layoutWrapper}>
    <Header />
    <main className={interTight.className}>
      {children}
    </main>
    <Footer />
  </div>
}