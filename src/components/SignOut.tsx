"use client"

import { FC } from 'react'
import { Button } from './ui/button'
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface SignOutProps {
  
}

const SignOut: FC<SignOutProps> = ({}) => {

    const { data: session, status: loading } = useSession();
    const handleSignOut = async () => {
        try{
            await signOut({ callbackUrl: `${window.location.origin}/login` });
        redirect('/login');
        } catch(error) {
            console.log(error)
        }
    
    }
    
  return (
    <div><Button onClick={handleSignOut}> <span className='text-sm'>{session?.user?.name}</span> Sign Out</Button></div>
  )
}

export default SignOut