import {TiHome} from 'react-icons/ti';
import {FaTruck, FaFileInvoice} from 'react-icons/fa'
import {BsPersonFill, BsPeopleFill} from 'react-icons/bs'
import {GiCargoShip} from 'react-icons/gi'
import {MdSupport} from 'react-icons/md'
import {SiGoogleanalytics} from 'react-icons/si'
import {HiCreditCard} from 'react-icons/hi'
import {AiTwotoneSetting} from 'react-icons/ai'
import NavLink from './nav-link';


const SideNav = () => {

  return (
    <nav>
      <h1 className='px-5 font-bold text-2xl mb-5 dark:text-white'>IPI<span className='text-blue-600'>.</span></h1>
      <ul className='scroll-smooth'>
        <p className='uppercase font-medium text-slate-600 dark:text-slate-400 text-xs px-5 py-3'> Main menu </p>
       
        <NavLink
          location=''
          navIcon={<TiHome/>}
          href='/' 
          aTag='Home'
        />

        <NavLink
          location='vehicles'
          navIcon={<FaTruck/>}
          href='/vehicles' 
          aTag='Vehicles'
        />

        <NavLink
          location='transporters'
          navIcon={<BsPeopleFill/>}
          href='/transporters' 
          aTag='Transporters'
        />

        <NavLink
          location='customers'
          navIcon={<BsPersonFill/>}
          href='/customers' 
          aTag='Customers'
        />

        <NavLink
          location='shipments'
          navIcon={<GiCargoShip/>}
          href='/shipments' 
          aTag='Shipments'
        />
      </ul>
      

      <ul className='mt-5'>
        <p className='uppercase font-medium text-slate-600 dark:text-slate-400 text-xs px-5 py-3'> Internal tools </p>
        <NavLink
          location='support-tickets'
          navIcon={<MdSupport/>}
          href='/support-tickets' 
          aTag='Support Tickets'
        />

        <NavLink
          location='invoices'
          navIcon={<FaFileInvoice/>}
          href='/invoices' 
          aTag='Invoices'
        />

        <NavLink
          location='analytics'
          navIcon={<SiGoogleanalytics/>}
          href='/analytics' 
          aTag='Analytics'
        />

        <NavLink
          location='payments'
          navIcon={<HiCreditCard/>}
          href='/payments' 
          aTag='Payments'
        />

        <NavLink
          location='settings'
          navIcon={<AiTwotoneSetting/>}
          href='/settings' 
          aTag='Settings'
        />
      </ul>
    </nav>
  )
}

export default SideNav