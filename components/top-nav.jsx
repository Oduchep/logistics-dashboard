import { useContext} from 'react'
import Image from 'next/image'
import { BsBell } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import { DataContext } from '../utilities/DataContext'

const TopNav = () => {
  const {userData, setNavIsOpen} = useContext(DataContext)
  const [user] = userData

  const openNav = () => {
    setNavIsOpen(true)
    // console.log("nav open")
  }

  return (
    <div className='flex justify-between lg:justify-end items-center mb-8'>
      <div className='block lg:hidden text-3xl font-extrabold text-slate-800 dark:text-white' onClick={openNav}>
        <BiMenu/>
      </div>
      <div className='flex justify-between'>
        <div className='border-r-2 border-r-slate-300 dark:border-r-evening-blue'>
          <div className='h-12 w-12 bg-slate-300 dark:bg-evening-blue rounded-full mr-2 flex justify-center items-center'>
            <div className='text-xl font-extrabold text-slate-800 dark:text-white relative'>
              <BsBell/>
              <span className='w-2 h-2 bg-orange-500 rounded-full absolute top-0 right-0'></span>
              </div>
          </div>
        </div>

        <div>
          <div className='h-12 w-12 bg-slate-300 rounded-full ml-2'> 
            <Image
            src={user.img}
            alt={user.name}
            width={48}
            height={48}
            className='object-cover rounded-full'
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default TopNav