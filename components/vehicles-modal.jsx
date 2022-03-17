import Image from 'next/image'
import { useContext } from 'react'
import { DataContext } from '../utilities/DataContext'
import { MdCancelPresentation } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import styles from '../styles/styles.module.css'

const VehiclesModal = () => {
    const {trackedVehicle, modal, isSearching} = useContext(DataContext)
    const [toggleModal, setToggleModal] = modal
    const [searching, setSearching] = isSearching

    setTimeout(() => {setSearching(false)}, 10000);

  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 dark:bg-black dark:bg-opacity-70 overflow-y-auto h-full w-full ${toggleModal ? 'block' : 'hidden'}`}>
        <div className="relative top-24 mx-auto px-5 lg:px-10 py-5 w-4/5 lg:w-1/2 shadow-lg rounded-md bg-white dark:bg-midnight-blue">
            <div className='mb-3'>
                <button onClick={() => setToggleModal(false)} className='float-right text-slate-800 dark:text-white text-xl rounded-full'> <MdCancelPresentation/> </button>
            </div>
            <div className='text-center'>
                <h2 className='font-bold dark:font-medium text-xl text-slate-800 dark:text-white'> {searching ? 'Tracking Vehicle' : 'Location Found'} </h2>
                <p className='text-xs text-slate-500 dark:text-slate-400'> {searching ? 'Please hold on. Locating vehicle on IPI Network.' : 'Vehicle has been successfully located.'}</p>
            </div>
            <div className={`flex items-center my-10 ${searching ? 'md:h-40' : ''}`}>
                <div className='w-full flex flex-wrap justify-between'>
                    <div className={searching ? 'mx-0' : 'mx-auto md:mx-0'}>
                        <div className='flex py-3 w-56'>
                            <div className='mr-4 w-12 h-12 rounded-full bg-slate-800'>
                                    <Image width={48} height={48} className='object-cover rounded-full' src={toggleModal ? trackedVehicle.img : '/user.jpg'} alt={trackedVehicle.transporter} />
                            </div>
                            <span>
                            <span className='font-bold dark:font-normal text-sm block dark:text-white'> {trackedVehicle.transporter} </span>
                            <span className='text-xs text-slate-500'> Transporter </span>
                            </span>
                            {!searching && 
                                <button><span className='ml-5 text-xs border border-slate-600 dark:border-slate-400 dark:text-slate-400 py-1 px-5 rounded-full'>View</span></button>
                            }
                            
                        </div>
                        {!searching && 
                            <div className='px-3 py-3 border-y border-slate-300 dark:border-slate-500'>
                            <span className='font-bold dark:font-normal dark:text-white text-sm block'> {trackedVehicle.currentLocation}, NG </span>
                            <span className='text-xs text-slate-500'> Current location </span>
                            </div>
                        }
                        {!searching && 
                            <div className='px-3 py-3'>
                            <span className='font-bold dark:font-normal dark:text-white text-sm block'> 36 mins </span>
                            <span className='text-xs text-slate-500'> Time spent so far </span>
                            </div>
                        }
                    </div>
                    {!searching && 
                        <div className='mx-auto w-80 h-48 bg-slate-400 dark:bg-evening-blue overflow-hidden'>
                            <iframe width={320} height={192} src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCfDCwk8E9_xavNnEWV8Zg7nGcxvY0xh0A&q=${trackedVehicle.currentLocation}`} alt='map' loading="lazy"></iframe>
                        </div>
                    }
                    {searching && 
                        <div className={styles.searchPulse}>
                            <div className='text-3xl text-slate-900 font-medium flex justify-center items-center'>
                                <FiSearch/>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="flex justify-between flex-wrap pr-2 md:pr-5">
                <div className='flex px-2 my-2'>
                    <div className='flex'>
                        <span className='mr-3'>
                            <span className='text-3xl text-slate-700 dark:text-white'><FaTruck/></span>
                        </span>
                        <span>
                            <span className='font-bold dark:font-normal dark:text-white text-sm block'> {trackedVehicle.vehicleNumber} </span>
                            <span className='text-xs text-slate-500'> {trackedVehicle.vehicleName} </span>
                        </span>
                    </div>
                </div>
                <div className='px-2 mx-auto my-2'>
                    <span className='font-bold dark:font-normal dark:text-white text-sm block'> {trackedVehicle.location} </span>
                    <span className='text-xs text-slate-500'> Start Location </span>
                </div>
                <div className='px-2 mx-auto my-2'>
                    <span className='font-bold dark:font-normal dark:text-white text-sm block'> {trackedVehicle.destination} </span>
                    <span className='text-xs text-slate-500'> Destination </span>
                </div>
                <div className='px-2 mx-auto my-2'>
                    <span className='font-bold dark:font-normal dark:text-white text-sm block'> {trackedVehicle.logStatus} </span>
                    <span className='text-xs text-slate-500'> Status </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VehiclesModal