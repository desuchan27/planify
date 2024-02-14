import { FC } from 'react'
import LoginForm from '../components/LoginForm'
import Image from 'next/image'
import Link from 'next/link'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <div className='w-full px-8 pb-20'>
        <div className='pb-4'>
          <h1 className='text-2xl font-semibold'>Welcome!</h1>
          <p>Sign in to your account</p>
        </div>
        <LoginForm />
        <p 
            className="mt-4 text-sm"
        >don&apos;t have an existing account? {""} 
            <span className="font-semibold text-primary">
                <Link href={"/registration"}>
                    Sign Up
                </Link>
            </span>
        </p>
      </div>
    </div>
    )
}

export default page