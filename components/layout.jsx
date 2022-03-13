import DarkModeToggler from './dark-mode-toggler'
import SideNav from './side-nav'
import VehiclesModal from './vehicles-modal'

const Layout = ({children}) => {
  return (
    <>
      <div className='w-full flex bg-slate-200 dark:bg-midnight-blue'>
        <div className='hidden lg:block lg:w-1/5 container mx-auto p-6 bg-white dark:bg-night-blue'>
          <SideNav/>
        </div>
        <div className='w-full lg:w-4/5 px-6 lg:px-12 py-6'>
          <main className='container mx-auto'>{children}</main>
        </div>
      </div>

      <DarkModeToggler/>
      
      <VehiclesModal/>
    </>
  )
}

export default Layout