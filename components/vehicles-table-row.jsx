import { useContext } from 'react'
import Image from 'next/image'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FaTruck } from 'react-icons/fa'
import { DataContext } from '../utilities/DataContext'

const VehiclesTableRow = ({ data }) => {
  const {openModal} = useContext(DataContext)


  return (
    <tr className='bg-white dark:bg-pre-midnight-blue border-b-8 border-slate-100 dark:border-night-black overflow-x-auto dark:text-white'>
      <td className='flex px-2 py-5 rounded-l'>
        <span className='ml-5 mr-3'>
          <span className='text-3xl text-slate-700 dark:text-white'><FaTruck/></span>
        </span>
        <span>
          <span className='font-bold dark:font-medium text-sm block'> {data.vehicleNumber} </span>
          <span className='text-xs text-slate-500'> {data.vehicleName} </span>
        </span>
      </td>

      <td className='px-2 py-5'><span className='font-bold dark:font-medium text-sm block'> {data.location} </span>
        <span className='text-xs text-slate-500'> Start Location </span>
      </td>

      <td className='px-2 py-5'><span className='font-bold dark:font-medium text-sm block'> {data.destination} </span>
        <span className='text-xs text-slate-500'> Destination </span>
      </td>

      <td className='px-2 py-5'><span className='font-bold dark:font-medium text-sm block'> {data.logStatus} </span>
        <span className='text-xs text-slate-500'> Status </span>
      </td>

      <td className='flex items-center px-2 py-5'>
        <span className='mr-4 w-12 h-12 rounded-full bg-slate-800'>
          <Image width={48} height={48} className=' object-cover rounded-full' src={data.img} alt={data.transporter} />
        </span>
        <span>
          <span className='font-bold dark:font-medium text-sm block'> {data.transporter} </span>
          <span className='text-xs text-slate-500'> Transporter </span>
        </span>
      </td>

      <td className='px-2 py-3 rounded-r'>
        <span className='flex items-center'>
          <span className='font-bold dark:font-medium text-sm rounded-full px-4 py-1 border-2 border-slate-200 flex items-center'> <div className={`w-2 h-2 rounded-full mr-2 ${data.logStatus === 'In Transit' ? 'bg-green-500' : data.logStatus === 'Cancelled' ? 'bg-red-500' : 'bg-blue-500'}`}></div> {data.logStatus} </span><span className='ml-2 text-2xl text-slate-500'><BiDotsVerticalRounded/></span>
        </span>
        { data.logStatus === 'In Transit' ? 
        <button onClick={() => openModal(data)} className='text-xs text-slate-500 ml-4 underline'> Track Shipment </button> : 
        <button className='text-xs text-slate-500 ml-4 underline'> View Details </button>}
      </td>
    </tr>
  )
}

export default VehiclesTableRow