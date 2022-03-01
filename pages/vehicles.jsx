import { useState } from 'react'
import TopNav from '../components/top-nav'
import { FiSearch } from 'react-icons/fi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FaTruck } from 'react-icons/fa'

const Vehicles = () => {
  const [toggleMenu, setToggleMenu] = useState('')

// console.log(toggleMenu)

  return (
    <>
      <TopNav/>
      <section className="mt-2">
        <h2 className="text-3xl font-bold text-slate-800"> Vehicles </h2>
        <p className="my-1 text-slate-600 text-sm">
          Manage and track All Vehicles on the IPI Network.
        </p>
      </section>

      <section className='my-4 '>
        <div className='px-3 bg-slate-100 flex justify-between items-center rounded-t'>
          <div>
            <ul className='flex flex-wrap'>
              <li id='1' onClick={(e) => setToggleMenu(e.target.id)} className={`uppercase text-xs px-3 py-5 mx-2 ${toggleMenu === '1' || '' ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-600'}`}>All vehicles</li>

              <li id='2' onClick={(e) => setToggleMenu(e.target.id)} className={`uppercase text-xs px-3 py-5 mx-2 ${toggleMenu === '2' ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-600'}`}> Trucks </li>
             
              <li id='3' onClick={(e) => setToggleMenu(e.target.id)} className={`uppercase text-xs px-3 py-5 mx-2 ${toggleMenu === '3' ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-600'}`}> Trailers </li>

              <li id='4' onClick={(e) => setToggleMenu(e.target.id)} className={`uppercase text-xs px-3 py-5 mx-2 ${toggleMenu === '4' ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-600'}`}> Trucks </li>
            </ul>
          </div>
          <div className='text-2xl text-slate-600 mr-4'> <FiSearch/> </div>
        </div>

        <div className='mt-1 p-3 pb-3 bg-slate-100 rounded-b'>
          <table className='w-full table-auto'>
            <tbody>
              <tr className='bg-white border-b-8 border-slate-100'>
                <td className='flex pl-3 py-5 rounded-l'>
                  <span className='mr-2'>
                    <span className='text-3xl text-slate-700'><FaTruck/></span>
                  </span>
                  <span>
                    <span className='font-bold text-sm block'>ET-272-KJA</span>
                    <span className='text-xs text-slate-500'> Toyota Highlander 2004 </span>
                  </span>
                </td>

                <td className='py-5'><span className='font-bold text-sm block'> Lagos </span>
                  <span className='text-xs text-slate-500'> Start Location </span>
                </td>

                <td className='py-5'><span className='font-bold text-sm block'> Ikeja </span>
                  <span className='text-xs text-slate-500'> Destination </span>
                </td>

                <td className='py-5'><span className='font-bold text-sm block'> In Transit </span>
                  <span className='text-xs text-slate-500'> Status </span>
                </td>

                <td className='flex items-center py-5'>
                  <span className='mr-4 w-12 h-12 rounded-full bg-slate-800'></span>
                  <span>
                    <span className='font-bold text-sm block'> Johnson C </span>
                    <span className='text-xs text-slate-500'> Transporter </span>
                  </span>
                </td>

                <td className='py-5 rounded-r'>
                  <span className='flex items-center'>
                    <span className='font-bold text-sm'>ET-272-KJA </span><span className='ml-2 text-2xl text-slate-500'><BiDotsVerticalRounded/></span>
                  </span>
                  <span className='text-xs text-slate-500'> Track Shipment </span>
                </td>
              </tr>

              <tr className='bg-white border-b-2 border-slate-100'>
                <td className='flex pl-3 py-5 rounded-l'>
                  <span className='mr-2'>
                    <span className='text-3xl text-slate-700'><FaTruck/></span>
                  </span>
                  <span>
                    <span className='font-bold text-sm block'>ET-272-KJA</span>
                    <span className='text-xs text-slate-500'> Toyota Highlander 2004 </span>
                  </span>
                </td>

                <td className='py-5'><span className='font-bold text-sm block'> Lagos </span>
                  <span className='text-xs text-slate-500'> Start Location </span>
                </td>

                <td className='py-5'><span className='font-bold text-sm block'> Ikeja </span>
                  <span className='text-xs text-slate-500'> Destination </span>
                </td>

                <td className='py-5'><span className='font-bold text-sm block'> In Transit </span>
                  <span className='text-xs text-slate-500'> Status </span>
                </td>

                <td className='flex items-center py-5'>
                  <span className='mr-4 w-12 h-12 rounded-full bg-slate-800'></span>
                  <span>
                    <span className='font-bold text-sm block'> Johnson C </span>
                    <span className='text-xs text-slate-500'> Transporter </span>
                  </span>
                </td>

                <td className='py-5 rounded-r'>
                  <span className='flex items-center'>
                    <span className='font-bold text-sm'>ET-272-KJA </span><span className='ml-2 text-2xl text-slate-500'><BiDotsVerticalRounded/></span>
                  </span>
                  <span className='text-xs text-slate-500'> Track Shipment </span>
                </td>
              </tr>

              
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Vehicles