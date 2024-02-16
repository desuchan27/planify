import { FC } from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import UserProfile from './UserProfile'
import MainSide from './ui/MainSide'

interface SidebarProps {
  
}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className='w-full h-screen px-4 py-2 border-solid border-r border-secondary'>
      <div className='mb-2'>
        <UserProfile />
      </div>
      <MainSide />
    </div>
    )
}

export default Sidebar