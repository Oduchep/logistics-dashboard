import TopNav from "../components/top-nav";
import Card from "../components/card";
import { BsPersonFill, BsPeopleFill } from 'react-icons/bs'
import {GiCargoShip} from 'react-icons/gi'
import ShipmentsContainer from "../components/shipments-container";


export default function Home() {
  return (
    <div>
      <TopNav/>

      <section className="mt-2">
        <h2 className="text-3xl font-bold text-slate-800"> Good Evening, Peter</h2>
        <p className="my-1 text-slate-600 text-sm">
          Glad to have you back, here&#39;s an overview of your operations today
        </p>
      </section>

      <section className="flex justify-between flex-wrap mt-2">
        <Card 
          bgHover='hover:bg-blue-500'
          textHover='hover:text-white'
          heading='Registered customers'
          number='380.2k'
          joined='3467 Joined'
          iconbg='bg-blue-500'
          icon={<BsPersonFill/>} 
        />

        <Card 
          bgHover='hover:bg-teal-500'
          textHover='hover:text-white'
          heading='Registered transporters'
          number='15.6m'
          joined='3467 Onboarded'
          iconbg='bg-teal-500'
          icon={<BsPeopleFill/>}
        />

        <Card 
          bgHover='hover:bg-pink-500'
          textHover='hover:text-white'
          heading='Total shipments'
          number='348.9k'
          joined='3467 Shipped'
          iconbg='bg-pink-500'
          icon={<GiCargoShip/>}
        />
      </section>

      <ShipmentsContainer/>
    </div>
  )
}
