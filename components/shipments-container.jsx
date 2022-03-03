import { useState, useContext } from 'react'
import LineChart from "./line-chart";
import { DataContext } from '../DataContext';
import ShipmentsMenuList from './shipments-menu-list';

const ShipmentsContainer = () => {
    const {daily, monthly, yearly, shipmentsMenu} = useContext(DataContext)
    const [dailyShipments, setDailyShipments] = daily
    const [monthlyShipments, setMonthlyShipments] = monthly
    const [yearlyShipments, setYearlyShipments] = yearly
    const [activeShipmentsMenu, setActiveShipmentsMenu] = shipmentsMenu
    // console.log(shipmentsMenuTag);

    console.log(dailyShipments)
    const [dailyData, setDailyData] = useState({
        labels: dailyShipments.map((data) => data.time),
        datasets: [
          {
            label: "Shipments",
            data: dailyShipments.map((data) => data.shipments),
            backgroundColor: "#ffffff",
            borderColor: "#14b8a6",
            borderWidth: 2,
          },

          {
            label: "Vehicles",
            data: dailyShipments.map((data) => data.vehicles),
            backgroundColor: "#ffffff",
            borderColor: "#8b5cf6",
            borderWidth: 2,
          },
        ],
      });

    const [monthlyData, setMonthlyData] = useState({
        labels: monthlyShipments.map((data) => data.date),
        datasets: [
          {
            label: "Shipments",
            data: monthlyShipments.map((data) => data.shipments),
            backgroundColor: "#ffffff",
            borderColor: "#14b8a6",
            borderWidth: 2,
          },

          {
            label: "Vehicles",
            data: monthlyShipments.map((data) => data.vehicles),
            backgroundColor: "#ffffff",
            borderColor: "#8b5cf6",
            borderWidth: 2,
          },
        ],
      });

      const [yearlyData, setYearlyData] = useState({
        labels: yearlyShipments.map((data) => data.month),
        datasets: [
          {
            label: "Shipments",
            data: yearlyShipments.map((data) => data.shipments),
            backgroundColor: "#ffffff",
            borderColor: "#14b8a6",
            borderWidth: 2,
          },

          {
            label: "Vehicles",
            data: yearlyShipments.map((data) => data.vehicles),
            backgroundColor: "#ffffff",
            borderColor: "#8b5cf6",
            borderWidth: 2,
          },
        ],
      });

  return (
    <section>
        <div className="flex justify-between flex-wrap items-center mt-12">
            <div>
                <h2 className="font-bold text-slate-800"> Shipments </h2>
                <p className="my-1 text-slate-600 text-sm">
                    Shipping is going pretty well today. Here&#39;s what we have
                </p>
            </div>
            <div className="mt-3 bg-white px-6 py-2 rounded-full">
                <ul className="text-xs flex justify-between">
                    <ShipmentsMenuList
                    index='1'
                    title='1D'
                    activeTab={activeShipmentsMenu}
                    setActiveTab={setActiveShipmentsMenu}/>

                    <ShipmentsMenuList
                    index='2'
                    title='5D'
                    activeTab={activeShipmentsMenu}
                    setActiveTab={setActiveShipmentsMenu}/>

                    <ShipmentsMenuList
                    index='3'
                    title='1M'
                    activeTab={activeShipmentsMenu}
                    setActiveTab={setActiveShipmentsMenu}/>

                    <ShipmentsMenuList
                    index='4'
                    title='1Y'
                    activeTab={activeShipmentsMenu}
                    setActiveTab={setActiveShipmentsMenu}/>

                    <ShipmentsMenuList
                    index='5'
                    title='Max'
                    activeTab={activeShipmentsMenu}
                    setActiveTab={setActiveShipmentsMenu}/>
                </ul>
            </div>
        </div>

        <div className='my-4 bg-white p-5'>
            <div className='flex justify-between flex-wrap'>
                <div className='mt-2 w-full lg:w-2/6 flex'>
                    <div className='mr-20'>
                        <p className="uppercase font-medium text-xs text-slate-600"> Shipments </p>
                        <p className='text-2xl font-bold text-slate-800'> 60,000 </p>
                    </div>
                    <div>
                        <p className="uppercase font-medium text-xs text-slate-600"> Active vehicles </p>
                        <p className='text-2xl font-bold text-slate-800'> 237,889 </p>
                    </div>
                </div>

                <div className='mt-2 w-full lg:w-2/6 flex'>
                    <div className='flex items-center mr-14'>
                        <div className="w-5 h-1.5 mr-3 bg-teal-500"></div>
                        <p className="font-medium text-xs text-slate-600"> Shipments </p>
                    </div>
                    <div className='flex items-center mr-5'>
                        <div className="w-5 h-1.5 mr-3 bg-violet-500"></div>
                        <p className="font-medium text-xs text-slate-600"> Vehicles </p>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
              {activeShipmentsMenu === '1' ? 
                <LineChart chartData={dailyData} /> :
              activeShipmentsMenu === '2' ? 
              <LineChart chartData={dailyData} /> : 
              activeShipmentsMenu === '4' ? 
              <LineChart chartData={yearlyData} /> : 
              <LineChart chartData={monthlyData} />
              }
                                
            </div>
        </div>
    </section>
  )
}

export default ShipmentsContainer