import { useState } from 'react'

const VehiclesTableHead = ({ title }) => {
    const [text, setText] = useState('')
    
    const getInnerText = (e) => {
        let targetText = e.target.innerText.toLowerCase();
        targetText === 'first' || '' ? setNumToogle(0) : setNumToogle(1);
        console.log(targetText);
      };

  return (
    <li onClick={(e) => setToggleMenu(e.target.id)} className={`uppercase text-xs px-3 py-5 mx-2 ${toggleMenu === '1' || '' ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-500'}`}> {title} </li>
  )
}

export default VehiclesTableHead