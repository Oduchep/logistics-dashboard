import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {

  const [logData, setLogData] = useState([
        {
          id: 1,
          transporter: 'Johnson C',
          location: 'Lagos',
          logStatus: 'In Transit',
          vehicleNumber: 'ET-272-KJA',
          vehicleName: 'Toyota Highlander 2004',
          destination: 'Ikeja',
        },
        {
          id: 2,
          transporter: 'Jeremy Lopez',
          location: 'Lagos',
          logStatus: 'Cancelled',
          vehicleNumber: 'LG-272-KJA',
          vehicleName: 'Lexus 350 2000',
          destination: 'Ikeja',
        },
        {
          id: 3,
          transporter: 'indiana Jones',
          location: 'Abuja',
          logStatus: 'Completed',
          vehicleNumber: 'AJ-111-KVF',
          vehicleName: 'Toyota Highlander 2004',
          destination: 'Lokoja',
        },
        {
          id: 4,
          transporter: 'Peter Okerulu',
          location: 'Port Harcourt',
          logStatus: 'In Transit',
          vehicleNumber: 'PH-144-KSJ',
          vehicleName: 'Ford F150',
          destination: 'Abuja',
        },
  ]);
  

  return (
    <DataContext.Provider
      value={[
        logData,
        setLogData,
        ]}
    >
      {props.children}
    </DataContext.Provider>
  );
};