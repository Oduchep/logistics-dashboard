import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { DataContext } from '../utilities/DataContext';


const NavLink = ({location, navIcon, href, aTag}) => {
    //assigning location variable
    const router = useRouter();

    //destructuring pathname from location
    const { pathname } = router;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const { setNavIsOpen } = useContext(DataContext)


  return (
    <li className={`flex items-center px-5 py-3 my-1 rounded-full ${splitLocation[1] === location ? "bg-blue-600 dark:bg-blue-800" : ""}`} onClick={() => setNavIsOpen(false)}>
        <span className={`flex items-center text-2xl ${splitLocation[1] === location ? "text-white" : "text-slate-600 dark:text-slate-400"}`}> {navIcon} </span>
        <Link href={href}>
            <a className={`ml-3 text-sm ${splitLocation[1] === location ? "text-white" : "transition-all delay-200 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:font-bold"}`}>{aTag}</a>
        </Link>
    </li>
  )
}

export default NavLink