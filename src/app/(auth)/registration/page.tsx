import { FC } from 'react'
import RegistrationForm from '../components/RegistrationForm'
import Link from 'next/link'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (<div>
      <div className='w-full px-8 pb-20'>
        <div className='pb-4'>
          <h1 className='text-2xl font-semibold'>Registration</h1>
          <p>Create a new account</p>
        </div>
        <RegistrationForm />
        <p 
            className="mt-4 text-sm"
        >have an existing account? {""} 
            <span className="font-semibold text-primary">
                <Link href={"/registration"}>
                    Log-In
                </Link>
            </span>
        </p>
      </div>
    </div>)
}

export default page