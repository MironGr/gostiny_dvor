import React, { useState } from "react"

// import styles from './Layout.module.scss'
import { interTight } from '@/general/Fonts'

import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { NavBar } from "../burger/NavBar"

export const Layout = ({ 
  children
}: 
{
  children: JSX.Element,
}
  ) => {

  const [showBurger, setShowBurger] = useState<boolean>(false)

  return <>
    <Header 
      key='header' 
      onClickBurger={() => setShowBurger(true)}
    />
    <main key='main' className={interTight.className}>
      {children}
    </main>
    <Footer key='footer'/>
    <NavBar
      key='navBar' 
      isOpen={showBurger}
      onClose={() => setShowBurger(false)}
    />
  </>
}