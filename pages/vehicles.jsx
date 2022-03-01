import { useState, useContext } from 'react'
import TopNav from '../components/top-nav'
import { FiSearch } from 'react-icons/fi'
import { DataContext } from '../DataContext'
import VehiclesTableRow from '../components/vehicles-tables-row'

const Vehicles = () => {
  const [toggleMenu, setToggleMenu] = useState('')
  const [logData, setLogData] = useContext(DataContext);
  console.log(logData)

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
              <li id='1' onClick={(e) => setToggleMenu(e.target.id)} className={`uppercase text-xs px-3 py-5 mx-2 ${toggleMenu === '1' && toggleMenu !== '2' && toggleMenu !== '3' && toggleMenu !== '4' ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-500'}`}>All vehicles</li>

              <li id='2' onClick={(e) => setToggleMenu(e.target.id)} className={`uppercase text-xs px-3 py-5 mx-2 ${toggleMenu === '2' ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-500'}`}> Trucks </li>
             
              <li id='3' onClick={(e) => setToggleMenu(e.target.id)} className={`uppercase text-xs px-3 py-5 mx-2 ${toggleMenu === '3' ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-500'}`}> Trailers </li>

              <li id='4' onClick={(e) => setToggleMenu(e.target.id)} className={`uppercase text-xs px-3 py-5 mx-2 ${toggleMenu === '4' ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-500'}`}> Tankers </li>
            </ul>
          </div>
          <div className='text-2xl font-medium text-slate-500 mr-4'> <FiSearch/> </div>
        </div>

        <div className='mt-1 p-3 pb-3 bg-slate-100 rounded-b overflow-x-auto w-full'>
          <table className='w-full table-auto'>
            <tbody>
              {logData.map((log) =>{ 
                return <VehiclesTableRow key={log.id} 
                vehicleNumber={log.vehicleNumber}
                vehicleName={log.vehicleName}
                location={log.location}
                destination={log.destination}
                logStatus={log.logStatus}
                transporter={log.transporter} /> }
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Vehicles