import React from 'react'
import UseDarkMode from '../utilities/use-dark-mode'
import { BsMoonStarsFill } from 'react-icons/bs'
import { RiSunFill } from 'react-icons/ri'

const DarkModeToggler = () => {
    const [colorTheme, setTheme] = UseDarkMode();
  return (
    <div className='fixed top-2/3 right-0 bg-white dark:bg-night-blue rounded p-1'>
        <button className='block text-yellow-200 p-2 text-md rounded-lg dark:bg-evening-blue' onClick={() => setTheme("dark")}><BsMoonStarsFill/></button>

        <button className='text-yellow-600 p-2 text-md rounded-lg bg-slate-100 dark:bg-transparent' onClick={() => setTheme("light")}><RiSunFill/></button>
    </div>
  )
}

export default DarkModeToggler