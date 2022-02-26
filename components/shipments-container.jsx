import React from 'react'

const ShipmentsContainer = () => {
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
                    <li className="font-medium text-slate-600 px-2 py-1 mx-1"> 1D </li>
                    <li className="font-medium text-slate-600 px-2 py-1 mx-1"> SD </li>
                    <li className="bg-blue-500 font-medium text-white px-2 py-1 mx-1"> 1M </li>
                    <li className="font-medium text-slate-600 px-2 py-1 mx-1"> 1Y </li>
                    <li className="font-medium text-slate-600 px-2 py-1 mx-1"> Max </li>
                </ul>
            </div>
        </div>

        <div className='my-4 bg-white p-5'>
            <div className='flex justify-between flex-wrap'>
                <div className='mt-2 w-full lg:w-2/6 flex justify-between'>
                    <div>
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
                        <p className="font-medium text-xs text-slate-600"> Shipments </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShipmentsContainer