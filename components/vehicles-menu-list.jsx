const VehiclesMenuList = ({ title, index, activeTab, setActiveTab  }) => {
    const toggleMenu = () => {
      setActiveTab(index);
    }

  return (
    <li onClick={toggleMenu} className={`uppercase text-xs px-3 py-5 mx-2 ${activeTab === index ? 'border-b-4 border-b-blue-500 text-blue-500' : 'text-slate-500 dark:text-white cursor-pointer'}`}> {title} </li>
  )
}

export default VehiclesMenuList