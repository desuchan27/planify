"use client"
import { User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { FC } from 'react'

interface UserProfileProps {
  
}

const UserProfile: FC<UserProfileProps> = ({}) => {

   const { data: session, status: loading } = useSession();


  return (
    <div className='w-full h-fit py-5 border-solid border-b border-secondary flex flex-row items-center justify-center'>
        <h1 className='text-xl'>{session?.user?.name}</h1>
        <User className='ml-4 h-10 w-10'/>
    </div>
    )
}

export default UserProfile