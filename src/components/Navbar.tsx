import Link from 'next/link'
import { FC } from 'react'
import SignOut from './SignOut'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
        <div className="w-full py-2 px-8 shadow-2xl flex flex-row justify-between border-solid border-b border-secondary h-fit">
            <Link href="/dashboard">
                <h1 className="text-xl md:text-4xl font-semibold">PLANIFY</h1>
            </Link>
            <SignOut />
        </div>
        )
}

export default Navbar