import TopNav from '../components/top-nav'
import VehiclesMenuTab from '../components/vehicles-menu-tab'


const Vehicles = () => {
  return (
    <>
      <TopNav/>
      <section className="mt-2">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white"> Vehicles </h2>
        <p className="my-1 text-slate-600 dark:text-white text-sm">
          Manage and track All Vehicles on the IPI Network.
        </p>
      </section>

      <section className='my-8'>
        <VehiclesMenuTab/>
      </section>
    </>
  )
}

export default Vehicles