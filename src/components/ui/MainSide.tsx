"use client"

import { cn } from '@/lib/utils';
import { Activity, Briefcase, Calendar, NotebookPen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface MainSideProps {}

const MainSide: FC<MainSideProps> = ({}) => {
  const pathname = usePathname();

  return (
    <nav className='w-full flex flex-col'>
      <Link href="/dashboard">
        <div
          className={cn(
            'font-medium transition-colors hover:text-custom-purple rounded-md w-full text-center flex items-center px-10',
            pathname === "/dashboard" ? 'bg-secondary my-1' : 'text-neutral-500'
          )}
        >
          <Activity className='mr-2 h-8 w-8'/>
          <h3 className='my-2 py-2'>Overview</h3>
        </div>
      </Link>
      <Link href="/dashboard/daily">
        <div
          className={cn(
            'font-medium transition-colors hover:text-custom-purple rounded-md w-full text-center flex items-center px-10',
            pathname === "/dashboard/daily" ? 'bg-secondary my-1' : 'text-neutral-500'
          )}
        >
          <NotebookPen className='mr-2 h-8 w-8'/>
          <h3 className='my-2 py-2'>Daily</h3>
        </div>
      </Link>
      <Link href="/dashboard/work">
        <div
          className={cn(
            'font-medium transition-colors hover:text-custom-purple rounded-md w-full text-center flex items-center px-10',
            pathname === "/dashboard/work" ? 'bg-secondary my-1' : 'text-neutral-500'
          )}
        >
          <Briefcase className='mr-2 h-8 w-8'/>
          <h3 className='my-2 py-2'>Work</h3>
        </div>
      </Link>
      <Link href="/dashboard/plan">
        <div
          className={cn(
            'font-medium transition-colors hover:text-custom-purple rounded-md w-full text-center flex items-center px-10',
            pathname === "/dashboard/plan" ? 'bg-secondary my-1' : 'text-neutral-500'
          )}
        >
          <Calendar className='mr-2 h-8 w-8'/>
          <h3 className=' my-2 py-2'>Plan</h3>
        </div>
      </Link>
    </nav>
  );
};

export default MainSide;
