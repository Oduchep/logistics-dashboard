
const VehiclesTabContent = ({index, activeTab, children}) => {
  return (
    activeTab === index ? <div className="TabContent">
     { children }
    </div>
   : null
    )
}

export default VehiclesTabContent