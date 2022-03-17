import { useContext} from 'react'
import TopNav from "../components/top-nav";
import Card from "../components/card";
import { BsPersonFill, BsPeopleFill } from 'react-icons/bs'
import {GiCargoShip} from 'react-icons/gi'
import ShipmentsContainer from "../components/shipments-container";
import { DataContext } from '../utilities/DataContext';


export default function Home() {
  const {userData} = useContext(DataContext)
  const [user] = userData

  return (
    <div>
      <TopNav/>

      <section className="mt-2">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white"> Good Evening, {user.name}</h2>
        <p className="my-1 text-slate-600 text-sm dark:text-white">
          Glad to have you back, here&#39;s an overview of your operations today
        </p>
      </section>

      <section className="flex justify-between flex-wrap mt-2">
        <Card 
          bgHover='hover:bg-blue-600 dark:hover:bg-blue-800'
          textHover='hover:text-white'
          heading='Registered customers'
          number='380.2k'
          joined='3467 Joined'
          iconbg='bg-blue-600 dark:bg-blue-800'
          icon={<BsPersonFill/>} 
        />

        <Card 
          bgHover='hover:bg-teal-500 dark:hover:bg-teal-700'
          textHover='hover:text-white'
          heading='Registered transporters'
          number='15.6m'
          joined='3467 Onboarded'
          iconbg='bg-teal-500 dark:bg-teal-700'
          icon={<BsPeopleFill/>}
        />

        <Card 
          bgHover='hover:bg-pink-500 dark:hover:bg-pink-700'
          textHover='hover:text-white'
          heading='Total shipments'
          number='348.9k'
          joined='3467 Shipped'
          iconbg='bg-pink-500 dark:bg-pink-700'
          icon={<GiCargoShip/>}
        />
      </section>

      <ShipmentsContainer/>
    </div>
  )
}
