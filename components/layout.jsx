import SideNav from './side-nav'

const Layout = ({children}) => {
  return (
    <>
      <div className='w-full flex'>
        <div className='hidden lg:block lg:w-1/5 container mx-auto p-6'>
          <SideNav/>
        </div>
        <div className='w-full lg:w-4/5 bg-slate-200 px-6 lg:px-12 py-6'>
          <main className='container mx-auto'>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout