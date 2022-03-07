import Image from 'next/image'
import { useContext } from 'react'
import { DataContext } from '../DataContext'
import { MdCancelPresentation } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GiDivert } from 'react-icons/gi'

const VehiclesModal = () => {
    const {log, tracked, modal} = useContext(DataContext)
    const [toggleModal, setToggleModal] = modal
    const [trackedVehicle] = tracked

  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${toggleModal ? 'block' : 'hidden'}`} id="my-modal">
        <div className="relative top-24 mx-auto px-5 md:px-10 py-5 border w-4/5 md:w-1/2 shadow-lg rounded-md bg-white">
            <div className='mb-3'>
                <button onClick={() => setToggleModal(false)} className='float-right text-slate-800 text-xl rounded-full'> <MdCancelPresentation/> </button>
            </div>
            <div className='text-center'>
                <h2 className='font-bold text-xl text-slate-800'> Tracking Vehicle </h2>
                <p className='text-xs text-slate-500'> Please hold on. Locating vehicle on IPI Network.</p>
            </div>
            <div className='flex my-10'>
                <div>
                    <div className='flex'>
                        <div className='mr-4 w-12 h-12 rounded-full bg-slate-800'>
                                {/* <Image width={48} height={48} className=' object-cover rounded-full' src={trackedVehicle[0].img} alt={trackedVehicle[0].transporter} /> */}
                        </div>
                        <span>
                        <span className='font-bold text-sm block'> Name </span>
                        <span className='text-xs text-slate-500'> Transporter </span>
                        </span>
                    </div>
                </div>
                <div className='w-44 h-44 animate-pulse bg-blue-100 rounded-full flex justify-center items-center'>
                    <div className="w-36 h-36 animate-pulse bg-blue-200 rounded-full flex justify-center items-center">
                        <div className="w-28 h-28 animate-pulse bg-blue-300 rounded-full flex justify-center items-center">
                            <div className='text-2xl font-medium text-slate-500 flex justify-center items-center'>
                                <FiSearch/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between flex-wrap pr-2 md:pr-5">
                <div className='flex px-2 my-2'>
                    <div className='flex'>
                        <span className='mr-3'>
                            <span className='text-3xl text-slate-700'><FaTruck/></span>
                        </span>
                        <span>
                            <span className='font-bold text-sm block'> Vehicle number </span>
                            <span className='text-xs text-slate-500'> Vehicle name </span>
                        </span>
                    </div>
                </div>
                <div className='px-2 mx-auto my-2'>
                    <span className='font-bold text-sm block'> Lagos </span>
                    <span className='text-xs text-slate-500'> Start Location </span>
                </div>
                <div className='px-2 mx-auto my-2'>
                    <span className='font-bold text-sm block'> Ikeja </span>
                    <span className='text-xs text-slate-500'> Destination </span>
                </div>
                <div className='px-2 mx-auto my-2'>
                    <span className='font-bold text-sm block'> In transit </span>
                    <span className='text-xs text-slate-500'> Status </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VehiclesModal