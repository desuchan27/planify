import { FC } from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import UserProfile from './UserProfile'
import MainSide from './ui/MainSide'

interface SidebarProps {
  
}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className='w-full h-screen px-4 py-4 border-solid border-r border-secondary'>
      <div className='mb-2'>
        <UserProfile />
      </div>
      <Button variant='secondary' className='w-full py-8 mb-2'><PlusCircleIcon className='mr-2'/>Create New</Button>
      <MainSide />
    </div>
    )
}

export default Sidebar