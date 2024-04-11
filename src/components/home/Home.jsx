import React, { useState } from 'react'
import {Banner} from './banner/Banner'
import {AboutUs} from './aboutUs/AboutUs'
import {Footer} from './footer/Footer'
import {CopyRight} from './copyright/CopyRight'
import { Navbar } from './navbar/Navbar'
import { Projects } from './projects/Projects'

export const Home = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className = {`container ${theme}`}>
    <Navbar theme={theme} setTheme={setTheme} />
    <Banner  theme={theme} setTheme={setTheme} />
    <AboutUs  theme={theme} setTheme={setTheme} />
    <Projects theme={theme} setTheme={setTheme} />
    <Footer  theme={theme} setTheme={setTheme} />
    <CopyRight theme={theme} setTheme={setTheme} />
    </div>
  )
}
