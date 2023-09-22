
import { Outlet } from 'react-router-dom'
import UserMenu from '../Components/Pages/DashBoard/DashboardMenu/UserMenu'
import DasNav from '../Components/Pages/DashBoard/DasNav'


const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen lg:flex '>
      <UserMenu></UserMenu>
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          <DasNav></DasNav>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout


