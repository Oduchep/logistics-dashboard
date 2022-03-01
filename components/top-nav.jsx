import { BsBell } from 'react-icons/bs'

const TopNav = () => {
  return (
    <div className='flex justify-end'>
      <div className='border-r-2 border-r-slate-300'>
        <div className='h-12 w-12 bg-slate-300 rounded-full mr-2 flex justify-center items-center'>
          <div className='text-xl font-extrabold text-slate-800 relative'>
            <BsBell/>
            <div className='w-2 h-2 bg-orange-500 rounded-full absolute top-0 right-0'></div>
            </div>
        </div>
      </div>

      <div>
        <div className='h-12 w-12 bg-slate-300 rounded-full ml-2'>  </div>
      </div>
      
    </div>
  )
}

export default TopNav