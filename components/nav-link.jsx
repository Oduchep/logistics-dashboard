import Link from 'next/link'
import { useRouter } from 'next/router'


const NavLink = ({location, navIcon, href, aTag}) => {
    //assigning location variable
    const router = useRouter();

    //destructuring pathname from location
    const { pathname } = router;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


  return (
    <li className={`flex items-center px-5 py-3 rounded-full ${splitLocation[1] === location ? "bg-blue-500" : ""}`}>
        <span className={`flex items-center text-2xl ${splitLocation[1] === location ? "text-white" : "text-slate-600"}`}> {navIcon} </span>
        <Link href={href}>
            <a className={`ml-3 text-sm font-medium ${splitLocation[1] === location ? "text-white" : "transition-all delay-200 text-slate-600 hover:text-blue-500"}`}>{aTag}</a>
        </Link>
    </li>
  )
}

export default NavLink