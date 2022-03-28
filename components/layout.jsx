import { useContext } from 'react'
import { DataContext } from '../utilities/DataContext'
import DarkModeToggler from './dark-mode-toggler'
import SideNav from './side-nav'
import VehiclesModal from './vehicles-modal'

const Layout = ({children}) => {
  const {navIsOpen} = useContext(DataContext)

  return (
    <>
      <div className={`w-full flex bg-slate-200 dark:bg-midnight-blue ${navIsOpen && 'relative'}`}>
        <div className={`${navIsOpen ? 'absolute z-10 w-80 h-full shadow-xl shadow-slate-600 left-0 duration-500 ease-in-out' : 'z-10 absolute -left-full lg:left-0 lg:relative duration-300 ease-in-out'} trasition delay-75 lg:block lg:w-1/5 container mx-auto p-6 bg-white dark:bg-night-blue`}>
          <SideNav/>
        </div>
        <div className='w-full lg:w-4/5 px-6 md:px-8 lg:px-12 py-6'>
          <main className='container mx-auto'>{children}</main>
        </div>
      </div>

      <DarkModeToggler/>
      
      <VehiclesModal/>
    </>
  )
}

export default Layout