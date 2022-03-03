import { useState, useContext } from 'react'
import { FiSearch } from 'react-icons/fi'
import { DataContext } from '../DataContext'
import VehiclesMenuList from './vehicles-menu-list'
import VehiclesTableRow from './vehicles-table-row'
import VehiclesTabContent from './vehicles-tab-content'

const VehiclesMenuTab = () => {
  const {log} = useContext(DataContext);
  const [logData, setLogData] = log
  const [activeTab, setActiveTab] = useState('1')
  
  return (
      <>
        <div className='px-3 bg-slate-100 flex justify-between items-center rounded-t'>
          <div>
            <ul className='flex flex-wrap'>
              <VehiclesMenuList
                title='all vehicles'
                index='1'
                activeTab={activeTab}
                setActiveTab={setActiveTab}/>
              
              <VehiclesMenuList
              title='trucks'
              index='2'
              activeTab={activeTab}
              setActiveTab={setActiveTab}/>

              <VehiclesMenuList
              title='trailers'
              index='3'
              activeTab={activeTab}
              setActiveTab={setActiveTab}/>
              
              <VehiclesMenuList
              title='tankers'
              index='4'
              activeTab={activeTab}
              setActiveTab={setActiveTab}/>
            </ul>
          </div>
          <div className='text-2xl font-medium text-slate-500 mr-4'> <FiSearch/> </div>
        </div>

        <div className='mt-1 p-3 pb-3 bg-slate-100 rounded-b w-full'>
          <VehiclesTabContent index='1' activeTab={activeTab}>
            <div className='overflow-x-auto whitespace-nowrap'>
              <table className='w-full table-auto'>
                <tbody className='overflow-x-auto'>
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
          </VehiclesTabContent>

          <VehiclesTabContent index='2' activeTab={activeTab}>
          <h1>I am tab 2</h1>
          </VehiclesTabContent>

          <VehiclesTabContent index='3' activeTab={activeTab}>
          <h1>I am tab 3</h1>
          </VehiclesTabContent>

          <VehiclesTabContent index='4' activeTab={activeTab}>
          <h1>I am tab 4</h1>
          </VehiclesTabContent>  
        </div>
      </>
  )
}

export default VehiclesMenuTab