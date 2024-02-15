"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface MainSideProps {}

const MainSide: FC<MainSideProps> = ({}) => {
  const pathname = usePathname();

  const routes = [
    { href: "/dashboard/daily", label: "Daily", active: pathname === "/dashboard/daily" },
    { href: "/dashboard/work", label: "Work", active: pathname === "/dashboard/work"},
    { href: "/dashboard/plan", label: "Plan", active: pathname === "/dashboard/plan"}
  ];

  return (
    <nav className='w-full flex flex-col'>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-2xl font-medium transition-colors hover:text-custom-purple border-solid border-b border-secondary w-full text-center',
            route.active ? 'bg-secondary' : 'text-neutral-500'
          )}
        >
          <h3 className=' my-2'>{route.label}</h3>
      </Link>
      ))}
    </nav>
  );
};

export default MainSide;
