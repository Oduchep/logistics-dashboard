import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FaTruck } from 'react-icons/fa'

const VehiclesTableRow = ({ vehicleNumber, vehicleName, location, destination, logStatus, transporter}) => {
  return (
    <tr className='bg-white border-b-8 border-slate-100'>
      <td className='flex px-2 py-5 rounded-l'>
        <span className='ml-5 mr-3'>
          <span className='text-3xl text-slate-700'><FaTruck/></span>
        </span>
        <span>
          <span className='font-bold text-sm block'> {vehicleNumber} </span>
          <span className='text-xs text-slate-500'> {vehicleName} </span>
        </span>
      </td>

      <td className='px-2 py-5'><span className='font-bold text-sm block'> {location} </span>
        <span className='text-xs text-slate-500'> Start Location </span>
      </td>

      <td className='px-2 py-5'><span className='font-bold text-sm block'> {destination} </span>
        <span className='text-xs text-slate-500'> Destination </span>
      </td>

      <td className='px-2 py-5'><span className='font-bold text-sm block'> {logStatus} </span>
        <span className='text-xs text-slate-500'> Status </span>
      </td>

      <td className='flex items-center px-2 py-5'>
        <span className='mr-4 w-12 h-12 rounded-full bg-slate-800'></span>
        <span>
          <span className='font-bold text-sm block'> {transporter} </span>
          <span className='text-xs text-slate-500'> Transporter </span>
        </span>
      </td>

      <td className='px-2 py-3 rounded-r'>
        <span className='flex items-center'>
          <span className='font-bold text-sm rounded-full px-4 py-1 border-2 border-slate-200 flex items-center'> <div className={`w-2 h-2 rounded-full mr-2 ${logStatus === 'In Transit' ? 'bg-green-500' : logStatus === 'Cancelled' ? 'bg-red-500' : 'bg-blue-500'}`}></div> {logStatus} </span><span className='ml-2 text-2xl text-slate-500'><BiDotsVerticalRounded/></span>
        </span>
        <span className='text-xs text-slate-500 ml-4 underline'> {logStatus === 'In Transit' ? 'Track Shipment' : 'View Details'} </span>
      </td>
    </tr>
  )
}

export default VehiclesTableRow