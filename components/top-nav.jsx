import { useContext} from 'react'
import Image from 'next/image'
import { BsBell } from 'react-icons/bs'
import { DataContext } from '../DataContext'

const TopNav = () => {
  const {userData} = useContext(DataContext)
  const [user] = userData

  return (
    <div className='flex justify-end'>
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
  )
}

export default TopNav