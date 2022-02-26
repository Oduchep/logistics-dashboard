import React from 'react'
import Link from 'next/link'
import {TiHome} from 'react-icons/ti';
import {FaTruck} from 'react-icons/fa'
import {BsPersonFill, BsPeopleFill} from 'react-icons/bs'
import {GiCargoShip} from 'react-icons/gi'
import NavLink from './nav-link';


const SideNav = () => {

  return (
    <nav>
      <h1 className='px-5 font-bold text-2xl mb-5'>IPI.</h1>
      <ul className='scroll-smooth'>
        <p className='uppercase font-medium text-slate-600 text-xs px-5 py-3'> Main menu </p>
       
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

        <li className='flex items-center px-5 py-3 rounded-3xl'>
          <span className='flex items-center text-2xl text-slate-600'> <BsPeopleFill/> </span>
          <Link href="/">
            <a className='ml-3 text-sm text-slate-600'>Transporters</a>
        </Link>
        </li>

        <li className='flex items-center px-5 py-3 rounded-full'>
          <span className='flex items-center text-2xl text-slate-600'> <BsPersonFill/> </span>
          <Link href="/">
            <a className='ml-3 text-sm text-slate-600'>Customers</a>
        </Link>
        </li>

        <li className='flex items-center px-5 py-3 rounded-full'>
          <span className='flex items-center text-2xl text-slate-600'> <GiCargoShip/> </span>
          <Link href="/">
            <a className='ml-3 text-sm text-slate-600'>Shipments</a>
        </Link>
        </li>
      </ul>

      <ul className='mt-5'>
        <p className='uppercase font-medium text-slate-600 text-xs px-5 py-3'> Internal tools </p>
        <li className='px-5 py-3 rounded-3xl'>
          <span className='w-2.5 h-2.5 bg-gray-600'> M </span>
          <Link href="/">
            <a className='ml-3 text-sm text-slate-600'>Support Tickets</a>
        </Link>
        </li>

        <li className='px-5 py-3 rounded-3xl'>
          <span className='w-2.5 h-2.5 bg-gray-600'> M </span>
          <Link href="/">
            <a className='ml-3 text-sm text-slate-600'>Invoices</a>
        </Link>
        </li>

        <li className='px-5 py-3 rounded-3xl'>
          <span className='w-2.5 h-2.5 bg-gray-600'> M </span>
          <Link href="/">
            <a className='ml-3 text-sm text-slate-600'>Analytics</a>
        </Link>
        </li>

        <li className='px-5 py-3 rounded-3xl'>
          <span className='w-2.5 h-2.5 bg-gray-600'> M </span>
          <Link href="/">
            <a className='ml-3 text-sm text-slate-600'>Payments</a>
        </Link>
        </li>

        <li className='px-5 py-3 rounded-3xl'>
          <span className='w-2.5 h-2.5 bg-gray-600'> M </span>
          <Link href="/">
            <a className='ml-3 text-sm text-slate-600'>Settings</a>
        </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav